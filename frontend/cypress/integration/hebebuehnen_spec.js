describe('Check Responsiveness', function () {
  beforeEach(function () {
      cy.visit('http://localhost/Laura/EPS/Fallbeispiel_2/frontend/')
  })

  it('should assert that <title> is correct', function () {
    cy.title().should('include', 'Hebebühnenverleih')
  })

  it('should show page "Standorte" when Standorte is clicked', function () {
    cy.get('#navLocations').click()
    cy.url().should('contain', '/locations')
  })

  it('should show 2 locations when searched for "Bruchkoebel', function () {
    cy.get('#navLocations').click()
    cy.get('#searchField').type('Bruchkoebel')
    cy.get('#searchButton').click()
    cy.get('#locations').find('.location').should('have.length', 2)
  })


  it('should display 3 locations when filtered by "small"', function() { 
    cy.get('#navLocations').click()
    cy.get('#small').click()
    cy.get('#locations').find('.location').should('have.length', 3)
  })  
})