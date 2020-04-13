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
            <MenuItem to="/blog" title="آخرین نوشته ها" />
            <MenuItem to="/requests" title="درخواست ها" />
            <MenuItem to="/portfolios" title="تماس با ما" />
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

    let title = "نام نویسی / ورود به سایت";
    let to = "login";

    return (
        <button className="button button-sm button-radius button-primary">
            <Link to={to}>{title}</Link>
        </button>
    )
}