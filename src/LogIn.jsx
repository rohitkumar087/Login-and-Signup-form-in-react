import { useState } from "react";
import Nav from "./Nav";

export default function LogIn() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(email);
        console.log(password)
    }

    return (
        <>
            <Nav />
            <div className="formStyle">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input onChange={e => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                        value={email}
                    />
                    <br />
                    <input onChange={e => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        value={password}
                    />
                    <br />
                    <button>Submit</button>
                </form>

            </div>
        </>
    )
}