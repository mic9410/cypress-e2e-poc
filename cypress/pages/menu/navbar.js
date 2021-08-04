export class Navbar {
    static totalNumberItemsInCart = '#numItemsInCart'
    static homeButton = '#tabIndex'
    static catalogueDropdown = '#tabCatalogue'

    static verifyCorrectNumberOfItemsInCart(number) {
        let cardText = (number === 0 ? '0 items in cart' : `${number} item(s) in cart`)
        cy.get(this.totalNumberItemsInCart).should('have.text', cardText)
    }

}