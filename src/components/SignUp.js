import React,{useState} from 'react';
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitSignUpDetails = async () => {
        try {
            const response = await axios.post();
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>SignUp</div>
  )
}

export default SignUp