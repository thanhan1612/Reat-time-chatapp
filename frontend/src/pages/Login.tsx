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
        <div>
            this is login
        </div>
    )
}
export default Login;