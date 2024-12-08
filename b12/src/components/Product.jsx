import React from 'react'

export default function Product({ product, onBuy, onSell }) {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>Giá: ${product.price.toLocaleString()}</p>
      <p>Số lượng: {product.quantity}</p>
      <button onClick={() => onBuy(product.id)}>Buy</button>
      <button onClick={() => onSell(product.id)}>Sell</button>
    </div>
  )
}
