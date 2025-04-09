import React from "react";
import { useState } from "react";
import { Paper, TextField, FormControlLabel, Checkbox, Box, Typography, InputAdornment, IconButton, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
const ResetPassword: React.FC = () => {
     const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value, checked, type } = e.target;
           
        };
       
    const [showPassword, setShowPassword] = useState<boolean>(false);
    
    const handleClickShowPassword = () => {
            setShowPassword(!showPassword);
        };
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
                Reset Password
            </Typography>
            <form className = "flex flex-col">
          
            <TextField
                label="Password"
                name="password"
                
                onChange={handleFormChange}
                placeholder="Your password"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                fullWidth
                required
                margin="normal"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
             <TextField
                label="Password"
                name="password"
                
                onChange={handleFormChange}
                placeholder="Your password"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                fullWidth
                required
                margin="normal"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
           
            <Button className = "bg-gray-200">Reset Password</Button>
            </form>
        </Paper>
    </Box>
    )
};
export default ResetPassword;