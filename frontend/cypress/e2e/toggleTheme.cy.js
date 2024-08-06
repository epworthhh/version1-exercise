/* global cy */

describe('App', () => {
  it('display movies by filter input', () => {
    cy.intercept('GET', '/api/getMovies', { fixture: 'movies.json' }
    ).as('getData') // assign an alias

    cy.visit('/');

    cy.wait('@getData').then(() => {

      cy.get('.wrapper').should('not.have.class', 'wrapper--dark');
      cy.get('.toggle-theme-button').should('not.have.class', 'toggle-theme-button--dark');

      cy.get('.toggle-theme-button').click();

      cy.get('.wrapper').should('have.class', 'wrapper--dark');
      cy.get('.toggle-theme-button').should('have.class', 'toggle-theme-button--dark');      
    });
  });
});
