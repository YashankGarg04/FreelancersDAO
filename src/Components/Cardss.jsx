import React, { useState } from "react";
import carData from '../Data/CarData.json';

const CardComponent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedCard(carData[index]);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedCard(null);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {carData.map((card, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                borderBottomWidth: "4px", // Adjust the bottom border width here
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ padding: "10px" }}>
                <img
                  src={card.image}
                  alt="Profile"
                  style={{ width: "100px", height: "auto" }}
                />
              </div>
              <div style={{ flex: 1, padding: "10px" }}>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: "5px" }}
                >
                  <h2 style={{ marginTop: 0, marginBottom: "5px" }}>{card.name}</h2>
                  <p style={{ marginBottom: "10px" }}>{card.description}</p>
                  <button
                    style={{
                      padding: "8px 19px",
                      backgroundColor: "#007bff",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                    }}
                    onClick={() => handleButtonClick(index)}
                  >
                    Click Here
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showPopup && selectedCard && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h2>{selectedCard.name}</h2>
          <p>{selectedCard.description}</p>
          <button
            style={{
              padding: "8px 19px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
            }}
            onClick={handleClosePopup}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default CardComponent;
