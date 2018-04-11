import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import FirstMenu from './menublock/firstMenu.jsx';

class NavSide extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="navbar-default navbar-side">
                <div className="sidebar-collapse">
                    <ul className="nav">
                        {this.props.menuObj.map((element, index)=>{
                            return <FirstMenu link={element.link} key={index} menuName={element.menuName} hasChild={element.hasChild}/>
                        })}
                        <li className="active">
                            <Link to="/product">
                                <i className="fa fa-sitemap"></i> 
                                <span>Product</span>
                                <span className="fa arrow"></span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink exact to="/product" activeClassName="active-menu">Product Management</NavLink>
                                </li>
                                
                                <li>
                                    <NavLink exact to="/product-category" activeClassName="active-menu">Category Management</NavLink>
                                </li>
                            </ul>
                        </li>
                        
                        <li className="active">
                            <NavLink exact to="/order">
                                <i className="fa fa-sitemap"></i> 
                                <span>Orders</span>
                                <span className="fa arrow"></span>
                            </NavLink>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink exact activeClassName="active-menu" to="/order">Order Management</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="active">
                            <NavLink exact to="/user">
                                <i className="fa fa-sitemap"></i> 
                                <span>User</span>
                                <span className="fa arrow"></span>
                            </NavLink>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink exact to="/user" activeClassName="active-menu">User Management</NavLink>
                                </li>
                                
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        );
    }
}

export default NavSide;