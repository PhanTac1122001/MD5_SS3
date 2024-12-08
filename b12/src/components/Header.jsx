import React from 'react'

export default function Header({ elonWealth, spent }) {
  return (
    <header className="header">
      <h1>Spend Elon Musk's Fortune</h1>
      <div className="wealth-info">
        <p>Tổng tài sản: ${elonWealth.toLocaleString()}</p>
        <p>Đã tiêu: ${spent.toLocaleString()}</p>
      </div>
    </header>
  )
}
