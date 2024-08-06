/* global cy */

describe('App', () => {
  it('display movies by filter input', () => {
    cy.intercept('GET', '/api/getMovies', { fixture: 'movies.json' }
    ).as('getData') // assign an alias

    cy.visit('/');

    cy.wait('@getData').then(() => {

      cy.get('input').type('Director 1');
      cy.get('.movies__item').should('have.length', 2);

      cy.get('input').clear();
      cy.get('.movies__item').should('have.length', 3);
      
      cy.get('input').type('Director233');
      cy.get('.movies__item').should('have.length', 0);
      cy.get('p').contains('No movies found.');
    });
  });
});
