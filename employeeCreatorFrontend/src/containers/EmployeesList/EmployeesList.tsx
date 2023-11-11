import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";

function EmployeesList({ employees, setRefresh, refresh }) {
  return (
    <div>
      <h1 className="text-xl font-bold">Employees list</h1>
      {employees.length > 0 &&
        employees.map(
          (employee: {
            id: Number;
            firstName: String;
            middleName: String;
            lastName: String;
            email: String;
            phoneNumber: String;
            address: String;
            contractType: String;
            startDate: Date;
            finishDate: Date;
            workBasis: String;
            hoursPerWeek: String;
          }) => {
            return (
              <EmployeeCard
                key={employee.id}
                employee={employee}
                setRefresh={setRefresh}
                refresh={refresh}
              />
            );
          }
        )}
    </div>
  );
}
export default EmployeesList;
