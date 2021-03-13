import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Autocomplete from '@material-ui/lab/Autocomplete'
import '../styles/Main.css'
import { StyledInput } from '../styles/styles'

/**
 * User Input component is used to modify the ingredients.
 * User Input supports autocomplete feature.
 * Used inside /pages/Main
 */
const UserInput = (props) => {
  const options = props.options
  const placeholder = props.placeholder
  const [inputValue, setInputValue] = useState(props.inputValue)
  const handleChange = (e, v) => {
    props.onChange(v)
    setInputValue(v)
  }
  return (
    <Autocomplete
      options={options}
      renderOption={(option) => (
        <React.Fragment>
          <span style={{ color: 'rgba(235, 73, 23, 0.72)' }}>{option}</span>
        </React.Fragment>
      )}
      getOptionLabel={(option) => option}
      onChange={handleChange}
      value={inputValue}
      freeSolo
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <StyledInput type="text" {...params.inputProps} placeholder={placeholder} required />
        </div>
      )}
    />
  )
}

UserInput.propTypes = {
  /* defines styles for this component */
  styles: PropTypes.object,
  /* represents options that match with the current user input for autocomplete */
  options: PropTypes.array,
  /* represents the string that are used for placeholder in the input */
  placeholder: PropTypes.string,
  /* represents the function to be fired when the input has changed */
  onChange: PropTypes.func,
  /* represents the inputValue of the Autocomplete */
  inputValue: PropTypes.string
}

export default UserInput
