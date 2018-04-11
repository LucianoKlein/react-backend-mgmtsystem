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
                            return <FirstMenu menuObj={element} key={index}/>
                        })}
                    </ul>

                </div>
            </div>
        );
    }
}

export default NavSide;