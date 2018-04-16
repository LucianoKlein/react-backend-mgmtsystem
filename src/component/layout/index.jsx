import React from 'react';
import NavSide from 'component/nav-side/index.jsx';
import NavTop from 'component/nav-top/index.jsx';
import './theme.css'
class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="wrapper">
                <NavTop/>
                <NavSide menuObj={[
                    {
                        menuName: "Home",
                        hasChild: false,
                        classType: "dashboard",
                        link: "/"
                    },
                    {
                        menuName: "Product",
                        hasChild: true,
                        classType: "list",
                        link: "/product/index",
                        sub: [
                            {
                                menuName: "Product Management",
                                link: "/product/index"
                            },
                            {
                                menuName: "Category Management",
                                link: "/product-category"
                            }

                        ]
                    },
                    {
                        menuName: "Orders",
                        classType: "check-square-o",
                        hasChild: true,
                        link: "/order",
                        sub: [
                            {
                                menuName: "Order Management",
                                link: "/order"
                            }
                        ]
                    },
                    {
                        menuName: "User",
                        classType: "user-o",
                        hasChild: true,
                        link: "/user/index",
                        sub: [
                            {
                                menuName: "User Management",
                                link: "/user/index"
                            }
                        ]
                    }
                ]}/>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;