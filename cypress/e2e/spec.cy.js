describe('Main Page', () => {
  
  it('Writes a post and checks if it has been posted', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="write-post"]').type('Dit is een test bericht met tekst');
    cy.wait(1000);
    cy.get('[data-cy="submit-post"]').click();
    cy.get('[data-cy="post-card"]').contains('Dit is een test bericht met tekst').should('exist');
    cy.wait(5000);
  })

  it('Attaches an image to a post and checks if it has been posted', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="write-post"]').type('Dit is een test bericht met foto');
    cy.wait(1000);
    cy.get('[data-cy="attach-image"]').selectFile('src/assets/Images/controllericon.png');
    cy.wait(1000);
    cy.get('[data-cy="upload-image"]').click();
    cy.wait(5000);
    cy.get('[data-cy="submit-post"]').click();
    cy.get('[data-cy="post-card"]').contains('Dit is een test bericht met foto').should('exist');
    // Check if the post contains the image
    cy.get('[data-cy="post-card"]')
    .contains('Dit is een test bericht met foto')
    .closest('[data-cy="post-card"]') // Adjust the selector if necessary to get the parent post-card
    .find('[data-cy="post-image"]')
    .should('exist');
  });

   it('Finds a post and likes it', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('[data-cy="post-card"]', 'Dit is een test bericht met tekst')
    .should('exist')
    .within(() => {
      cy.get('[data-cy="like-button"]').click();
      cy.wait(1000);
      cy.get('[data-cy="likes-amount"]').should('have.text', '1');
    });
    
  })
})

