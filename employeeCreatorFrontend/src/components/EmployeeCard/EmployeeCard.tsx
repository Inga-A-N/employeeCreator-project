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
  return (
    <div>
      <h3>First name: {firstName}</h3>
      <h3>Middle name: {middleName}</h3>
      <h3>Last name: {lastName}</h3>
      <p>Email: {email}</p>
      <p>Phone number: {phoneNumber}</p>
      <p>Address: {address}</p>
      <p>Contract type: {contractType}</p>
      <p>Start date: {startDate}</p>
      <p>Finish date: {finishDate}</p>
      <p>Work basis: {workBasis}</p>
      <p>Hours per week: {hoursPerWeek}</p>
    </div>
  );
}

export default EmployeeCard;