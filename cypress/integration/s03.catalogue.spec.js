const links = require('../fixtures/links');
const {Navbar} = require("../pages/menu/navbar");
const {Catalogue} = require("../pages/catalogue");

describe('S03 - Catalogue displays correctly', () => {
  beforeEach(() => {
    cy.fixture('links.json').as('links')
    cy.visit(links.homepage)
  })

  it('user selects catalogue from the navbar, all fields are displayed', () => {
    cy.get(Navbar.catalogueDropdown).click()
    cy.get(Catalogue.panel).should('be.visible')
    cy.get(Catalogue.productsPerPage).should('be.visible')
    cy.get(Catalogue.sortByDropDown).should('be.visible')
    cy.get(Catalogue.product).should('be.visible')
  })


  it('user can see correct number of selected items', () => {
    cy.get(Navbar.catalogueDropdown).click()
    Catalogue.verifyNumberOfItemsPerPage(3)
    Catalogue.verifyNumberOfItemsPerPage(6)
    Catalogue.verifyNumberOfItemsPerPage(9)
  })







})
