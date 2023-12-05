import React from "react";

const Card = ({ cardsData }) => {
  return (
    <div className="bg-black flex flex-wrap justify-around h-100">
      {cardsData.map((card, index) => (
        <div
          key={index}
        //   className={`bg-${card.backgroundColor || 'gray-400'} text-white p-20 w-full lg:w-1/4 w-200 h-100 rounded m-4`}
        className={`bg-yellow-100 text-dark p-20 w-full lg:w-1/4 w-200 h-100 rounded m-4`}
        >
          <h3 className="text-lg font-bold">{card.title}</h3>
          <p className="text-lg">{card.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
