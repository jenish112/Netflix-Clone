import React from 'react';
import './App.css';
import ROW from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <ROW title="NETFLIX ORIGINSLS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <ROW title="Trending Now" fetchUrl={requests.fetchTrending} />
      <ROW title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <ROW title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <ROW title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <ROW title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <ROW title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <ROW title="Documentaries" fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;
