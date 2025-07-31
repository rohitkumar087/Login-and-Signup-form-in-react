import { useState } from "react";
import Nav from "./Nav";

export default function LogIn() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();


        const resultData = JSON.parse(localStorage.getItem("userData"))
        if (!resultData) {
            alert("No account found. Please sign up first.");
            return;
        }

        if (resultData.email === email && resultData.password === password) {
            alert("login successfully");
            setEmail("")
            setPassword("")
        }
        else if (resultData.email != email && resultData.password != password) {
            alert("Invalid E-mail and Passowrd");
        }
        else if (resultData.email != email) {
            alert("Invalid email")
        }
        else if (resultData.password != password) {
            alert("Invalid password")
        }


    }
    function handleLogout() {
        if (!localStorage) {
            alert("login first")
            return;
        }
        localStorage.removeItem("userData");
        alert("Logged out successfully")
    }

    return (
        <>
            <Nav />
            <div className="formStyle">
                <h1>Login</h1>
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
                    <button>Log in</button>
                    <button onClick={handleLogout}>Log out</button>

                </form>


            </div>
            <h4>If you don't have any accout so - <a href="/signup">Sign up</a></h4> 

        </>
    )
}