describe('Blog Create Page', () => {
  it('shows the access denied page to non-logged-in users', () => {
    cy.visit('/blogs/new');
    cy.contains('Access Denied');
    cy.contains('Only logged-in users can access this feature.');
  })

  it('performs form validation and shows errors', () => {
    cy.login();
    cy.visit('/blogs/new');
    cy.get('[data-test="blog-title-input"]').clear().type("Yo");
    cy.get('[data-test="blog-content-area"]').clear().type("Yea");
    cy.get('[data-test="video-url-input"]').clear().type("ytub");

    cy.get('[data-test="submit-button"]').click();

    cy.contains('The title field must be between 3 and 255 characters.');
    cy.contains('The content field must be between 7 and 10000 characters.');
    cy.contains('The video url field must be between 5 and 1000 characters.');
  })

  it('creates a new blog with valid inputs', () => {
    const title = 'New blog at ' + Date.now();
    const videoUrl = 'https://www.youtube.com/embed/_OO2PuGz-H8';
    cy.get('[data-test="blog-title-input"]').clear().type(title);
    cy.get('[data-test="blog-content-area"]').clear().type("Lorem Ipsum something...");
    cy.get('[data-test="video-url-input"]').clear().type(videoUrl);

    cy.get('[data-test="submit-button"]').click();

    // It brings you to the newly create blog page
    cy.get('iframe').should('have.attr', 'src').should('equal', videoUrl);
    cy.contains('[data-test="blog-title"]', title);
  })
})
