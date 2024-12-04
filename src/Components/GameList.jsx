import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useCart } from "../CartContext"; 

import MainLayout from "../Layout/MainLayout";

const GameList = () => {
  const [games, setGames] = useState([]);
  const [message, setMessage] = useState("");  // State to hold the success message
  const { addToCart } = useCart(); 

  useEffect(() => {
    axios
      .get("/gamesData.json")
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the games data:", error);
      });
  }, []);

  const handleAddToCart = (game) => {
    addToCart({ ...game, quantity: 1 });
    setMessage("تم إضافة المنتج إلى السلة بنجاح!"); // Set success message
    setTimeout(() => {
      setMessage(""); // Clear the message after 3 seconds
    }, 3000);
  };

  return (
    <div className="main-background2">
      <MainLayout>
        <div className="game-list-container">
          <div className="container mt-4 p-5">
            {message && (
              <div 
                className="alert alert-success d-flex justify-content-center align-items-center"
                role="alert"
                style={{
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '60%',
                  zIndex: 9999
                }}
              >
                <i className="fas fa-check-circle" style={{ marginRight: '10px', fontSize: '1.5rem' }}></i>
                {message}
              </div>
            )}
            {games.length > 0 ? (
              <Row>
                {games.map((game) => (
                  <Col key={game._id} sm={12} md={2} lg={4} xs={12} className="mb-4">
                    <Card className="game-card col-xl-12">
                      <Card.Img variant="top" src={game.img} alt={game.title} className="game-img" />
                      <Card.Body className="d-flex flex-column">
                        <Card.Title>{game.title}</Card.Title>
                        <Card.Text>{game.description}</Card.Text>
                        <Button
                          variant="primary"
                          onClick={() => handleAddToCart(game)} // Call the function to add to cart
                        >
                          إضافة إلى السلة
                        </Button>
                        <p>السعر: {game.price} ريال</p>
                        <p>التقييم: {game.rating}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            ) : (
              <p>No games available or loading...</p>
            )}
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default GameList;
