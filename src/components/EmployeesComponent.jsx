import React from "react";
import { useQuery } from "react-query";
import { fetchEmployees, deleteUser } from "../api/usersApi";
import DeleteUserComponent from "./DeleteUserComponent";

function EmployeesComponent() {
  const { data: employees, isLoading, error, refetch } = useQuery(
    "employees",
    fetchEmployees
  );

  const handleDelete = async (userId) => {
      await deleteUser(userId);
      refetch();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {employees.map((employee) => (
        <div key={employee.id}>
          {employee.firstName} ({employee.id})
          <DeleteUserComponent
            userId={employee.id}
            onDelete={() => handleDelete(employee.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default EmployeesComponent;