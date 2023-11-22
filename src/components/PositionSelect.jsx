import React from 'react'

const PositionSelect = ({positions,onSelectPosition}) => {
  return (
    <select onChange={(e) => onSelectPosition(e.target.value)}>
      <option value="">Select Position</option>
      {positions.map((position) => (
        <option key={position.id} value={position.id}>
          {position.name}
        </option>
      ))}
    </select>
  )
}

export default PositionSelect;
