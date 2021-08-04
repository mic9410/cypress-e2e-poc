export class Navbar {
    static totalNumberItemsInCart = '#numItemsInCart'

    static isCorrectNumberOfItemsInCart(number) {
        let cardText = (number === 0 ? '0 items in cart' : `${number} item(s) in cart`)
        cy.get(Navbar.totalNumberItemsInCart).should('have.text', cardText)
    }
}