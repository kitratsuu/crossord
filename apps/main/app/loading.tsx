import { LogoMark } from "@/components/logo";

const css = `
@keyframes logo-cell-pulse {
  0%, 100% { opacity: 0.25; transform: scale(0.82); }
  40% { opacity: 1; transform: scale(1); }
}
.logo-cell {
  transform-box: fill-box;
  transform-origin: center;
  animation: logo-cell-pulse 1.2s ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce) {
  .logo-cell { animation: none; }
}`;

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#070B17]">
      <style>{css}</style>
      <LogoMark tone="light" animated className="h-16 w-16" />
    </div>
  );
}
