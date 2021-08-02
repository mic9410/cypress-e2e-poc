const links = require('../fixtures/links')


describe('S01 - Homepage displays correctly', () => {
  beforeEach(() => {
    cy.fixture('links.json').as('links')
    cy.visit(links.homepage)
  })


  it('displays boxes with advantages', () => {
    var advantages = cy.$$('#advantages .col-sm-4').text()
    cy.debug(advantages)
  })

  xit('displays boxes with hot this week items', () => {
  })

})
