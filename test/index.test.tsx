import React from 'react';
import { render } from '@testing-library/react';

import Home from '../pages/index';

describe(Home.name, () => {
  test('renders Home component', () => {
    
    render(<Home />);

  });
});