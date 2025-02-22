import { FC } from 'react';
import Link from 'next/link';
import { 
  HomeIcon, 
  UserGroupIcon, 
  FolderIcon, 
  CalendarIcon, 
  ChartBarIcon,
  InboxIcon
} from '@heroicons/react/24/outline';

const Sidebar: FC = () => {
  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'My Work', href: '/my-work', icon: InboxIcon },
    { name: 'Teams', href: '/teams', icon: UserGroupIcon },
    { name: 'Projects', href: '/projects', icon: FolderIcon },
    { name: 'Calendar', href: '/calendar', icon: CalendarIcon },
    { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
  ];

  return (
    <div className="w-16 bg-[#1c1f3b] flex flex-col items-center py-4">
      {/* Logo */}
      <div className="w-8 h-8 bg-blue-500 rounded-lg mb-8 flex items-center justify-center">
        <span className="text-white font-bold">M</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex flex-col items-center p-2 text-gray-300 hover:text-white group"
          >
            <item.icon className="w-6 h-6" />
            <span className="text-xs mt-1">{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* User Profile */}
      <div className="mt-auto">
        <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white text-sm">
          MH
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 