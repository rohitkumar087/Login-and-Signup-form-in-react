import { Link } from "react-router-dom";
import Nav from "./Nav";
import { useState } from "react";

export default function SignUp() {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [phone, setPhone] = useState('');
    let [password, setPassword] = useState();
    let [error,setError]=useState("");

     function handleSubmit(e) {
        e.preventDefault();
       
        // if(!name&& !email && !phone&& !password){
        //     setError("Please fill all the fields");
        //     return;
        // }
        const allError ={}
        if(!name) allError.name = 'Name is required'
        if(!email) allError.email = 'Email is required'
        if(!phone) allError.phone = 'Phone is required'
        if(!password) allError.password = 'Password is required'
        
        if(Object.keys(allError).length>0){
            setError(allError);
            return;
        }

         const result = {
            name, email,phone,password
        }

        localStorage.setItem('userData',JSON.stringify(result))

        setName('')
        setEmail('')
        setPhone('')
        setPassword('')
    }

    return (
        <>
        <Nav/>

            <div className='formStyle'>
                <h1>Sign up</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                        type="text"
                        placeholder='Enter your name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    {error.name && <p style={{color:"white",textAlign:"left"}}>{error.name}</p>}
                    </div>
                    <br />
                   <div>
                     <input
                        type="email"
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    {error.email && <p style={{color:"white",textAlign:"left"}}>{error.email}</p>}

                   </div>
                    <br />

                   <div>
                     <input
                        type="number"
                        placeholder='Phone number'
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                    {error.phone && <p style={{color:"white",textAlign:"left"}}>{error.phone}</p>}

                   </div>
                    <br />

                   <div>
                     <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    {error.password && <p style={{color:"white",textAlign:"left"}}>{error.password}</p>}

                   </div>
                    <br />

                    <button>Sign up</button>
                </form>
            </div>
            <h4>If you already have an account ? <Link to='/login'>Log in</Link></h4>
        </>
    )
}

 