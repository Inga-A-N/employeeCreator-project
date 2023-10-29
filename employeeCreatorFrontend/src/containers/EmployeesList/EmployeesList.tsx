import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";

function EmployeesList({ employees }) {
  return (
    <div>
      {employees.length > 0 &&
        employees.map(
          (employee: {
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
            return <EmployeeCard key={employee.id} employee={employee} />;
          }
        )}
    </div>
  );
}
export default EmployeesList;
