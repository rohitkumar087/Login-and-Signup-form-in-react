import Nav from "./Nav";
import { useState } from "react";

export default function SignUp() {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [phone, setPhone] = useState('');
    let [password, setPassword] = useState('');

     function handleSubmit(e) {
        e.preventDefault();
        console.log(name);
        console.log(email)
        console.log(phone)
        console.log(password)

        email = ''
    }
    return (
        <>
        <Nav/>

            <div className='formStyle'>
                <h1>Sign up</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Enter your name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <br />
                    <input
                        type="email"
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <br />

                    <input
                        type="number"
                        placeholder='Phone number'
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                    <br />

                    <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <br />

                    <button type='submit' className='button'>Submit</button>
                </form>
            </div>
        </>
    )
}