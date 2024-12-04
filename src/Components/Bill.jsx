import React from "react";
import MainLayout from "../Layout/MainLayout";
import { useLocation } from "react-router-dom";  

const Bill = () => {
    const location = useLocation();
    const { cart, totalPrice } = location.state || {};  
  
    const date = new Date().toLocaleDateString();

  return (
    <div className="bill-back">
    <MainLayout>
        
    <div className="bill-container ">
      <div className="bill-header">
        <h1 className="store-name">متجر GamerX</h1>
        <p className="store-details">العنوان: الرياض، السعودية</p>
        <p className="bill-date">تاريخ الفاتورة: {date}</p>
        <hr />
      </div>

      <div className="bill-body d-flex justify-content-center">
        <table className="bill-table">
          <thead>
            <tr>
              <th>المنتج</th>
              <th>الكمية</th>
              <th>السعر</th>
              <th>الإجمالي</th>
            </tr>
          </thead>
          <tbody>
            {cart && cart.length > 0 ? (
              cart.map((game, index) => (
                <tr key={index}>
                  <td>{game.title}</td>
                  <td>{game.quantity}</td>
                  <td>{game.price} ريال</td>
                  <td>{(game.price * game.quantity).toFixed(2)} ريال</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">لا توجد منتجات في الفاتورة.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="bill-footer">
        <hr />
        <div className="total-price">
          <h3>الإجمالي: {totalPrice.toFixed(2)} ريال</h3>
        </div>
        <div className="thank-you">
          <p>شكراً لزيارتكم!</p>
        </div>
      </div>
    </div>
   
    </MainLayout>
    </div>
  );
};

export default Bill;
