import React from "react";
import {MuiOtpInput} from "mui-one-time-password-input";
import { Paper, TextField, FormControlLabel, Checkbox, Box, Typography, InputAdornment, IconButton, Button } from "@mui/material";
const OTPsend : React.FC = () => {
        const handleChange = (newValue) => {
            setOtp(newValue)
        }
        const [otp, setOtp] = React.useState('')
    return (
        <Box 
            className="flex flex-col gap-4 items-center justify-center min-h-screen"
            sx={{ backgroundColor: "#f5f5f5" }}
        >
            <Paper 
                elevation={3} 
                sx={{ 
                    width: '24rem', 
                    padding: 3, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: 2,
                    border: '1px solid #e0e0e0',
                    borderRadius: 2
                }}
            >
                <Typography variant="h5" component="h1" align="center" gutterBottom>
                    An OTP has been sent to your email!
                </Typography>
                <form className = "flex flex-col gap-2">
                    <MuiOtpInput value ={otp} onChange={handleChange}/>
                    <Button>Submit</Button>
               
                
               
                </form>
            </Paper>
        </Box>
    )
};
export default OTPsend;