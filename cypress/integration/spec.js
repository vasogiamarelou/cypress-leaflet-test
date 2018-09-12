describe('cypress leaflet test', () => {
  it('pin moveing test', () => {

    cy.visit('http://127.0.0.1:8081/')

    // move pin
    cy.get('.leaflet-marker-draggable')
      .trigger('mousedown')
      .trigger('mousemove', {x: 100, y: 100, force: true})
      .trigger('mousup', {x: 100, y: 100, force: true})
  })
})
