describe('Pagina de Inicio', () => {
beforeEach(() =>
    cy.visit('http://localhost:4200/inicio')
)
    it('successfully loads', () => {
      cy.contains('Iniciar Sesion')
    })

    it('inicio de sesion', () => {
        cy.contains('Iniciar Sesion').click()
        cy.get('[formControlName="usuario"]').type('Diego')
        cy.get('[formControlName="clave"]').type('Asdf123456')
        cy.contains('Iniciar').click()
      })
  })

  describe('Registar Usuario', () => {
    beforeEach(() =>
        cy.visit('http://localhost:4200/inicio')
    )
        it('successfully loads', () => {
          cy.contains('Registrarse').click()
          cy.get('[formControlName="nombre"]').type('Car')
          cy.get('[formControlName="apellido"]').type('Valencia')
          cy.get('[formControlName="cargo"]').type('Operario')
          cy.get('[formControlName="contrasena"]').type('Asdf123456')
          cy.contains('Registrarse').click()
        })
      })


  