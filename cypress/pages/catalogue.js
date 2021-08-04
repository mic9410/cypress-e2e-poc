export class Catalogue {
    static panel = '.panel'
    static productsPerPage = '#products-number'
    static sortByDropDown = '.products-sort-by'
    static product = ".product"

    static verifyNumberOfItemsPerPage(number) {
        cy.get(Catalogue.productsPerPage).contains(number).click()
        cy.get(Catalogue.product).its('length').should('eq', number)
    }

}