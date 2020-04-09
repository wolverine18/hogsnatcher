import React from 'react'
import API from '../API'
import { useHistory } from 'react-router-dom'

function Login () {
    const history = useHistory();
    const [getLogin, setLogin] = React.useState({
        email: '',
        password: ''
    });

    const [getError, setError] = React.useState('');

    const formSubmitted = (event) => {
        event.preventDefault();
        API.login(getLogin).then((data) => {
            setError('');
            history.push('/home');
        }).catch((err) => {
            setError(err.message);
        });
        
    }

    const handleChange = (event) => {
        const newLogin = { ...getLogin};
        newLogin[event.target.name] = event.target.value;
        setLogin(newLogin);
    }

    return (
        <div className="container-fluid">
            <form onSubmit={formSubmitted}>
                <h1>Login</h1>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" required={true} name="email" value={getLogin.email} onChange={handleChange}></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" required={true} name="password" value={getLogin.password} onChange={handleChange}></input>
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="remeberMe" />
                        <label className="custom-control-label" htmlFor="rememberMe">Remember me</label>
                    </div>
                </div>
                {getError && (
                    <div className="alert alert-warning" role="alert">
                    {getError}
                  </div>
                )}
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        </div>
    )
}

export default Login
