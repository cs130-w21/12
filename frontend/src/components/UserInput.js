import React from 'react'
import PropTypes from 'prop-types'
import Autocomplete from '@material-ui/lab/Autocomplete'
import '../styles/Main.css'

const UserInput = (props) => {
  const options = props.options
  const placeholder = props.placeholder
  const handleChange = (e, v) => {
    props.onChange(v)
  }
  const styles = props.styles
  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option}
      onChange={handleChange}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
            <input style={styles} type="text" {...params.inputProps} placeholder={placeholder} />
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
