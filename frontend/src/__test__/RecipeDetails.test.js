import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { screen, render, within, fireEvent, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import RecipeDetails from '../pages/RecipeDetails'

test('check page element', async () => {
    const { getByText } = render(<RecipeDetails />, { wrapper: MemoryRouter })
    expect(getByText('back to recommended recipes')).toBeInTheDocument()
    expect(getByText('Ingredients')).toBeInTheDocument() 
    expect(getByText('Instructions')).toBeInTheDocument()
    expect(getByText('Read the detailed instructions')).toBeInTheDocument()   
})