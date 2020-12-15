describe('Blog Page', () => {

  // Test blog
  let blog = {
      title: "Rex's Blues by Townes Van Zandt",
      video_url: "https://www.youtube.com/embed/OtmddbOydm4",
      id: 1
  }

  it('shows a blog', () => {
    cy.visit('/blogs/' + blog.id);
    cy.contains('[data-test="blog-title"]', blog.title)
  })

  it('shows the correct video', () => {
    cy.get('iframe').should('have.attr', 'src').should('equal', blog.video_url);
  })

  it('shows comments', () => {
    cy.get('[data-test="comments-link"]').click();
    cy.get('[data-test="comment"]').its('length').should('be.gte', 2)
  })

  it('does not allow non-logged-in users to comment', () => {
    cy.get('[data-test="new-comment-form"]').should('not.exist')
    cy.contains('Login to comment')
  })

  it('does not allow non-logged-in user to delete a blog', () => {
    cy.get('Delete this blog').should('not.exist');
  })

  it('allows a logged in user to comment', () => {
    const newComment = 'Hello world' + Date.now();
    cy.nonAdminLogin();
    cy.visit('/blogs/' + blog.id);
    cy.get('[data-test="comments-link"]').click();
    cy.get('[data-test="comment-text-area"]').type(newComment);
    cy.get('[data-test="submit-comment"]').click();
    cy.contains('[data-test="comment"]', newComment)
    cy.contains('.success', 'Your comment has been added')
  })

  it('does not allow comments fewer than 2 characters', () => {
    cy.get('[data-test="comment-text-area"]').clear().type("o");
    cy.get('[data-test="submit-comment"]').click();
    cy.contains('The content field must be between 2 and 255 characters.')
  })

  it('does not allow non-logged in user to delete a blog', () => {
    cy.get('Delete this blog').should('not.exist');
  })

  it('allows admin user to delete a blog', () => {
    cy.adminLogin();
    cy.visit('/blogs/' + blog.id);
    cy.contains('Delete this blog');
  })
})
