import { dateFormat } from "../../utils/dateFormat";

function EmployeeCard({
  employee,
}: {
  employee: {
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
  };
}) {
  const {
    firstName,
    middleName,
    lastName,
    email,
    phoneNumber,
    address,
    contractType,
    startDate,
    finishDate,
    workBasis,
    hoursPerWeek,
  } = employee;
  console.log(new Date({ startDate }.startDate).toLocaleDateString());

  //   const sd = new Date({ startDate }.startDate).toLocaleDateString();

  //   const sd = dateFormat({ startDate }.startDate);

  return (
    <div className="mx-auto my-2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {firstName} {lastName}
        </h3>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {contractType} - {dateFormat({ startDate }.startDate)}-
          {dateFormat({ finishDate }.finishDate)}
        </p>
      </div>
      <div>Email: {email}</div>
      <div className="flex gap-5">
        <button>Edit</button>
        <button>Remove</button>
      </div>

      {/* <h3>First name: {firstName}</h3>
      <h3>Middle name: {middleName}</h3>
      <h3>Last name: {lastName}</h3>
      <p>Email: {email}</p>
      <p>Phone number: {phoneNumber}</p>
      <p>Address: {address}</p>
      <p>Contract type: {contractType}</p>
      <p>Start date: {startDate}</p>
      <p>Finish date: {finishDate}</p>
      <p>Work basis: {workBasis}</p>
      <p>Hours per week: {hoursPerWeek}</p> */}
    </div>
  );
}

export default EmployeeCard;
