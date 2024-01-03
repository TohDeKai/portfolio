// Define the type for the menu item
type MenuItem = {
  title: string;
  link: string;
};

type NavProps = {
  menuItems: MenuItem[];
};

export default function Nav({ menuItems }: NavProps) {
  return (
    <section>
      <div className="py-8 px-4 max-w-screen-xl lg:py-16 lg:px-12  2xl:ml-72 ">
        <ul className="space-y text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
          {menuItems.map((menuItem, index) => (
            <li key={index} className="group">
              <a
                href={menuItem.link}
                className="inline-flex items-center py-3 rounded-lg"
              >
                <hr className="w-10 h-0.5 bg-gray-500 border-0 rounded group-hover:w-40 transition-all duration-300 group-hover:bg-gray-50" />
                <p className="pl-8 text-sm text-gray-500 group-hover:text-gray-50 uppercase">
                  {menuItem.title}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
