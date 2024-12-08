import React from 'react'

export default function Controls({ searchValue, sortOption, onSearchChange, onSortChange }  ) {
  return (
    <div style={{ marginBottom: "20px" }}>
      {/* Ô input tìm kiếm */}
      <input
        type="text"
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Tìm kiếm sinh viên..."
        style={{ marginRight: "10px" }}
      />

      {/* Select để chọn chiều sắp xếp */}
      <select value={sortOption} onChange={(e) => onSortChange(e.target.value)}>
        <option value="default">Không sắp xếp</option>
        <option value="name-asc">Tên tăng dần</option>
        <option value="name-desc">Tên giảm dần</option>
        <option value="gpa-asc">GPA tăng dần</option>
        <option value="gpa-desc">GPA giảm dần</option>  
      </select>
    </div>
  )
}
