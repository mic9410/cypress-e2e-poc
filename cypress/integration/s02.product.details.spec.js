const links = require('../fixtures/links')
const {Homepage} = require("../pages/homepage");
const {ItemDetails} = require("../pages/item_details");
const {Navbar} = require("../pages/menu/navbar");

describe('S02 - Product details page works correctly', () => {
    beforeEach(() => {
        cy.fixture('links.json').as('links')
        cy.visit(links.homepage)
    })

    it('after clicking into the hot item, user is redirected to the details page', () => {
        cy.get(Homepage.hotItems).should('be.visible').and('have.length', 5)
        cy.get(Homepage.hotItems).first().click()
        ItemDetails.verifyAllElementsDisplayed()
    })

    it('User can add item to card', () => {
        cy.get(Homepage.hotItems).should('be.visible').and('have.length', 5)
        cy.get(Homepage.hotItems).first().click()
        ItemDetails.verifyAllElementsDisplayed()
        Navbar.verifyCorrectNumberOfItemsInCart(0)
        for(let i=1; i<5; i++) {
            cy.get(ItemDetails.addToCartBtn).should('be.visible').click()
            Navbar.verifyCorrectNumberOfItemsInCart(i)
        }
    })



})
