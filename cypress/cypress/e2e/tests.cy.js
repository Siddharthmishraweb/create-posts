describe('Blogify App', () => {
    beforeEach(() => {
      cy.visit('/dashboard');
    });
  
    it('should display the login button when not logged in', () => {
      cy.get('.login-btn').should('be.visible').and('contain', 'Login with Facebook');
    });
  
    it('should open create post modal when clicking on "Create Post" button', () => {
      // Assuming user is already logged in
      cy.login(); // Custom command to login the user
  
      cy.get('.create-post-btn').click();
      cy.get('.modal').should('be.visible');
    });
  
    it('should create a new post', () => {
      cy.login();
  
      cy.get('.create-post-btn').click();
      cy.get('#postContent').type('This is a test post');
      cy.get('#postImages').type('https://via.placeholder.com/150');
      cy.get('.modal form').submit();
  
      cy.get('.card-container .card').first().should('contain', 'This is a test post');
    });
  
    it('should like a post', () => {
      cy.login();
  
      cy.get('.card-container .card').first().find('.likes').click();
      cy.get('.card-container .card').first().find('.likes span').should('contain', '1'); // Assuming initial likes count is 0
    });
  
    it('should toggle comments visibility', () => {
      cy.login();
  
      cy.get('.card-container .card').first().find('.comments span').click();
      cy.get('.card-container .card').first().find('.comments-section').should('be.visible');
  
      cy.get('.card-container .card').first().find('.comments span').click();
      cy.get('.card-container .card').first().find('.comments-section').should('not.be.visible');
    });
  
    it('should add a new comment', () => {
      cy.login();
  
      cy.get('.card-container .card').first().find('.comments span').click();
      cy.get('.card-container .card').first().find('.comment-form input').type('This is a test comment');
      cy.get('.card-container .card').first().find('.comment-form').submit();
  
      cy.get('.card-container .card').first().find('.comments-list .comment').last().should('contain', 'This is a test comment');
    });
  
    it('should navigate to post details page on click', () => {
      cy.login();
  
      cy.get('.card-container .card').first().find('.content').click();
      cy.url().should('include', '/post/');
    });
  
    it('should display user information in the header when logged in', () => {
      cy.login();
  
      cy.get('.user-info .user-name').should('contain', 'Test User'); // Replace 'Test User' with the expected logged-in user name
    });
  });
  
  // Custom command to simulate user login
  Cypress.Commands.add('login', () => {
    // Replace with actual login logic
    cy.visit('/');
    cy.get('.login-btn').click();
    // Mock successful login
    cy.window().then((win) => {
      win.localStorage.setItem('authToken', 'test-token'); // Example token
    });
    cy.reload();
  });
  