import React from "react";
import { useMutation } from "react-query";
import { deleteUser } from "../api/usersApi";

function DeleteUserComponent({ userId, onDelete }) {
  const mutation = useMutation(deleteUser);

  const handleDelete = async () => {
      await mutation.mutateAsync(userId);
      onDelete();
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
}

export default DeleteUserComponent;