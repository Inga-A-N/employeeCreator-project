export const getAllEmployees = async () => {
  // fetch data
  const response = await fetch("http://localhost:8080/employees");
  return await response.json();
};

export const deleteEmployeeById = async (id: Number) => {
  const response = await fetch(`http://localhost:8080/employees/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Could not remove employee");
  }
};
