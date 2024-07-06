import React from 'react';
import { mount } from 'cypress/react18';
import Register from '../Components/Pages/Register'; // Adjust the import path based on your directory structure
import { AuthContext } from '../Components/AppContext/AppContext'; // Adjust the import path based on your directory structure
import { MemoryRouter } from 'react-router-dom';

describe('<Register />', () => {
  it('renders Register component correctly', () => {
    const authContextValue = { registerWithEmailAndPassword: cy.stub(),
      user: cy.stub(),
      userData: cy.stub()
     };

    mount(
      <AuthContext.Provider value={authContextValue}>
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // Check if the component rendered correctly
    cy.get('h3').contains('Register');
    cy.get('input[name="name"]').should('exist');
    cy.get('input[name="email"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('button').contains('Register').should('exist');
    cy.get('a').contains('Sign in').should('exist');
  });
});