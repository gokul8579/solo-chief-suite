import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { PageHeader } from '@/components/shared/PageHeader';
import { DataTable } from '@/components/shared/DataTable';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { ViewToggle } from '@/components/shared/ViewToggle';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { GraduationCap, Mail, Phone, Building2, Calendar } from 'lucide-react';

const usePersistedView = (key: string, fallback: 'list' | 'grid' = 'list') => {
  const [view, setView] = useState<'list' | 'grid'>(() => (localStorage.getItem(key) as 'list' | 'grid') || fallback);
  useEffect(() => { localStorage.setItem(key, view); }, [key, view]);
  return [view, setView] as const;
};

type Application = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  college: string;
  degree: string;
  graduation_year: number;
  role_applied: string;
  portfolio_url: string | null;
  message: string | null;
  status: string;
  created_at: string;
};

const STATUSES = ['new', 'reviewing', 'shortlisted', 'rejected', 'hired'];

const InternshipApplications = () => {
  const [apps, setApps] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = usePersistedView('internship-apps-view');

  const fetchApps = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('internship_applications' as any).select('*').order('created_at', { ascending: false });
    if (error) { toast.error('Failed to load applications'); setLoading(false); return; }
    setApps((data as any) || []);
    setLoading(false);
  };

  useEffect(() => { fetchApps(); }, []);

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase.from('internship_applications' as any).update({ status }).eq('id', id);
    if (error) { toast.error('Failed to update'); return; }
    toast.success('Status updated');
    setApps(prev => prev.map(a => a.id === id ? { ...a, status } : a));
  };

  const columns = [
    { key: 'full_name', label: 'Name', render: (item: Application) => <span className="font-medium">{item.full_name}</span> },
    { key: 'role_applied', label: 'Role', render: (item: Application) => <Badge variant="outline" className="text-xs">{item.role_applied}</Badge> },
    { key: 'college', label: 'College', render: (item: Application) => <span>{item.college}</span> },
    { key: 'graduation_year', label: 'Year', render: (item: Application) => <span>{item.graduation_year}</span> },
    { key: 'email', label: 'Email', render: (item: Application) => <span>{item.email}</span> },
    { key: 'phone', label: 'Phone', render: (item: Application) => <span>{item.phone}</span> },
    { key: 'status', label: 'Status', render: (item: Application) => <StatusBadge status={item.status} /> },
    {
      key: 'actions', label: 'Action', render: (item: Application) => (
        <Select value={item.status} onValueChange={(val) => updateStatus(item.id, val)}>
          <SelectTrigger className="h-8 w-28 text-xs"><SelectValue /></SelectTrigger>
          <SelectContent>
            {STATUSES.map(s => <SelectItem key={s} value={s} className="text-xs capitalize">{s}</SelectItem>)}
          </SelectContent>
        </Select>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <PageHeader title="Internship Applications" description={`${apps.length} applications`} />
        <ViewToggle view={view} onViewChange={setView} />
      </div>

      {view === 'list' ? (
        <DataTable data={apps} columns={columns} loading={loading} searchKeys={['full_name', 'email', 'college']} searchPlaceholder="Search by name, email, college..." />
      ) : (
        loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i}><CardContent className="p-5 space-y-3">
                {Array.from({ length: 4 }).map((_, j) => <div key={j} className="h-4 bg-muted animate-pulse rounded w-3/4" />)}
              </CardContent></Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {apps.map(app => (
              <Card key={app.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{app.full_name}</h3>
                      <Badge variant="outline" className="mt-1 text-xs">{app.role_applied}</Badge>
                    </div>
                    <StatusBadge status={app.status} />
                  </div>
                  <div className="space-y-1.5 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2"><Building2 className="h-3.5 w-3.5" /> {app.college}</div>
                    <div className="flex items-center gap-2"><GraduationCap className="h-3.5 w-3.5" /> {app.degree} · {app.graduation_year}</div>
                    <div className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> {app.email}</div>
                    <div className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> {app.phone}</div>
                    <div className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5" /> {format(new Date(app.created_at), 'dd MMM yyyy')}</div>
                  </div>
                  {app.portfolio_url && (
                    <a href={app.portfolio_url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">View Portfolio →</a>
                  )}
                  <Select value={app.status} onValueChange={(val) => updateStatus(app.id, val)}>
                    <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {STATUSES.map(s => <SelectItem key={s} value={s} className="text-xs capitalize">{s}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default InternshipApplications;
