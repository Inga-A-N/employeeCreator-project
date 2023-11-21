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

export const getEmployeeById = async (id: Number) => {
  const response = await fetch(`http://localhost:8080/employees/${id}`);
  console.log(response);

  if (!response.ok) {
    throw new Error("Could not find employee");
  }
  return await response.json();
};

export const editEmployeeById = async (id: Number, data) => {
  const response = await fetch(`http://localhost:8080/employees/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Could not edit employee");
  }
};
