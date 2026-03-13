interface UpcurvLogoProps {
  size?: number;
  className?: string;
}

export const UpcurvLogo = ({ size = 32, className }: UpcurvLogoProps) => {
  const r = size * 0.15; // corner radius
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Red rounded square background */}
      <rect width="100" height="100" rx={r / size * 100} fill="#F9423A" />
      {/* U shape made of geometric blocks - inspired by the reference image style */}
      {/* Left vertical bar */}
      <rect x="20" y="18" width="22" height="48" rx="2" fill="white" />
      {/* Right vertical bar */}
      <rect x="58" y="18" width="22" height="48" rx="2" fill="white" />
      {/* Bottom horizontal bar connecting them */}
      <rect x="20" y="58" width="60" height="18" rx="2" fill="white" />
      {/* Small accent block top-right area */}
      <rect x="58" y="80" width="22" height="4" rx="1" fill="white" opacity="0.4" />
    </svg>
  );
};
