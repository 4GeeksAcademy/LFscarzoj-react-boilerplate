import { useState } from "react";
import { Questions } from "./Cartas";
import { Countries } from "./Cartas";
import { ANSWERS } from "./Cartas";
import { NavLink } from "react-router-dom";

import image126 from "../Media/Paises/126.png";
import tablero from "../Media/Paises/Europa Original Definitivo w Rusia & Kosovo.png";
import "./Game.css";

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Game = () => {
  const [selectedCard, setSelectedCard] = useState(); // Índice de la carta seleccionada
  const [selectedCountry] = useState(
    () => Countries[Math.floor(Math.random() * Countries.length)],
  ); // País aleatorio
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const handleFlipCard = () => {
    setIsCardFlipped(!isCardFlipped);
  };

  // Randomizar 14 preguntas
  const randomQuestions = shuffleArray(Questions).slice(0, 14);

  // Dividir las preguntas en 7 cartas (2 preguntas por carta)
  const cards = Array.from({ length: 7 }, (_, i) => ({
    topQuestion: randomQuestions[i * 2],
    bottomQuestion: randomQuestions[i * 2 + 1],
  }));

  // Función para verificar la respuesta
  const checkQuestion = (questionId) => {
    const answer = ANSWERS[selectedCountry.id][questionId];
    alert(`Respuesta: ${answer ? "Sí" : "No"}`);
  };

  return (
    <div className="game-container">
      <div className="top-corner-image">
        <NavLink to="/tablero">
          <img src={tablero} alt="Top Corner" />
        </NavLink>
      </div>
      <h1>País: {selectedCountry.name}</h1>
      <div
        className={`cartapais ${isCardFlipped ? "flip" : "animate"}`}
        onClick={handleFlipCard}
      >
        {!isCardFlipped ? (
          <img src={image126} alt="Hidden Country" />
        ) : (
          <img src={selectedCountry.img} alt={selectedCountry.name} />
        )}
      </div>

      <div className="cards-carousel d-flex">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`carta ${index === selectedCard ? "selected" : ""}`}
            onClick={() => setSelectedCard(index)}
          >
            <div
              className="question"
              onClick={() => checkQuestion(card.topQuestion.id)}
            >
              {card.topQuestion.text}
            </div>
            <div
              className="question"
              onClick={() => checkQuestion(card.bottomQuestion.id)}
            >
              {card.bottomQuestion.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;