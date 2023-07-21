import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { register } from '../Functions/Register';
import { isAuthenticated } from '../Functions/ProtectedRoute';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    useEffect(() => {
        isAuthenticated();
    }, []);


    const handleRegister = async (event) => {
        event.preventDefault();

        try {
            const response = await register(email, password);

            setEmail('');
            setPassword('');
            setShowSuccessMessage(true);
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 2000);

            console.log(response);

        } catch (error) {
            if (error.response && error.response.status === 422) {
                setShowErrorMessage(true)
                setTimeout(() => {
                    setShowErrorMessage(false);
                }, 2000);
                return;
            } else {
                setError('Erro ao registrar. Tente novamente mais tarde.');
                console.error('Erro ao registrar:', error);
            }
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="card p-4">
                <h2 className="text-center mb-4">Registrar Usuários</h2>
                {showErrorMessage && <div className="alert alert-danger">E-mail já existe, tente outro!</div>}
                {showSuccessMessage && (<div className="alert alert-success mb-3">Usuário registrado com sucesso!</div>)}
                <form onSubmit={handleRegister}>
                    <div className="form-group mb-3">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Senha</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Registrar</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
