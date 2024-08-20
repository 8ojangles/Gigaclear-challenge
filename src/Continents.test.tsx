import { render, screen } from '@testing-library/react';

import Continents from './Continents';

it('should display Europe in the list of the Continents', async () => {
  render(<Continents />);

  const item = await screen.findAllByText('Europe');

  expect(item).toBe('Europe');
});
