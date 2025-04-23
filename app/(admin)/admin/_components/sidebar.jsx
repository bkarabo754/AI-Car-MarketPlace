'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { SignOutButton } from '@clerk/nextjs';
import { cn } from '@/lib/utils';
import { adminRoutes } from '../../../../lib/routes';

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex h-full flex-col overflow-y-auto bg-white shadow-sm border-r">
        <div className="p-6">
          <Link href="/admin">
            <span className="text-xl font-bold">Vehiql Admin</span>
          </Link>
        </div>

        <nav className="flex flex-col w-full">
          {adminRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'flex items-center gap-x-2 text-sm font-medium pl-6 h-12 transition-all',
                pathname === route.href
                  ? 'text-blue-700 bg-blue-100/50 hover:bg-blue-100'
                  : 'text-slate-500 hover:text-slate-600 hover:bg-slate-100/50'
              )}
            >
              <route.icon className="h-5 w-5" />
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto p-6">
          <SignOutButton>
            <button className="flex items-center gap-x-2 text-slate-500 text-sm font-medium transition-all hover:text-slate-600">
              <LogOut className="h-5 w-5" />
              Log out
            </button>
          </SignOutButton>
        </div>
      </aside>

      {/* Mobile Bottom Tabs */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-t border-gray-200 dark:border-zinc-700 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] flex justify-around items-center h-16">
        {adminRoutes.map((route) => {
          const isActive = pathname === route.href;
          return (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'flex flex-col items-center justify-center text-[0.75rem] font-semibold transition-all duration-200 ease-in-out flex-1 group',
                isActive
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              )}
            >
              <div
                className={cn(
                  'h-9 w-9 flex items-center justify-center rounded-full transition-all duration-300',
                  isActive
                    ? 'bg-blue-100 dark:bg-blue-900/30 shadow-md'
                    : 'group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800'
                )}
              >
                <route.icon
                  className={cn(
                    'h-5 w-5',
                    isActive && 'text-blue-600 dark:text-blue-300'
                  )}
                />
              </div>
              <span className="mt-1">{route.label}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
};
