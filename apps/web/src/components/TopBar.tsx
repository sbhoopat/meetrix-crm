import clsx from 'clsx';
import { Bell, MoonStar, Search, Sun, UserCircle2 } from 'lucide-react';

type Props = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

export const TopBar = ({ theme, onToggleTheme }: Props) => {
  const isLight = theme === 'light';
  return (
    <header
      className={clsx(
        'sticky top-0 z-10 flex items-center justify-between border-b px-4 py-4 backdrop-blur sm:px-6',
        isLight ? 'border-slate-200 bg-white/80' : 'border-white/5 bg-black/30'
      )}
    >
      <div
        className={clsx(
          'flex w-full max-w-lg items-center gap-3 rounded-full px-4 py-2',
          isLight ? 'bg-slate-100 border border-slate-200 text-[#003b5c]' : 'border border-white/10'
        )}
      >
        <Search size={18} className="text-gray-500" />
        <input
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-500"
          placeholder="Search leads, campaigns, automation..."
        />
      </div>
      <div className="ml-4 flex items-center gap-3">
        <button
          onClick={onToggleTheme}
          className={clsx(
            'rounded-full border p-2 transition',
            isLight ? 'border-slate-200 text-[#003b5c] hover:border-slate-400' : 'border-white/10 hover:border-neon-cyan'
          )}
          aria-label="Toggle theme"
        >
          {isLight ? <MoonStar size={18} /> : <Sun size={18} />}
        </button>
        <button
          className={clsx(
            'relative rounded-full border p-2',
            isLight ? 'border-slate-200 text-[#003b5c]' : 'border-white/10'
          )}
        >
          <Bell size={18} />
          <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-neon-orange"></span>
        </button>
        <div
          className={clsx(
            'flex items-center gap-2 rounded-full border px-3 py-2 text-sm',
            isLight ? 'border-slate-200 text-[#003b5c]' : 'border-white/10'
          )}
        >
          <UserCircle2 size={22} />
          <div>
            <p className="text-xs leading-tight text-gray-400">Logged in</p>
            <p className="font-semibold">Sailaja</p>
          </div>
        </div>
      </div>
    </header>
  );
};

