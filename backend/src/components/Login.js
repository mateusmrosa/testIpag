import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { login } from '../Functions/Login';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await login(email, password);
            localStorage.setItem('token', response.token);
            setLoading(false);
            setShowSuccessMessage(true);
            setTimeout(() => {
                window.location.href = '/register';
            }, 1000);

        } catch (error) {
            console.error('Erro ao fazer login:', error.message);
            setLoading(false);
            setShowErrorMessage(true);
            setTimeout(() => {
                setShowErrorMessage(false);
            }, 2000);
            return;
        }
        setEmail('')
        setPassword('')

    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            {loading && (
                <div className="loading-overlay">
                    <div className="loading-spinner"></div>
                </div>
            )}
            <div className="card p-4">
                <h2 className="text-center mb-4">Login</h2>
                {showErrorMessage && (<div className="alert alert-danger mb-3">E-mail ou senha inválidos!</div>)}
                {showSuccessMessage && (<div className="alert alert-success mb-3">Autenticado com sucesso!</div>)}
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control mb-3"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Senha</label>
                        <input
                            type="password"
                            className="form-control mb-3"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Entrar</button>
                </form>
            </div>
            {/* {showSuccessMessage && (
                <div className="alert alert-success mb-3">Autenticado com sucesso!</div>
            )} */}

        </div >
    );
};

export default Login;
