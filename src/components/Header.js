import React from 'react'
import { Route, Link } from "react-router-dom";
import { Container} from "react-grid-system"

export default () => {
    return (
        <header className="app-header">
            <Container>
                <Menu />
                <Auth />
            </Container>
        </header>
    )
}

const Menu = () => (
    <nav className="menu">
        <ul>
            <MenuItem to="/" title="برگ نخست" active={true} />
            <MenuItem to="/posts" title="آخرین نوشته ها" />
            <MenuItem to="/requests" title="درخواست ها" />
            <MenuItem to="/contact" title="تماس با ما" />
        </ul>
    </nav>
)

const MenuItem = (props) => {
    const { to, title, active } = props;
    return (
        <Route path={to} exact={active} children={({ match }) => (
            <li className={["menu-link", match && 'active'].join(' ')}>
                <Link to={to}>{title}</Link>
            </li>
        )} />
    );
}

const Auth = () => {
    let to = "sign-up";
    let title = "نام نویسی / ورود به سایت";
    return (
        <button className="button button-sm button-radius button-primary">
            <Link to={to}>{title}</Link>
        </button>
    )
}