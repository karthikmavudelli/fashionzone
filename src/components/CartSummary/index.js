import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalItems = cartList.length
      let totalPrice = 0
      cartList.forEach(eachItem => {
        const {quantity, price} = eachItem
        totalPrice += quantity * price
      })
      return (
        <div className="cart-summary-section">
          <h1 className="order-total">
            Order Total: <span className="total-price">Rs {totalPrice}/-</span>
          </h1>
          <p className="total-items">{totalItems} items in cart</p>
          <button className="checkout-button" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
