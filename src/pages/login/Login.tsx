import styles from './Login.module.css';
import logo from '../../assets/contavo-logo.png';
import Input from '../../components/input/Input';

const Login = () => {
    return (
        <section className={styles.login}>
            <form action="">
                <div className={styles.blockLogo}>
                    <img src={logo} alt="logotipo-do-aplicativo-contavo" />
                </div>
                <Input label='Nome de Usuário' id='username' name='username' placeholder='Digite o seu nome de usuário' />
                <Input type='password' label='Senha' id='password' name='password' placeholder='Digite sua senha' />
                <button>Entrar</button>
            </form>
        </section>
    )
}

export default Login
