import AnimatedCounter from "./AnimatedCounter";

interface KpiTileProps {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  detail: string;
  icon: React.ReactNode;
  colorClass: string;
  bgClass: string;
}

export default function KpiTile({
  label,
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  detail,
  icon,
  colorClass,
  bgClass,
}: KpiTileProps) {
  return (
    <div className="bg-surface rounded-lg p-5">
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-md ${bgClass} flex items-center justify-center ${colorClass}`}>
          {icon}
        </div>
        <span className="text-[10px] font-semibold tracking-[0.1em] text-text-secondary uppercase">
          {label}
        </span>
      </div>
      <div className="text-2xl md:text-3xl font-bold text-white mb-1">
        <AnimatedCounter
          target={value}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
        />
      </div>
      <p className="text-xs text-text-secondary">{detail}</p>
    </div>
  );
}
