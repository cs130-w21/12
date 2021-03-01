import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import RecipeCollection from '../pages/RecipeCollection'

test('check page element', async () => {
    const { getByText } = render(<RecipeCollection />, { wrapper: MemoryRouter })
    expect(getByText('back to ingredient list')).toBeInTheDocument()
    expect(getByText('more recipes')).toBeInTheDocument()
})