import React from 'react';
import { mount } from 'cypress/react18';
import PostCard from '../Components/main/PostCard'; // Adjust the import path based on your directory structure
import { AuthContext } from '../Components/AppContext/AppContext'; // Adjust the import path based on your directory structure

describe('<PostCard />', () => {
  const user = { uid: '123', email: 'test@example.com' };
  const post = {
    uid: '123',
    id: 'post1',
    logo: '',
    name: 'John Doe',
    email: 'test@example.com',
    text: 'This is a sample post',
    image: 'https://via.placeholder.com/150',
    timestamp: '2023-07-06T12:34:56Z',
  };

  it('renders PostCard correctly', () => {
    mount(
      <AuthContext.Provider value={{ user }}>
        <PostCard {...post} />
      </AuthContext.Provider>
    );

    cy.get('p').contains(post.email);
    cy.get('p').contains('Published:' + post.timestamp);
    cy.get('p').contains(post.text);
    if (post.image) {
      cy.get('img[alt="post"]').should('have.attr', 'src', post.image);
    }
  });
});