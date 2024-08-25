import React, { useState } from 'react';
import HeroLogo from './HeroLogo';
import HeroInfo from './HeroInfo';
import ashe from '../assets/ashe.png';
import reaper from '../assets/reaper.png';
import tracer from '../assets/tracer.png';
import dva from '../assets/d.va.png';
import winston from '../assets/winston.png';
import doomfist from '../assets/doomfist.png';
import junkerqueen from '../assets/junkerqueen.png';
import mauga from '../assets/mauga.png';
import orisa from '../assets/orisa.png';
import ramattra from '../assets/ramattra.png';
import reinhardt from '../assets/reinhardt.png';
import roadhog from '../assets/roadhog.png';
import sigma from '../assets/sigma.png';
import wreckingball from '../assets/wreckingball.png';
import zarya from '../assets/zarya.png';
import bastion from '../assets/bastion.png';
import cassidy from '../assets/cassidy.png';
import echo from '../assets/echo.png';
import genji from '../assets/genji.png';
import hanzo from '../assets/hanzo.png';
import junkrat from '../assets/junkrat.png';
import mei from '../assets/mei.png';
import pharah from '../assets/pharah.png';
import sojourn from '../assets/sojourn.png';
import soldier76 from '../assets/soldier.png';
import sombra from '../assets/sombra.png';
import symmetra from '../assets/symmetra.png';
import torbjorn from '../assets/torbjorn.png';
import venture from '../assets/venture.png';
import widowmaker from '../assets/widowmaker.png';
import ana from '../assets/ana.png';
import baptiste from '../assets/baptiste.png';
import brigitte from '../assets/brigitte.png';
import kiriko from '../assets/kiriko.png';
import lifeweaver from '../assets/lifeweaver.png';
import lucio from '../assets/lucio.png';
import mercy from '../assets/mercy.png';
import moira from '../assets/moira.png';
import zenyatta from '../assets/zenyatta.png';
import illari from '../assets/illari.png';
import juno from '../assets/juno.png';

const HeroGrid = () => {
  const [selectedHero, setSelectedHero] = useState(null);


  const tanksRow1 = [
    { src: dva, alt: 'D.Va' },
    { src: winston, alt: 'Winston' },
    { src: doomfist, alt: 'Doomfist' },
    { src: junkerqueen, alt: 'Junker Queen' },
    { src: mauga, alt: 'Mauga' },
    { src: orisa, alt: 'Orisa' },
  ];
  
  const tanksRow2 = [
    { src: ramattra, alt: 'Ramattra' },
    { src: reinhardt, alt: 'Reinhardt' },
    { src: roadhog, alt: 'Roadhog' },
    { src: sigma, alt: 'Sigma' },
    { src: wreckingball, alt: 'Wrecking Ball' },
    { src: zarya, alt: 'Zarya' },
  ];
  
  // Define two rows of damage heroes
  const damageRow1 = [
    { src: ashe, alt: 'Ashe'  },
    { src: bastion, alt: 'Bastion' },
    { src: cassidy, alt: 'Cassidy' },
    { src: echo, alt: 'Echo' },
    { src: genji, alt: 'Genji' },
    { src: hanzo, alt: 'Hanzo' },
    { src: junkrat, alt: 'Junkrat' },
    { src: mei, alt: 'Mei' },
    {
      src: pharah,
      alt: 'Pharah',
      counters: [
        { src: mei, alt: 'Mei' },
        { src: reaper, alt: 'Reaper' },
        { src: symmetra, alt: 'Symmetra' }
      ],
      counteredBy: [
        { src: dva, alt: 'D.Va' },
        { src: ashe, alt: 'Ashe' },
        { src: cassidy, alt: 'Cassidy' },
        { src: bastion, alt: 'Bastion' },
        { src: echo, alt: 'Echo' },
        { src: soldier76, alt: 'Soldier: 76' },
        { src: widowmaker, alt: 'Widowmaker' },
        { src: baptiste, alt: 'Baptiste' },
        { src: illari, alt: 'Illari' }
      ],
    },
  ];
  
  const damageRow2 = [
    { src: reaper, alt: 'Reaper' },
    { src: sojourn, alt: 'Sojourn' },
    { src: soldier76, alt: 'Soldier: 76' },
    { src: tracer, alt: 'Tracer'},
    { src: sombra, alt: 'Sombra'},
    { src: symmetra, alt: 'Symmetra'},
    { src: torbjorn, alt: 'Torbjorn'},
    { src: venture, alt: 'Venture' },
    { src: widowmaker, alt: 'Widowmaker' },
  ];
  
  // Define two rows of support heroes
  const supportsRow1 = [
    { src: ana, alt: 'Ana' },
    { src: baptiste, alt: 'Baptiste' },
    { src: brigitte, alt: 'Brigitte' },
    { src: kiriko, alt: 'Kiriko' },
    { src: lifeweaver, alt: 'Lifeweaver' },
    { src: lucio, alt: 'Lúcio' },
  ];
  
  const supportsRow2 = [
    { src: mercy, alt: 'Mercy' },
    { src: moira, alt: 'Moira' },
    { src: zenyatta, alt: 'Zenyatta' },
    { src: illari, alt: 'Illari' },
    { src: juno, alt: 'Juno' },
    // Add any additional support heroes here
  ];

  
  const handleClick = (hero) => {
    setSelectedHero(hero);
  };

  const renderHeroRow = (heroes) => (
    <div className="flex justify-center space-x-2 mb-2">
      {heroes.map((hero, index) => (
        <div
          key={index}
          onClick={() => handleClick(hero)}
          className={`p-1 rounded-lg cursor-pointer ${
            selectedHero === hero.alt ? 'border-4 border-yellow-500' : 'border-2 border-transparent'
          }`}
        >
          <HeroLogo src={hero.src} alt={hero.alt} />
        </div>
      ))}
    </div>
  );
  
  return (

        <div className="flex flex-col min-h-screen">
      {/* Other content at the top of the page */}
      <div className="flex-grow">
        {/* Content that should take up most of the page can go here */}
      </div>

      <div className="p-4 bg-gray-100">
        <HeroInfo hero={selectedHero} onHeroClick={handleClick} />
      </div>

      <div className="p-4 bg-gray-800 mt-auto">
        <div className="grid grid-cols-3 gap-4">
        <div className="text-center ">
          <h2 className="text-white text-lg mb-2">Tanks</h2>
          {renderHeroRow(tanksRow1)}
          {renderHeroRow(tanksRow2)}
        </div>
        <div className="text-center">
          <h2 className="text-white text-lg mb-2">Damage</h2>
          {renderHeroRow(damageRow1)}
          {renderHeroRow(damageRow2)}
        </div>
        <div className="text-center">
          <h2 className="text-white text-lg mb-2">Support</h2>
          {renderHeroRow(supportsRow1)}
          {renderHeroRow(supportsRow2)}
        </div>
      </div>
    </div>
  </div>
  );
};



export default HeroGrid;
