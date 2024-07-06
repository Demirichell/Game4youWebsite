import React from 'react';
import { mount } from 'cypress/react18';
import Login from '../Components/Pages/Login'; // Adjust the import path based on your directory structure
import { AuthContext } from '../Components/AppContext/AppContext'; // Adjust the import path based on your directory structure
import { MemoryRouter } from 'react-router-dom';

describe('<Login />', () => {
  it('renders Login component correctly', () => {
    const signInWithGoogle = cy.stub();
    const loginWithEmailAndPassword = cy.stub();
    const authContextValue = { signInWithGoogle, loginWithEmailAndPassword };

    mount(
      <AuthContext.Provider value={authContextValue}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // Check if the component rendered correctly
    cy.get('h3').contains('Sign in');
    cy.get('input[name="email"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('button').contains('Sign in').should('exist');
    cy.get('button').contains('Sign in with Google').should('exist');
    cy.get('a').contains('Register').should('exist');
  });
});