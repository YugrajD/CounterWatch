import React from 'react';

const HeroInfo = ({ hero, onHeroClick }) => {
  if (!hero) {
    return <div className="text-white">Select a hero to see more information</div>;
  }

  const counters = hero.counters || [];
  const counteredBy = hero.counteredBy || [];

  return (
    <div className="p-4 bg-gray-700 text-white rounded-md">
      <h2 className="text-xl mb-4">{hero.alt}</h2>

      <div className="mb-2">
        <strong>Counters:</strong>
        <div className="flex space-x-2 mt-2">
          {counters.map((counterHero, index) => (
            <img
              key={index}
              src={counterHero.src}
              alt={counterHero.alt}
              className="h-12 w-12 rounded-md cursor-pointer"
              onClick={() => onHeroClick(counterHero)}
            />
          ))}
        </div>
      </div>

      <div className="mb-2">
        <strong>Countered by:</strong>
        <div className="flex space-x-2 mt-2">
          {counteredBy.map((counteredByHero, index) => (
            <img
              key={index}
              src={counteredByHero.src}
              alt={counteredByHero.alt}
              className="h-12 w-12 rounded-md cursor-pointer"
              onClick={() => onHeroClick(counteredByHero)}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default HeroInfo;