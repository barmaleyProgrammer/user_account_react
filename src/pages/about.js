function About () {
    return (

<section className="about">
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
                        <h5>Ми пропонуємо надійний сервіс</h5>
                        <h5>Легка реєстрація</h5>
                        <h5>Зручне придбання</h5>
                        <h5>Наші контакти<a href="https://ua.korrespondent.net/" target="_blank">тут</a></h5>
                        <h5>соціальні пильги</h5>
                    </div>
                    <div className="col-lg-6 col-sm-12 mb-sm-5 mt-sm-5 text-center">
                        <img src="img/valid_telpo_copy.jpg" alt="валидатор" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        )
}
export default About