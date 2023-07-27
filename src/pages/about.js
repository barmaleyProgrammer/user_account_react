import styles from "./about.css";
import validator from './assets/img/validator.jpg';
function About () {
    return (

<section className={styles.about}>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <h2 className="text-center text-uppercase color2 mb-5">Про нас</h2>
            </div>
        </div>
        <div className="row row align-items-center">
            <div className="col-xl-9 col-lg-12">
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6 col-sm-12">
                        <h5 style={{
                            padding: '20px',
                            border: '3px solid #2A5FA5FF'
                        }}>Ми пропонуємо надійний сервіс</h5>
                        <h5 style={{
                            padding: '20px',
                            border: '3px solid #2A5FA5FF'
                        }}>Легка реєстрація</h5>
                        <h5 style={{
                            padding: '20px',
                            border: '3px solid #2A5FA5FF'
                        }}>Зручне придбання</h5>
                        <h5 style={{
                            padding: '20px',
                            border: '3px solid #2A5FA5FF'
                        }}>Наші контакти<a href="https://ua.korrespondent.net/" target="_blank">тут</a></h5>
                        <h5 style={{
                            padding: '20px',
                            border: '3px solid #2A5FA5FF'
                        }}>соціальні пильги</h5>
                    </div>
                    <div className="col-lg-6 col-sm-12 mb-sm-5 mt-sm-5 text-center">
                        <img src={validator} alt="валидатор" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        )
}
export default About