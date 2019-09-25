import { getGreeting } from '../support/app.po';

describe('fake', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to fake!');
  });
});
