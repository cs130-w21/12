import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import RecipeDetails from '../pages/RecipeDetails'
import "@okta/okta-react";

jest.mock('@okta/okta-react', () => ({
    useOktaAuth: () => {
      return {
        authState: {},
        authService: {}
    };
  }
}))

test('check page element', async () => {
    const { getByText } = await render(<RecipeDetails />, { wrapper: MemoryRouter })
    await waitFor(() =>  expect(getByText('back to recipes')).toBeInTheDocument())
    await waitFor(() =>  expect(getByText('Ingredients')).toBeInTheDocument())
    await waitFor(() =>  expect(getByText('Read the detailed instructions')).toBeInTheDocument())
    await waitFor(() =>  expect(getByText('Instructions')).toBeInTheDocument())
})