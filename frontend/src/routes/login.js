import { VStack, Button, Field, Input } from "@chakra-ui/react";
import { useState } from "react";
import { login } from "../endpoints/api"

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = () => {
        login(username, password)
    }
    

    return ( 
        <VStack>
            <Field.Root>
                <Field.Label>Username</Field.Label>
                <Input onChange={(e) => setUsername(e.target.value)} value={username} type="text" />
            </Field.Root>
            <Field.Root>
                <Field.Label>Password</Field.Label>
                <Input onChange={(e) => setPassword(e.target.value)} value={password} type="password" />
            </Field.Root>
            <Button>Login</Button>
        </VStack>
    )
}

export default Login;