import React from "react";
import { useState } from "react";
import { formstate } from "../types/index.tsx";


const Login : React.FC =() => {
    const [formdata,setFormdata] = useState<formstate>({
        email: "",
        password: "",
        rememberMe :false
    })
    return (
        <div className = "flex items-center justify-center h-screen">
            rambo
        </div>
    )
}
export default Login;