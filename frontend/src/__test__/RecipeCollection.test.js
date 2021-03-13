import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, waitFor, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import RecipeCollection from '../pages/RecipeCollection'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
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
   const { container } = render(<RecipeCollection />, { wrapper: MemoryRouter })
   const arrowIcon = await waitFor(() => container.querySelector('.MuiSvgIcon-root'))
   expect(arrowIcon).toBeInTheDocument()
   const spinner = await waitFor(() => container.querySelector('.spinner-border'))
   expect(spinner).toBeInTheDocument()
})
