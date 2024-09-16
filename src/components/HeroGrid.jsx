// src/components/HeroGrid.jsx
import React, { useState } from 'react';
import HeroLogo from './HeroLogo';
import HeroInfo from './HeroInfo';
import FeedbackForm from './FeedbackForm';
import { heroImages } from './HeroImages';

const HeroGrid = () => {
  const [selectedHero, setSelectedHero] = useState(null);

  // Define hero data with external image URLs
  const tanksRow1 = [
    {
      src: heroImages['dva'],
      alt: 'D.Va',
      counters: [
        { src: heroImages.pharah, alt: 'Pharah' },
        { src: heroImages.hanzo, alt: 'Hanzo' },
        { src: heroImages.widowmaker, alt: 'Widowmaker' },
        { src: heroImages.winston, alt: 'Winston' },
      ],
      counteredBy: [{ src: heroImages.zarya, alt: 'Zarya' },
        { src: heroImages.symmetra, alt: 'Symmetra' }, 
        { src: heroImages.mei, alt: 'Mei' }
      ],
    },
    {
      src: heroImages.winston,
      alt: 'Winston',
      counters: [
        { src: heroImages.reaper, alt: 'Reaper' },
        { src: heroImages.dva, alt: 'D.Va' },
        { src: heroImages.bastion, alt: 'Bastion' },
      ],
      counteredBy: [],
    },
    {
      src: heroImages.doomfist,
      alt: 'Doomfist',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.junkerqueen,
      alt: 'Junker Queen',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.mauga,
      alt: 'Mauga',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.orisa,
      alt: 'Orisa',
      counters: [],
      counteredBy: [],
    },
  ];

  const tanksRow2 = [
    {
      src: heroImages.ramattra,
      alt: 'Ramattra',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.reinhardt,
      alt: 'Reinhardt',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.roadhog,
      alt: 'Roadhog',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.sigma,
      alt: 'Sigma',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.wreckingball,
      alt: 'Wrecking Ball',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.zarya,
      alt: 'Zarya',
      counters: [],
      counteredBy: [],
    },
  ];

  const damageRow1 = [
    {
      src: heroImages.ashe,
      alt: 'Ashe',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.bastion,
      alt: 'Bastion',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.cassidy,
      alt: 'Cassidy',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.echo,
      alt: 'Echo',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.genji,
      alt: 'Genji',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.hanzo,
      alt: 'Hanzo',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.junkrat,
      alt: 'Junkrat',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.mei,
      alt: 'Mei',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.pharah,
      alt: 'Pharah',
      counters: [
        { src: heroImages.mei, alt: 'Mei' },
        { src: heroImages.reaper, alt: 'Reaper' },
        { src: heroImages.symmetra, alt: 'Symmetra' },
      ],
      counteredBy: [
        { src: heroImages.dva, alt: 'D.Va' },
        { src: heroImages.ashe, alt: 'Ashe' },
        { src: heroImages.cassidy, alt: 'Cassidy' },
        { src: heroImages.bastion, alt: 'Bastion' },
        { src: heroImages.echo, alt: 'Echo' },
        { src: heroImages.soldier76, alt: 'Soldier: 76' },
        { src: heroImages.widowmaker, alt: 'Widowmaker' },
        { src: heroImages.baptiste, alt: 'Baptiste' },
        { src: heroImages.illari, alt: 'Illari' },
      ],
    },
  ];

  const damageRow2 = [
    {
      src: heroImages.reaper,
      alt: 'Reaper',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.sojourn,
      alt: 'Sojourn',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages['soldier76'],
      alt: 'Soldier: 76',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.tracer,
      alt: 'Tracer',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.sombra,
      alt: 'Sombra',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.symmetra,
      alt: 'Symmetra',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.torbjorn,
      alt: 'Torbjorn',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.venture,
      alt: 'Venture',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.widowmaker,
      alt: 'Widowmaker',
      counters: [],
      counteredBy: [],
    },
  ];

  const supportsRow1 = [
    {
      src: heroImages.ana,
      alt: 'Ana',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.baptiste,
      alt: 'Baptiste',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.brigitte,
      alt: 'Brigitte',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.kiriko,
      alt: 'Kiriko',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.lifeweaver,
      alt: 'Lifeweaver',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.lucio,
      alt: 'Lúcio',
      counters: [],
      counteredBy: [],
    },
  ];

  const supportsRow2 = [
    {
      src: heroImages.mercy,
      alt: 'Mercy',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.moira,
      alt: 'Moira',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.zenyatta,
      alt: 'Zenyatta',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.illari,
      alt: 'Illari',
      counters: [],
      counteredBy: [],
    },
    {
      src: heroImages.juno,
      alt: 'Juno',
      counters: [],
      counteredBy: [],
    },
  ];

  const allHeroes = [...tanksRow1, ...tanksRow2, ...damageRow1, ...damageRow2, ...supportsRow1, ...supportsRow2];

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
            selectedHero?.alt === hero.alt ? 'border-4 border-yellow-500' : 'border-2 border-transparent'
          }`}
        >
          <HeroLogo src={hero.src} alt={hero.alt} />
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <div className="absolute top-4 right-4">
            <FeedbackForm heroes={allHeroes} />
      </div>
      <div className="flex-grow"></div>

      <div className="p-4 bg-gray-100">
        <HeroInfo hero={selectedHero} onHeroClick={handleClick} />
      </div>

      <div className="p-4 bg-gray-800 mt-auto">
        <div className="grid grid-cols-3 gap-4">
          {/* Tanks Section */}
          <div className="text-center">
            <h2 className="text-white text-lg mb-2">Tanks</h2>
            {renderHeroRow(tanksRow1)}
            {renderHeroRow(tanksRow2)}
          </div>

          {/* Damage Section */}
          <div className="text-center">
            <h2 className="text-white text-lg mb-2">Damage</h2>
            {renderHeroRow(damageRow1)}
            {renderHeroRow(damageRow2)}
          </div>

          {/* Support Section */}
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
