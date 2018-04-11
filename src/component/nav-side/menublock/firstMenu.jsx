import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import SecondMenu from './secondMenu.jsx'

class FirstMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li>
                <NavLink exact to={this.props.link} activeClassName="active-menu" >
                    <i className="fa fa-edit"></i>
                    <span>{this.props.menuName}</span>
                    {
                        this.props.hashChild ? console.log("yes") : null
                    }
                </NavLink>
            </li>
        );
    }
}
export default FirstMenu;