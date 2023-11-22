import React from 'react'

const RankSelect = ({ ranks, onSelectRank }) => {
  return (
    <select onChange={(e) => onSelectRank(e.target.value)}>
      <option value="">Select Rank</option>
      {ranks.map((rank) => (
        <option key={rank.id} value={rank.id}>
          {rank.name}
        </option>
      ))}
    </select>
  )
}

export default RankSelect
