import { FaGear } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';

export default function () {
  let location = useLocation();

  const activeClasses = 'bg-gray-900 text-white';
  const inactiveClasses = 'text-gray-300 hover:bg-gray-700 hover:text-white';

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center">
            <div className="flex space-x-4">
              <Link
                to="/"
                className={`${
                  location.pathname == '/' ? activeClasses : inactiveClasses
                } rounded-md px-3 py-2 text-sm font-medium`}
                aria-current="page"
              >
                Dashboard
              </Link>
              <Link
                to="/settings"
                className={`${
                  location.pathname == '/settings'
                    ? activeClasses
                    : inactiveClasses
                } rounded-md px-3 py-2 text-sm font-medium`}
              >
                Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
