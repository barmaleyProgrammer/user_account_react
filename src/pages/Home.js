import styles from "../components/main/main.module.css";
import togglePasswordVisibility from "../components/PasswordVisibility/PasswordVisibility";
import { useState } from "react";
import axios from "axios";

function Home () {
    const apiUrl = 'http://localhost/personal_account/front_api.php';

    const [form, setFormState] = useState({
        login: '',
        name: '',
        password: '',
        remember: false
    });

    const register = (event) => {
        event.preventDefault();
        console.log(form);
        axios({
            method: 'post',
            url: `${apiUrl}?action=auth&login=true`,
            data: JSON.stringify(form),
            withCredentials: false,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then((res) => {
            console.log(res);
        });
    };





    // const [login, setLoginState] = useState('');
    // const [name, setNameState] = useState('');
    // const [password, setPasswordState] = useState('');

    return (
        <div className={styles.container}>
            <div className="col-12">
                <div id="row">
                    <h1>Реєстрація</h1>
                    {/*https://www.youtube.com/watch?v=Fbv61eS2I_A*/}
                    {/*boogstrap forms label*/}
                    <form onSubmit={register}>
                        <input
                            className="form-control"
                            placeholder="введіть логін"
                            required
                            minLength="5"
                            maxLength="90"
                            value={form.login.value}
                            onChange={(e) => setFormState({...form, login: e.target.value})}
                        /><br/>
                        <input
                            className="form-control"
                            placeholder="введіть имʼя"
                            required
                            minLength="3"
                            maxLength="50"
                            value={form.name.value}
                            onChange={(e) => setFormState({...form, name: e.target.value})}
                        /><br/>
                        <div className="pass">
                            <span className={styles.icon_pass} onClick={togglePasswordVisibility}>&#128065;</span>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                value={form.password.value}
                                onChange={(e) => setFormState({...form, password: e.target.value})}
                            /><br/>
                        </div>
                        <div className="checkbox mb-3">
                            <label>
                                <input
                                    type="checkbox"
                                    value={form.remember.value}
                                    onChange={(e) => setFormState({...form, remember: e.target.value})}
                                /> Remember me
                            </label>
                        </div>
                        <button className="btn btn-success" type="submit">зареєструватися</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Home