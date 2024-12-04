import React from "react";
import { useNavigate } from "react-router-dom";  
import { Link } from "react-router-dom";  
import { useCart } from "../CartContext";
import MainLayout from "../Layout/MainLayout";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate(); 


  const totalPrice = cart.reduce(
    (total, game) => total + game.price * game.quantity,
    0
  );

   
    const handleCheckout = () => {
      navigate("/bill", { state: { cart, totalPrice } });  
    };

  return (
   
    <div className='bill-back' > 
<MainLayout>
  <div className="cart-page">
    <h2 className="cart-page-title">سلة التسوق</h2>
    {cart.length === 0 ? (
      <p className="cart-empty-message">لا توجد منتجات في السلة</p>
    ) : (
      <>
        <div className="cart-items-container">
          {cart.map((game, index) => (
            <div key={index} className="cart-item-card">
              <div className="cart-item-card-header">
               
                <img
                  src={game.img} 
                  alt={game.title}
                  className="cart-item-image"
                />
                <h5 className="cart-item-title">{game.title}</h5>
                <p className="cart-item-description">{game.description}</p>
              </div>
              <div className="cart-item-card-body">
                <p className="cart-item-total-price">
                  السعر الإجمالي: {game.price * game.quantity} ريال
                </p>
                <p className="cart-item-rating">التقييم: {game.rating}</p>

            
                <label className="cart-item-quantity-label">الكمية:</label>
                <input
                  type="number"
                  value={game.quantity}
                  min="1"
                  className="cart-item-quantity-input"
                  onChange={(e) =>
                    updateQuantity(game._id, parseInt(e.target.value) || 1)
                  }
                />
              </div>
              <div className="cart-item-card-footer">
                <button
                  className="cart-item-remove-btn"
                  onClick={() => removeFromCart(game._id)}
                >
                  حذف
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-total-price-container">
          <h4 className="cart-total-price">
            السعر الإجمالي لكل المنتجات: {totalPrice.toFixed(2)} ريال
          </h4>
        </div>
      </>
    )}

    <div className="back-to-game-list-container">
      <Link to="/gamelist" className="back-to-game-list-btn">
        العودة إلى قائمة الألعاب
      </Link>
    </div>
    <div className="checkout-container">
      <button className="checkout-btn" onClick={handleCheckout}>
        شراء الآن
      </button>
    </div>
  </div>
</MainLayout>

    </div>
  
  );
};

export default Cart;
