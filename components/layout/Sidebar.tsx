import { menuItems } from "@/lib/constants";

const Sidebar = () => {
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
      <div className="fixed flex flex-col top-20 left-0 w-64 bg-white h-full border-r">
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">
                  Menu
                </div>
              </div>
            </li>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    {item.icon}
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    {item.label}
                  </span>
                  {item.badge && (
                    <span
                      className={`px-2 py-0.5 ml-auto text-xs font-medium tracking-wide ${item.badge.color} rounded-full`}
                    >
                      {item.badge.text}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
