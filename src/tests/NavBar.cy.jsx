
import React from 'react';
import { mount } from 'cypress/react18';
import NavBar from '../Components/NavBar/NavBar'; 
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../Components/AppContext/AppContext';

describe('<NavBar />', () => {
  it('renders NavBar component correctly', () => {
    const authContextValue = {
      signOutUser: cy.stub(),
      user: { id: '123', name: 'John Doe' },
      userData: { email: 'john.doe@example.com' }, 
    };

    mount(
      <AuthContext.Provider value={authContextValue}>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // Check if the main elements are rendered correctly
    cy.get('a').contains('Game4You').should('exist');
    cy.get('div').find('[data-cy="nav-links"]').should('exist');
    cy.get('div').find('[data-cy="user-links"]').should('exist');
  });
});