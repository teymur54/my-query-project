import React from 'react'

const DepartmentSelect = ({ departments, onSelectDepartment }) => {
  return (
    <select onChange={(e) => onSelectDepartment(e.target.value)}>
      <option value="">Select Department</option>
      {departments.map((department) => (
        <option key={department.id} value={department.id}>
          {department.name}
        </option>
      ))}
    </select>
  )
}

export default DepartmentSelect;
