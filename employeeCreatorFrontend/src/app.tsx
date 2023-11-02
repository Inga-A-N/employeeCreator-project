import { useEffect, useState } from "preact/hooks";
import "./app.css";
import { getAllEmployees } from "./services/employees";
import EmployeesList from "./containers/EmployeesList/EmployeesList";

export function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees().then((res) => {
      setEmployees(res);
      console.log(res);
    });
  }, []);

  return (
    <>
      <h1 className="text-xl font-bold text-red-500">Hello</h1>
      <EmployeesList employees={employees} />
    </>
  );
}
