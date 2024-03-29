/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* This example requires Tailwind CSS v2.0+ */
import {
  CalendarIcon, FolderIcon, InboxIcon,
  MenuIcon,
  UsersIcon
} from '@heroicons/react/outline';
import { useState } from 'react';
import CreateButton from '../../components/molecules/CreateButton';
import SideMenuDesktop from '../../components/organisms/SideMenuDesktop';
import SideMenuMobile from '../../components/organisms/SideMenuMobile';
import Table from '../../components/organisms/Table';
import UpdateModal from '../../components/organisms/UpdateModal';

const navigation = [
  { name: 'Clients', href: '/app/clients', icon: UsersIcon, current: true },
  { name: 'Projects', href: '/app/projects', icon: FolderIcon, current: false },
  { name: 'Invoices', href: '/app/invoices', icon: InboxIcon, current: false },
  { name: 'Calendar', href: '/app/calendar', icon: CalendarIcon, current: false }
];

export default function Client() {
  const module = 'Client';
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {isOpen && (
      <UpdateModal
        type=""
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      )}
      {/* Dynamic sidebar for mobile */}
      <SideMenuMobile
        navigation={navigation}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      {/* Static sidebar for desktop */}
      <SideMenuDesktop
        navigation={navigation}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6 m-5">
            <div className="flex justify-between max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-3xl font-semibold text-gray-800">
                {`${module}s`}
              </h1>
              <div onClick={() => openModal}>
                <CreateButton
                  text={`New ${module}`}
                  category="primary"
                />
              </div>
            </div>
            <Table />
          </div>
        </main>
      </div>
    </div>
  );
}
