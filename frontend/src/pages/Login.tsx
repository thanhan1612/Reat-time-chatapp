import React from "react";
import { useState } from "react";
import { formstate } from "../types/index.tsx";
import { Paper } from "@mantine/core";
import { TextInput } from "@mantine/core";
import { PasswordInput } from "@mantine/core";
const Login : React.FC =() => {
    const [formdata,setFormdata] = useState<formstate>({
        email: "",
        password: "",
        rememberMe :false
    })
    return (
        <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-200">
            <Paper shadow = "md" className = "w-80 border border-gray-300 p-4 flex flex-col gap-4 bg-white p-[12px] rounded" radius = 'md'>
            <h1 className ="text-2xl text-center">Welcome to the chat app !</h1>
            <TextInput label="Email" placeholder="you@mantine.dev" required styles={{
                    input: {
                        border: '1px solid #ced4da', // Set border style directly
                        '&:focus': {
                            borderColor: '#228be6' // Keep focus color
                        },
                        padding: "4px",
                        width:"100%"
                    }
                }} />
            <PasswordInput label="Password" placeholder="Your password" required mt="md" styles={{
                    input: {
                        border: '1px solid #ced4da', // Set border style directly
                        '&:focus': {
                            borderColor: '#228be6' // Keep focus color
                        },
                        padding: "4px",
                        width:"100%"
                    }
                }} />
            </Paper>
        </div>
    )
}
export default Login;