/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import UserProfile from './UserProfile';

export default function SideMenuDesktop(props) {
  const { navigation } = props;

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 bg-croki-400 text-slate-200">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                alt="Workflow"
              />
            </div>
            <nav className="mt-5 flex-1 px-2 bg-croki-400 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-croki-100 text-slate-700'
                      : 'hover:bg-croki-300',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  )}
                >
                  <item.icon
                    className="mr-3 flex-shrink-0 h-6 w-6"
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <Link href="/">
              <a href="#top" className="flex-shrink-0 w-full group block">
                <UserProfile />
              </a>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
