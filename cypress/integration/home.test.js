


describe('Home Page', () => {

    beforeEach(() => {

        cy.fixture('courses.json').as("coursesJSON");

        cy.server();

        cy.route('/api/courses', "@coursesJSON").as("courses");

        cy.visit('/');

    });

    it('should display a list of course', () => {

        cy.contains("All Courses");

        cy.wait('@courses');

        cy.get("mat-card").should("have.length", 9);

    });

    it('should display the advanced courses', () => {

        cy.get('.mdc-tab').should("have.length", 2);

        cy.get('.mdc-tab').last().click();

        cy.get('.mat-mdc-tab-body-active .mat-mdc-card-title').its('length').should('be.gt', 1);

        cy.get('.mat-mdc-tab-body-active .mat-mdc-card-title').first()
            .should('contain', "Angular Security Course");

    });

});























