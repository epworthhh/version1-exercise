const express = require('express');
const app = express();
const port = 3001;

app.get('/api/getMovies', (req, res) => {
  const data = [{
    id: 1,
    title: 'Poor Things',
    director: 'Yorgos Lanthimos',
    directorLink: 'https://www.imdb.com/name/nm0487166',
    stars: 7,
    cover: 'https://m.media-amazon.com/images/M/MV5BNzIyYjY2OTMtNjdjNC00ZjQwLTk1OTMtZDljMWNhODM2NzE2XkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_QL75_UY562_CR35,0,380,562_.jpg',
    imdbLink: 'https://www.imdb.com/title/tt0166924/?ref_=hm_rvi_tt_i_4',
  }, {
    id: 2,
    title: 'Mulholland Drive',
    director: 'David Lynch',
    directorLink: 'https://www.imdb.com/name/nm0000186',
    stars: 9,
    cover: 'https://m.media-amazon.com/images/M/MV5BYTRiMzg4NDItNTc3Zi00NjBjLTgwOWYtOGZjMTFmNGU4ODY4XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    imdbLink: 'https://www.imdb.com/title/tt0166924/?ref_=hm_rvi_tt_i_4',
  }, {
    id: 3,
    title: 'Interestellar',
    director: 'Christopher Nolan',
    directorLink: 'https://www.imdb.com/name/nm0634240',
    stars: 8,
    cover: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    imdbLink: 'https://www.imdb.com/title/tt0166924/?ref_=hm_rvi_tt_i_4',
  }, {
    id: 4,
    title: 'The Lobster',
    director: 'Yorgos Lanthimos',
    directorLink: 'https://www.imdb.com/name/nm0487166',
    stars: 8.5,
    cover: 'https://m.media-amazon.com/images/M/MV5BMWZhNzI4MjYtODBkYy00Yzg3LThiYjAtOGFkYWM1MGUzZGZjXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_QL75_UY562_CR9,0,380,562_.jpg',
    imdbLink: 'https://www.imdb.com/title/tt3464902',
  }];

  res.json(data);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
