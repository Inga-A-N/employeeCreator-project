import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div>
        <a
          href="https://github.com/Inga-A-N/employeeCreator-project"
          className="flex items-center"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32TkTbjc2fPdN1hsGFEYRc-WIomC2shtWiFWutF-UfO0dp0dtJo_8VXeXMiNp9eylnDY&usqp=CAU"
            className="h-8 mr-3"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Employee Creator
          </span>
        </a>
      </div>
      <div
        className="items-center justify-between w-full md:flex md:w-auto md:order-1 md:justify-end"
        id="navbar-sticky"
      >
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:right-0 md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
            <NavLink to="/">Employees</NavLink>
          </li>
          <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
            <NavLink to="/new-employee">New employee</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
