export class ItemDetails {
    static mainImage = '#mainImage'
    static price = '#price'
    static addToCartBtn = '#buttonCart'
    static addToWishlistBtn = '.fa-heart'
    static productDetails = '#productDetails'
    static socialMedia = '.social'

    static verifyAllElementsDisplayed() {
        cy.get(ItemDetails.addToWishlistBtn).should('be.visible')
        cy.get(ItemDetails.addToCartBtn).should('be.visible')
        cy.get(ItemDetails.productDetails).should('be.visible')
        cy.get(ItemDetails.price).should('be.visible')
        cy.get(ItemDetails.mainImage).should('be.visible')
        cy.get(ItemDetails.socialMedia).should('be.visible')
    }

    static addItemsToCard(quantity) {

        cy.get()
    }
}