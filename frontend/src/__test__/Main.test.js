import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, fireEvent, waitFor, getAllByRole, getByRole} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Main from '../pages/Main'
import UserInput from '../components/UserInput'

test('check ingredients', async () => {
   const { getByText } = render(<Main />, { wrapper: MemoryRouter })
   expect(getByText('ingredient list')).toBeInTheDocument()
   expect(getByText('preferences')).toBeInTheDocument()
   
   const autocomplete = render(<UserInput options={['onion', 'garlic', 'ham', 'hot dog', 'turkey', 'steak']} />)
   within(autocomplete).getByRole('input')
})

test('check page texts', async () => {
   const { getByText } = render(<Main />, { wrapper: MemoryRouter })
   expect(getByText('ingredient list')).toBeInTheDocument()
   expect(getByText('preferences')).toBeInTheDocument()
   expect(getByText('diet')).toBeInTheDocument()
   expect(getByText('cuisine')).toBeInTheDocument()
   expect(getByText('sort by')).toBeInTheDocument()
})