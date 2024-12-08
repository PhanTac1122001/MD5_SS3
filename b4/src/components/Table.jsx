import React from 'react'

export default function Table({data}) {
  return (
    <div>
        <table border="1" style={{ width: "100%", textAlign: "left" }}>
      <thead>
        <tr>
          <th>Mã sinh viên</th>
          <th>Họ và tên</th>
          <th>Điểm trung bình</th>
        </tr>
      </thead>
      <tbody>
        {data.map((student, index) => (
          <tr key={index}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.gpa}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}
