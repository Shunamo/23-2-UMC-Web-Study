import React from 'react';
import Movie from "./components/Movie/Movie";
import { dummy } from "./movieDummy";

function App() {
  return (
    <div>
      <div className="app-container">
        {dummy.results.map((item, index) => {
          return (
            <Movie
              key={index}
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;