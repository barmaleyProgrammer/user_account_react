import styles from "./main/main.module.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
function Header() {
    return(

    <Navbar className={styles.navbar}>
        <Container className={styles.menu}>
            <NavLink className="nav-link" to="home">Головна</NavLink>
            <Nav className="me-auto">
                <NavLink className="nav-link" to="about">про нас</NavLink>
                <NavLink className="nav-link" to="cards">Мої картки</NavLink>
                <Nav.Link href="#pricing">Продукти</Nav.Link>
                <Nav.Link href="#pricing">Сервіси</Nav.Link>
                <Nav.Link href="#pricing">Профіль</Nav.Link>
                <Nav.Link href="#pricing">Вітаємо</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    )
}
export default Header