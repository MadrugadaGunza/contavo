import Input from "../../components/form/Input";
import logo from './../../assets/contavo-logo.png';

const Login = () => {
    return (
        <section className="flex justify-center items-center h-screen bg-gray-100">
            <form className="bg-white p-10 w-120">
                <div className="flex justify-center mb-6">
                    <img src={logo} alt="logo contavo" className="w-80" />
                </div>
                <Input type="email" label="Email" name="email" id="email" placeholder="Digite seu email" />
                <Input type="password" label="Senha" name="password" id="password" placeholder="Digite sua senha" />
                <button className="p-4 text-white bg-blue-900 w-full cursor-pointer">Entrar</button>
            </form>
        </section>
    )
}

export default Login
