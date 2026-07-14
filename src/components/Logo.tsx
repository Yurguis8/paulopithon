import logoSvg from '../assets/logo-paulo-pithon.svg';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'default' | 'icon-only';
}

export default function Logo({
  className = 'h-10 w-10 sm:h-12 sm:w-12',
  showText = true,
  variant = 'default',
}: LogoProps) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3 select-none min-w-0">
      <div className={`relative flex-shrink-0 ${className}`}>
        <div className="absolute inset-0 bg-tactical-yellow/15 blur-lg rounded-full animate-pulse-glow" />
        <img
          src={logoSvg}
          alt="Paulo Pithon - Instrutor de Armamento e Tiro"
          className="w-full h-full relative z-10 object-contain drop-shadow-[0_2px_8px_rgba(225,173,1,0.25)]"
          width={48}
          height={48}
        />
      </div>

      {showText && variant === 'default' && (
        <div className="flex flex-col min-w-0">
          <span className="font-display font-bold tracking-[0.08em] sm:tracking-[0.12em] text-sm sm:text-lg text-white leading-none truncate">
            PAULO PITHON
          </span>
          <span className="font-mono text-[7px] sm:text-[9px] tracking-[0.15em] sm:tracking-[0.25em] text-tactical-yellow leading-normal truncate">
            INSTRUTOR DE ARMAMENTO E TIRO
          </span>
        </div>
      )}
    </div>
  );
}
