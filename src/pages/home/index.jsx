import React from 'react';
import './index.scss';
import PageTitle from 'component/page-title/index.jsx';
import {Link} from 'react-router-dom';
import MUtil from 'util/mm.jsx';
import Statistic from 'service/statistic-service.jsx'

const _mm = new MUtil();
const _statistic = new Statistic();

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userCount: '-',
            productCount: '-',
            orderCount: '-'
        }
    }
    componentDidMount() {
        this.loadCount();
    }
    loadCount() {
        _statistic.getHomeCount().then(res => {
            this.setState(res);
        }, errMsg => {
            _mm.errorTips(errMsg);
        });
    }
    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="Home"/>
                <div className="row">
                    <div className="col-md-4">
                        <Link to="/user/index" className="color-box brown">
                            <p className="count">{this.state.userCount}</p>
                            <p className="desc">
                                <i className="fa fa-user-o"></i>
                                <span>Total Users</span>
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/product" className="color-box blue">
                            <p className="count">{this.state.userCount}</p>
                            <p className="desc">
                                <i className="fa fa-list"></i>
                                <span>Total Products</span>
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/order" className="color-box green">
                            <p className="count">{this.state.userCount}</p>
                            <p className="desc">
                                <i className="fa fa-check-square-o"></i>
                                <span>Total Orders</span>
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;