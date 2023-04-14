import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';
const App = () => {

     if(!localStorage.getItem('userName')) return <LoginForm/>

    return (
        <ChatEngine
        
        height="100vh"
        projectID="718d7225-8812-450e-a4e8-066f50af2616"
        userName={localStorage.getItem('userName')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...  chatAppProps}/> }
        />
    );
}

export default App;