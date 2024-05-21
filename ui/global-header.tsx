// ui/global-header.tsx
'use client';
import { useTheme } from '#/app/context/themeContext';
import { Switch } from '#/ui/catalyst/switch';
import { clsx } from 'clsx'; // Using clsx for consistency with the rest of your code

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const darkMode = theme === 'dark';

  const headerClass = clsx(
    'relative',
    'flex',
    'h-10',
    'w-full',
    'items-center',
    'justify-center',
    darkMode ? 'bg-gray-900' : 'bg-gray-50', // Background colors matching with the rest of the UI
    'px-4',
    'sm:px-6',
    'lg:px-8',
  );

  // Use similar color logic for switch colors as seen in your tables or other components
  const switchColor = darkMode ? 'dark/zinc' : 'white'; // Example: change according to your actual color scheme

  return (
    <header className={headerClass}>
      <div className="flex items-center space-x-6">
        <Switch color={switchColor} checked={darkMode} onChange={toggleTheme} />
      </div>
    </header>
  );
}
