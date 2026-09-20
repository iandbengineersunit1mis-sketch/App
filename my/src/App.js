import { useState, useEffect } from 'react'; 
import { supabase } from './supabaseClient'; 
import './App.css'; function App() { const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); useEffect(() => { console.log("useEffect triggered"); 
        supabase.auth.getSession().then(({ data, error }) => { console.log("Session Result:", data, error); }); }, []); 
        const handleSignUp = async (e) => { e.preventDefault(); 
            const { data, error } = await supabase.auth.signUp({ email, password }); 
            console.log("Sign Up:", data, error); }; 
            const handleSignIn = async (e) => { e.preventDefault(); 
                const { data, error } = await supabase.auth.signInWithPassword({ email, password }); 
                console.log("Sign In:", data, error); }; return ( <form> <input type="email" value={email} 
                    onChange={(e) => setEmail(e.target.value)} placeholder="Email" /> 
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /> 
                    <button onClick={handleSignUp}>Sign Up</button> <button onClick={handleSignIn}>Sign In</button> 
                    </form> ); } 
export default App;