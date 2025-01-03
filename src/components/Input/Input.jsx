import React from 'react';
import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl";

const InputBox = ({
    label = '',
    name='',
    placeholder = '',
    value,
    onChange,
    error,
}) => {
    return (
        <FormControl fullWidth>
            <label>{label}</label>
            <TextField
                variant='outlined'
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                error={!!error}
                size='small'
                helperText={error ? error.message : ''}
                sx={{
                    '& .MuiInputBase-input': {
                        border: '1px solid #BDBFC7',
                        borderRadius: '4px',
                        fontSize: '1rem',
                        '@media (max-width: 1024px)': {
                            fontSize: '0.900rem',
                        },
                        '@media (max-width: 768px)': {
                            fontSize: '0.775rem',
                        },
                    },
                }}
            />
        </FormControl>
    );
};

export default InputBox;
