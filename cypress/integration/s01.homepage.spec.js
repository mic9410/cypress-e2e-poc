const links = require('../fixtures/links')
const homepage = require('../fixtures/homepage')
const {Homepage} = require("../pages/homepage");
const {Navbar} = require("../pages/menu/navbar");

describe('S01 - Homepage displays correctly', () => {
  beforeEach(() => {
    cy.fixture('links.json').as('links')
    cy.visit(links.homepage)
  })

  it('displays boxes with advantages', () => {
    for(let advantageText of homepage.advantages){
      cy.contains(Homepage.advantage, advantageText)
    }
  })

  it('displays boxes with hot this week items', () => {
    cy.get(Homepage.hotItems).should('be.visible').and('have.length', 5)
  })

  it('All buttons in the navbar are displayed', () => {
    cy.get(Navbar.homeButton).should('be.visible')
    cy.get(Navbar.totalNumberItemsInCart).should('be.visible')
    cy.get(Navbar.catalogueDropdown).should('be.visible')
  })

})
