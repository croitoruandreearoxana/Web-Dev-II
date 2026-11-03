import React from 'react';
import './App.css';

import rogerPoster from './assets/who-framed-roger-rabbit.jpg';
import hookPoster from './assets/hook.jpg';
import lalaPoster from './assets/la-la-land.jpg';
import hiddenFiguresPoster from './assets/hidden-figures.jpg';
import palmSpringsPoster from './assets/palm-springs.jpg';
import barbiePoster from './assets/barbie.jpg';

const movies = [
  {
    id: 1,
    title: 'Who Framed Roger Rabbit (1988)',
    desc: 'In a world where cartoons and humans coexist, a detective must solve a zany, high-stakes mystery. Packed with wild humor, groundbreaking animation, and noir twists, this unique film will pull you into a world where anything is possible!',
    poster: rogerPoster,
    layoutClass: 'card-featured',
  },
  {
    id: 2,
    title: 'Hook (1991)',
    desc: 'Rediscover Neverland in this thrilling twist on Peter Pan! Robin Williams stars as a grown-up Peter, who must rediscover his inner child to rescue his kids from the clutches of Captain Hook. Adventure, magic, and nostalgia blend in this timeless family classic.',
    poster: hookPoster,
    layoutClass: 'card-standard',
  },
  {
    id: 3,
    title: 'La La Land (2016)',
    desc: 'Love, dreams, and the magic of LA take center stage in this musical masterpiece. Watch as two starry-eyed artists navigate passion and ambition in a world where every moment feels like a cinematic spectacle!',
    poster: lalaPoster,
    layoutClass: 'card-standard',
  },
  {
    id: 4,
    title: 'Hidden Figures (2016)',
    desc: 'Three unsung heroes of NASA\'s space race take the spotlight in this inspiring true story. Battling discrimination and defying the odds, these brilliant African-American women prove that intelligence, perseverance, and unity can change history and break barriers.',
    poster: hiddenFiguresPoster,
    layoutClass: 'card-horizontal',
  },
  {
    id: 5,
    title: 'Palm Springs (2020)',
    desc: 'A never-ending wedding day turns into an unforgettable time-loop romance! Stuck in the same day, two strangers find love, chaos, and meaning in the most unexpected ways.',
    poster: palmSpringsPoster,
    layoutClass: 'card-horizontal',
  },
  {
    id: 6,
    title: 'Barbie (2023)',
    desc: 'Step into the dazzling world of Barbie as she embarks on an unexpected journey from her perfect doll life to the real world. Filled with humor, heart, and empowering messages, this vibrant adventure redefines what it means to dream big!',
    poster: barbiePoster,
    layoutClass: 'card-horizontal',
  },
];

function App() {
  return (
    <div className="app-container">
      <header className="site-header">
        <div className="header-container">
          <h1 className="brand-title">watch.it</h1>
          <nav className="nav-links">
            <a href="#action" className="nav-link">Action</a>
            <a href="#comedy" className="nav-link">Comedy</a>
            <a href="#romance" className="nav-link">Romance</a>
            <a href="#drama" className="nav-link">Drama</a>
          </nav>
          <button className="search-btn" type="button">SEARCH</button>
        </div>
      </header>

      <main className="main-content">
        {movies.map((movie) => (
          <article key={movie.id} className={`movie-card ${movie.layoutClass}`}>
            <div className="poster-wrapper">
              <img src={movie.poster} alt={movie.title} />
            </div>
            <div className="card-details">
              <div className="card-text-group">
                <h2 className="movie-title">{movie.title}</h2>
                <p className="movie-desc">{movie.desc}</p>
              </div>
              <button className="watch-btn" type="button">WATCH NOW</button>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}

export default App;