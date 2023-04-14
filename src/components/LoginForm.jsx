import { useState } from "react"
import axios from "axios";

const LoginForm = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

const handleSubmit = async (e) => {

    e.preventDefault();

    const authObject = { 'project-ID': "718d7225-8812-450e-a4e8-066f50af2616", 'User-Name': userName, 'User-Secret':password};

    try {
         
       await axios.get('https://api.chatengine.io/chats', { headers: authObject});

       localStorage.setItem('userName', userName)
       localStorage.setItem('password', password)

       window.location.reload();
        
    } catch (error) {
     setError('ooops ,incorrect credentials')  
    }
   
   
    
}

    return(
        <div className="wrapper">
          <div className="form">
             <h1 className="title">Chat Application</h1>

             <form onSubmit={handleSubmit}>
                <input type="text" value={userName} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="userName" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
             <div align="center">
                 <button type="submit" className="button">
                    <span>Start Chat</span>
                 </button>
             </div>
             <h2 className="error">{error}</h2>
             </form>
          </div>
        </div>
    )
}
export default LoginForm