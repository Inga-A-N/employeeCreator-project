import { useEffect, useState } from "preact/hooks";
import "./app.css";
import { getAllEmployees } from "./services/employees";
import EmployeesList from "./containers/EmployeesList/EmployeesList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateEmployeeForm from "./components/CreateEmployeeForm/CreateEmployeeForm";
import NavBar from "./components/NavBar/NavBar";

export function App() {
  const [employees, setEmployees] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    getAllEmployees().then((res) => {
      setEmployees(res);
      console.log(res);
    });
  }, [refresh]);

  return (
    <div className="relative top-16 ">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <EmployeesList
                employees={employees}
                refresh={refresh}
                setRefresh={setRefresh}
              />
            }
          />
          <Route path="/new-employee" element={<CreateEmployeeForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
