import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex flex-col place-content-between h-20 bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b-2 border-gray-200 md:flex-row dark:border-gray-600">
      <div>
        <a
          href="https://github.com/Inga-A-N/employeeCreator-project"
          className="flex items-center"
        >
          <img
            src="https://media.sproutsocial.com/uploads/2021/04/engagement-ideas-and-empowerment-strategies.svg"
            className="h-20 mr-3"
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
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:right-0  md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:bg-gray-700 md:hover:text-white md:p-2 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
            <NavLink to="/">Employees</NavLink>
          </li>
          <li
            className="block  text-gray-900 hover:rounded hover:bg-gray-100 
          md:border-l-2 md:hover:bg-transparent md:hover:bg-gray-700 md:hover:text-white md:p-2 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            <NavLink to="/new-employee">New employee</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
