import styles from "./main.module.css";
import togglePasswordVisibility from "../PasswordVisibility/PasswordVisibility";

function MainForm () {
    return (
        <div className={styles.container}>
            <div className="col-12">
                <div id="row">
                    <h1>Реєстрація</h1>
                    <form action="reg_auth/validation-form/check.php" method="post">
                        <input type="text" className="form-control" name="login" placeholder="введіть логін"
                               required minLength="5" maxLength="90"/><br/>
                        <input type="text" className="form-control" name="name" placeholder="введіть имʼя"
                               required minLength="3" maxLength="50"/><br/>
                        <div className="pass">
                                            <span className={styles.icon_pass}
                                                  onClick={togglePasswordVisibility}>&#128065;</span>
                            <input type="password" className="form-control" name="pass" id="pass"
                                   placeholder="Password"/><br/>
                        </div>
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me"/> Remember me
                            </label>
                        </div>
                        <button className="btn btn-success" type="submit">зареєструватися</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default MainForm