/* global cy */

describe('App', () => {
  it('fetches movie data and displays it correctly', () => {
    cy.intercept(
      {
        method: 'GET',
        url: '/api/getMovies',
      },
      [{
          id: 1,
          title: 'Movie 1',
          cover: 'https://example.com/movie1.jpg',
          director: 'Director 1',
          directorLink: 'https://example.com/director1',
          stars: 6,
          imdbLink: 'https://example.com/imdb1',
        }, {
          id: 2,
          title: 'Movie 2',
          cover: 'https://example.com/movie2.jpg',
          director: 'Director 2',
          directorLink: 'https://example.com/director2',
          stars: 5.8,
          imdbLink: 'https://example.com/imdb2',
        }, {
          id: 1,
          title: 'Movie 3',
          cover: 'https://example.com/movie3.jpg',
          director: 'Director 1',
          directorLink: 'https://example.com/director1',
          stars: 8.6,
          imdbLink: 'https://example.com/imdb3',
        }]
    ).as('getData') // assign an alias
    
    cy.visit('/');

    cy.wait('@getData').then(() => {

      cy.get('.movies__item').should('have.length', 3);

      cy.get('.movies__item:nth-child(1) .movies__content h3').should('contain', 'Movie 1');
      cy.get('.movies__item:nth-child(1) .movies__content .movies__link').contains('Director 1').should('have.attr', 'href', 'https://example.com/director1');
      cy.get('.movies__item:nth-child(1) .movies__content .movies__stars').should('contain', '⭐ 6');
      cy.get('.movies__item:nth-child(1) .movies__content .movies__link').contains('+ info').should('have.attr', 'href', 'https://example.com/imdb1');

      cy.get('.movies__item:nth-child(2) .movies__content h3').should('contain', 'Movie 2');
      cy.get('.movies__item:nth-child(2) .movies__content .movies__link').contains('Director 2').should('have.attr', 'href', 'https://example.com/director2');
      cy.get('.movies__item:nth-child(2) .movies__content .movies__stars').should('contain', '⭐ 5.8');
      cy.get('.movies__item:nth-child(2) .movies__content .movies__link').contains('+ info').should('have.attr', 'href', 'https://example.com/imdb2');

      cy.get('.movies__item:nth-child(3) .movies__content h3').should('contain', 'Movie 3');
      cy.get('.movies__item:nth-child(3) .movies__content .movies__link').contains('Director 1').should('have.attr', 'href', 'https://example.com/director1');
      cy.get('.movies__item:nth-child(3) .movies__content .movies__stars').should('contain', '⭐ 8.6');
      cy.get('.movies__item:nth-child(3) .movies__content .movies__link').contains('+ info').should('have.attr', 'href', 'https://example.com/imdb3');
    });
  });
});