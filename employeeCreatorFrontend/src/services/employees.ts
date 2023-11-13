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

export const createNewEmployee = async (data) => {
  const response = await fetch("http://localhost:8080/employees", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Could not create new employee");
  }
};
