import React from 'react'
import PropTypes from 'prop-types'
import Autocomplete from '@material-ui/lab/Autocomplete'
import '../styles/Main.css'
import { StyledInput } from '../styles/styles'

const UserInput = (props) => {
  const options = props.options
  const placeholder = props.placeholder
  const handleChange = (e, v) => {
    props.onChange(v)
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
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
            <StyledInput type="text" {...params.inputProps} placeholder={placeholder} required />
        </div>
      )}
    />
  )
}

UserInput.propTypes = {
  styles: PropTypes.object,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

export default UserInput
