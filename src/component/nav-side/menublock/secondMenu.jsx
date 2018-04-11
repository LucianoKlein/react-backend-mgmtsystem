import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class SecondMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <ul className="nav nav-second-level nav collapse in">
            <li>
                <NavLink exact to={this.props.menuObj.link} activeClassName="active-menu">{this.props.menuObj.menuName}</NavLink>
            </li>
        </ul>
        );
    }
}
export default SecondMenu;