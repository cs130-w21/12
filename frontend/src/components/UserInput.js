import React, { makeState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const UserInput = (props) => {

    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 }
      ];

    return (
        <Autocomplete
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => (
                <TextField {...params} margin="normal" variant="outlined" />
            )}
        />
    )
}

export default UserInput
