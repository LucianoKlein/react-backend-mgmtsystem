
import React from 'react';
import {Link} from 'react-router-dom';
import MUtil from 'util/mm.jsx';
import Statistic from 'service/statistic-service.jsx';
import PageTitle from 'component/page-title/index.jsx';
const _mm = new MUtil();
const _statistic = new Statistic();

class ErrorPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="出错啦"/>
                <div className="row">
                    <div className="col-md-12">
                        <span>找不到该路径，</span>
                        <Link to="/">点我返回首页</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ErrorPage;