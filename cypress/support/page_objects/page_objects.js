const url = Cypress.config("baseUrl")

exports.web = {
    accessSite() {
        cy.visit(url)
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
          });
    },
    ignoreError(){
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
          });
    },
    seeContent() {
        cy.contains('Bhinneka would like to send you notifications about the latest update.')
    },
    datapencarian() {
        cy.wait(500)
        cy.visit(url).wait(2000)
        
        cy.get('#onesignal-slidedown-allow-button').click().wait(1000)
        cy.get('[data-testid="input"]').wait(1000)
        .should('be.visible')
        .type('baju{enter}').wait(500)
        cy.get('[data-testid="product-click"]').click({ multiple: true, force: true }).should('have.attr', 'href')
        for (let i = 0; i < 5; i++) {
        cy.get('[data-testid="input-text-plus"]').click({force: true })
        }
        cy.get('button').contains('Tambah ke').click().wait(1000)
     
    },

    daftarpencarian() {
        cy.wait(500)
        cy.visit(url).wait(2000)
        cy.get('#onesignal-slidedown-allow-button').click().wait(1000)
        cy.get('#menu').click({force: true})
        cy.get('#bt-menu-tree').contains('Kenormalan Baru').click()
        cy.get('[data-testid="product-click"]').click({ multiple: true, force: true }).should('have.attr', 'href')
        for (let i = 0; i < 5; i++) {
        cy.get('[data-testid="input-text-plus"]').click({force: true })
        }
        cy.get('button').contains('Tambah ke').click().wait(1000)
        


    }



    
}