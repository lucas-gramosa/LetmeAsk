import { useNavigate } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg'
import logImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import "../styles/auth.scss";
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';


export function Home() {
    const navigate = useNavigate();
    const {user, signInWithGoogle } = useAuth();
        
    async function handCreateRoom() {    
        if (!user) {
            await signInWithGoogle()
        }
        
        navigate('/rooms/news')
    }

    return (
        <div id="page-auth"> 
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie Salas de Q&amp;A ao-vivo</strong>
                <p>Tire suas dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                <img src={logImg} alt="letmeask" />
                <button onClick={handCreateRoom}className= "create-room">
                    <img src={googleIconImg} alt="logo do google" />
                    Crie sua sala com o google
                </button>
                <div className="separator">ou entre em uma sala</div>
                <form >
                   <input type="text" 
                   placeholder="Digite o código da sala "
                   
                   /> 
                   <Button type="submit">
                    Entrar na sala
                   </Button>
                </form>
                </div>
            </main>
        </div>
    )
}