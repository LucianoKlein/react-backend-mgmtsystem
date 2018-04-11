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
                <NavLink exact to={this.props.menuObj.link} activeClassName="active-menu" >
                    <i className="fa fa-edit"></i>
                    <span>{this.props.menuObj.menuName}</span>
                </NavLink>
                    {
                        this.props.menuObj.hasChild ? this.props.menuObj.sub.map((element, index)=>{
                            return <SecondMenu key={index} menuObj={element}/>
                        }) : null
                    }
            </li>
        );
    }
}
export default FirstMenu;