import React, { useState } from "react";
import { formstate } from "../types/index.tsx";
import { Paper, TextField, FormControlLabel, Checkbox, Box, Typography, InputAdornment, IconButton, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<formstate>({
        email: "",
        password: "",
        rememberMe: false,
        name:""
    });

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
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
                    Welcome to the chat app!
                </Typography>
                <form className = "flex flex-col">
                <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="name"
                    variant="outlined"
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="you@example.com"
                    variant="outlined"
                    fullWidth
                    required
                    margin="normal"
                />
                
                
                <TextField
                    label="Password"
                    name="password"
                    value={formData.password}
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
                <div className ="flex flex-row justify-between">
                <FormControlLabel
                    control={
                        <Checkbox 
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleFormChange}
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button variant = "text" size={"small"}>Forgot Password?</Button>
                </div>
                <Button className = "bg-gray-200">Sign up</Button>
                </form>
            </Paper>
        </Box>
    );
};

export default Signup;