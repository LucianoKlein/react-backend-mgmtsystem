import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class SecondMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        <ul className={["nav", "nav-second-level", "nav", "collapse ", "in"]}>
            <li>
                <NavLink exact to={this.props.link} activeClassName="active-menu">{this.props.menuName}</NavLink>
            </li>
        </ul>
    }
}