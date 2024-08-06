const express = require('express');
const app = express();
const port = 3001;

app.get('/api/getMovies', (req, res) => {
  const data = [
    {
      id: 1,
      title: "Poor Things",
      director: "Yorgos Lanthimos",
      directorLink: "https://www.imdb.com/name/nm0487166",
      stars: 7,
      cover:
        "https://m.media-amazon.com/images/M/MV5BNzIyYjY2OTMtNjdjNC00ZjQwLTk1OTMtZDljMWNhODM2NzE2XkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_QL75_UY562_CR35,0,380,562_.jpg",
      imdbLink:
        "https://www.imdb.com/title/tt14230458/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_poor%2520things",
    },
    {
      id: 2,
      title: "Mulholland Drive",
      director: "David Lynch",
      directorLink: "https://www.imdb.com/name/nm0000186",
      stars: 9,
      cover:
        "https://m.media-amazon.com/images/M/MV5BYTRiMzg4NDItNTc3Zi00NjBjLTgwOWYtOGZjMTFmNGU4ODY4XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      imdbLink: "https://www.imdb.com/title/tt0166924/?ref_=hm_rvi_tt_i_4",
    },
    {
      id: 3,
      title: "Interestellar",
      director: "Christopher Nolan",
      directorLink: "https://www.imdb.com/name/nm0634240",
      stars: 8,
      cover:
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      imdbLink: "https://www.imdb.com/title/tt0816692/",
    },
    {
      id: 4,
      title: "The Lobster",
      director: "Yorgos Lanthimos",
      directorLink: "https://www.imdb.com/name/nm0487166",
      stars: 8.5,
      cover:
        "https://m.media-amazon.com/images/M/MV5BMWZhNzI4MjYtODBkYy00Yzg3LThiYjAtOGFkYWM1MGUzZGZjXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_QL75_UY562_CR9,0,380,562_.jpg",
      imdbLink: "https://www.imdb.com/title/tt3464902",
    },
    {
      id: 5,
      title: "Inception",
      director: "Christopher Nolan",
      directorLink: "https://www.imdb.com/name/nm0634240",
      stars: 8.8,
      cover:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpgg",
      imdbLink: "https://www.imdb.com/title/tt1375666/",
    },
    {
      id: 6,
      title: "Parasite",
      director: "Bong Joon Ho",
      directorLink: "https://www.imdb.com/name/nm0094435",
      stars: 8.6,
      cover:
        "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
      imdbLink: "https://www.imdb.com/title/tt6751668/",
    },
    {
      id: 7,
      title: "The Shape of Water",
      director: "Guillermo del Toro",
      directorLink: "https://www.imdb.com/name/nm0868219",
      stars: 7.3,
      cover:
        "https://m.media-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_FMjpg_UX1000_.jpg",
      imdbLink: "https://www.imdb.com/title/tt5580390/",
    },
    {
      id: 8,
      title: "Joker",
      director: "Todd Phillips",
      directorLink: "https://www.imdb.com/name/nm0680846",
      stars: 8.5,
      cover:
        "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
      imdbLink: "https://www.imdb.com/title/tt7286456/",
    },
    {
      id: 9,
      title: "Mad Max: Fury Road",
      director: "George Miller",
      directorLink: "https://www.imdb.com/name/nm0004306",
      stars: 8.1,
      cover:
        "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
      imdbLink: "https://www.imdb.com/title/tt1392190/",
    },
    {
      id: 10,
      title: "La La Land",
      director: "Damien Chazelle",
      directorLink: "https://www.imdb.com/name/nm3227090",
      stars: 8,
      cover:
        "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_FMjpg_UX1000_.jpg",
      imdbLink: "https://www.imdb.com/title/tt3783958/",
    },
    {
      id: 11,
      title: "The Revenant",
      director: "Alejandro G. Iñárritu",
      directorLink: "https://www.imdb.com/name/nm0327944",
      stars: 8,
      cover:
        "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
      imdbLink: "https://www.imdb.com/title/tt1663202/",
    },
    {
      id: 12,
      title: "Whiplash",
      director: "Damien Chazelle",
      directorLink: "https://www.imdb.com/name/nm3227090",
      stars: 8.5,
      cover:
        "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
      imdbLink: "https://www.imdb.com/title/tt2582802/",
    },
  ];

  res.json(data);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
