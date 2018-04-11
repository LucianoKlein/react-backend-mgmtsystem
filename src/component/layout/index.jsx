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
                        link: "/"
                    },
                    {
                        menuName: "Product",
                        hasChild: true,
                        link: "/product",
                        sub: [
                            {
                                menuName: "Product Management",
                                link: "/product"
                            },
                            {
                                menuName: "Category Management",
                                link: "/product-category"
                            }

                        ]
                    },
                    {
                        menuName: "Orders",
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
                        hasChild: true,
                        link: "/user",
                        sub: [
                            {
                                menuName: "User Management",
                                link: "/user"
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