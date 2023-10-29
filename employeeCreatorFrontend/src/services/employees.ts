export const getAllEmployees = async () => {
  // fetch data
  const response = await fetch("http://localhost:8080/employees");
  return await response.json();
};
