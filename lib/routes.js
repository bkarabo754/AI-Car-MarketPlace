import { LayoutDashboard, Car, Calendar, Cog } from 'lucide-react';

export const adminRoutes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/admin',
  },
  {
    label: 'Cars',
    icon: Car,
    href: '/admin/cars',
  },
  {
    label: 'Test Drives',
    icon: Calendar,
    href: '/admin/test-drives',
  },
  {
    label: 'Settings',
    icon: Cog,
    href: '/admin/settings',
  },
];
