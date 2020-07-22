import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = React.forwardRef(App);
  // const linkElement = getByText('User');
  // expect(linkElement).toBeInTheDocument();
});
