import React from 'react'
import { TextField } from "@mui/material"
import { Controller, useForm } from "react-hook-form"
import Box from '@mui/material/Box';
const Input = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            companyName: "",
            legalName: "",
            logoUpload: "",
            phoneNumber: "",
            alternativePhoneNumber: "",
            gst: "",
            pan: "",
            cin: "",
            tan: "",
            email: "",
            bankName: "",
            accountNumber: "",
            ifscCode: "",
            accountHolderName: "",
            swiftCode: "",
            address: ""
        },
        mode: "onChange"
    });
    return (
        <div>
            <Controller
                name="companyName"
                control={control}
                rules={{
                    required: {
                        value: true,
                        message: "Company Name is required"
                    }
                }}
                render={({ field: { value, onChange }, fieldState: { error, invalid } }) => {
                    return (
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                            sx={{
                                '& .MuiInputBase-root': { width: '', margin: '4px' },
                                '& p': { fontSize: '14px', fontWeight: '500', marginLeft: '4px' },
                                '& span': { color: 'red' },
                            }}
                        >
                            <div>
                                <p>
                                    Company Name<span>*</span>
                                </p>
                                <TextField
                                    fullWidth={true}
                                    value={value}
                                    onChange={onChange}
                                    placeholder='Company Name'
                                    error={invalid}
                                    helperText={invalid && error.message}
                                    sx={{
                                        '& .MuiInputBase-input': { padding: '5px', border: '1px  #BDBFC7', borderRadius: '4px' },
                                        '& .MuiFormHelperText-root': { color: 'red', fontSize: '12px' },
                                    }}
                                />
                            </div>
                        </Box>
                    );
                }}
            />
        </div>
    )
}

export default Input
