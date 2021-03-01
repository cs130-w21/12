import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, within, fireEvent, queryByText, queryAllByText} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Main from '../pages/Main'
import UserInput from '../components/UserInput'

test('check ingredients', async () => {

   const rendered = await render(<UserInput
      options={['onion', 'ham']}
      placeholder="Enter Ingredient..."
   />)
   const { findByPlaceholderText } = rendered
   // Find autocomplete element
   const autocomplete = await findByPlaceholderText('Enter Ingredient...')
   const { getByText: getByBodyText } = within(document.body)
   
   fireEvent.mouseDown(autocomplete);
   const option = getByBodyText('onion')
   expect(option).toBeInTheDocument()

   fireEvent.change(autocomplete, { target: { value: 'a' }})
   expect(within(document.body).queryByText('onion')).not.toBeInTheDocument()
   expect(within(document.body).queryByText('ham')).toBeInTheDocument()
})

test('check preferences: diet', async () => {
   const rendered = await render(<UserInput
      options={['No preference', 'Vegan']}
      placeholder="search..."
   />)
   const { findByPlaceholderText } = rendered
   // Find autocomplete element
   const autocomplete = await findByPlaceholderText('search...')
   const { getByText: getByBodyText } = within(document.body)

   fireEvent.mouseDown(autocomplete);
   const option = getByBodyText('Vegan')
   expect(option).toBeInTheDocument()

   fireEvent.change(autocomplete, { target: { value: 'v' }})
   expect(within(document.body).queryByText('No preference')).not.toBeInTheDocument()
   expect(within(document.body).queryByText('Vegan')).toBeInTheDocument()
})

test('check preferences: cuisine', async () => {
   const rendered = await render(<UserInput
      options={['American', 'French']}
      placeholder="search..."
   />)
   const { findByPlaceholderText } = rendered
   // Find autocomplete element
   const autocomplete = await findByPlaceholderText('search...')
   const { getByText: getByBodyText } = within(document.body)

   fireEvent.mouseDown(autocomplete);
   const option = getByBodyText('American')
   expect(option).toBeInTheDocument()

   fireEvent.change(autocomplete, { target: { value: 'a' }})
   expect(within(document.body).queryByText('French')).not.toBeInTheDocument()
   expect(within(document.body).queryByText('American')).toBeInTheDocument()
})

test('check preferences: sort by', async () => {
   const rendered = await render(<UserInput
      options={['Date', 'Rate', 'Calories']}
      placeholder="search..."
   />)
   const { findByPlaceholderText } = rendered
   // Find autocomplete element
   const autocomplete = await findByPlaceholderText('search...')
   const { getByText: getByBodyText } = within(document.body)

   fireEvent.mouseDown(autocomplete);
   const option = getByBodyText('Date')
   expect(option).toBeInTheDocument()

   fireEvent.change(autocomplete, { target: { value: 'd' }})
   expect(within(document.body).queryByText('Rate')).not.toBeInTheDocument()
   expect(within(document.body).queryByText('Calories')).not.toBeInTheDocument()
   expect(within(document.body).queryByText('Date')).toBeInTheDocument()
})

test('check page texts', async () => {
   const { getByText } = render(<Main />, { wrapper: MemoryRouter })
   expect(getByText('ingredient list')).toBeInTheDocument()
   expect(getByText('preferences')).toBeInTheDocument()
   expect(getByText('diet')).toBeInTheDocument()
   expect(getByText('cuisine')).toBeInTheDocument()
   expect(getByText('sort by')).toBeInTheDocument()
})