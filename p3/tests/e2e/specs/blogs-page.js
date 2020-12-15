describe('Blogs Page', () => {

  // Define a blog we can use throughout our tests
  let blog = {
    title: "Rex's Blues by Townes Van Zandt",
    id: 1
  }

  it('shows all the blogs', () => {

    cy.visit('/blogs')

    // Confirm we see at least 5 blogs (that's how many blog seeds we have)
    cy.get('[data-test="blog-title"]').its('length').should('be.gte', 5)

    // Confirm we see a our test blog
    cy.contains('[data-test="blog-title"]', blog.title)

    // Confirm we can click on a blog and get to its individual page
    cy.get('[data-test="blog-title"]').contains(blog.title).click();

    // Confirm the test blog page loads
    cy.contains('[data-test="blog-title"]', blog.title)
    cy.url().should('include', blog.id)

  })

  it('filters the blogs to the search bar input', () => {

    cy.visit('/blogs')

    // Type in 'blues' into the search bar
    cy.get('[data-test="search-bar"]').type('blues')

    // There are 3 blues songs in the seed file
    cy.get('[data-test="blog-title"]').should('have.length', 3)
  })

})
