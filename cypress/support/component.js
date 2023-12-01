// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from 'cypress/react'
import { Router } from 'react-router-dom'

Cypress.Commands.add('mount', mount)
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
// Cypress.Commands.add('mount', (component, options = {}) => {
//     const { routerProps = { initialEntries: ['/'] }, ...mountOptions } = options
  
//     const wrapped = <Router {...routerProps}>{component}</Router>
  
//     return mount(wrapped, mountOptions)
//   })
// Example use:
// cy.mount(<MyComponent />)