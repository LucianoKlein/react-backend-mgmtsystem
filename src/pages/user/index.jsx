import React from 'react';
import {Link} from 'react-router-dom';
import MUtil from 'util/mm.jsx';
import Statistic from 'service/statistic-service.jsx';
import PageTitle from 'component/page-title/index.jsx';
import Pagination from 'util/pagination/index.jsx';
import User from 'service/user-service.jsx';

const _mm = new MUtil();
const _user = new User();
const _statistic = new Statistic();

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            pageNum: 1,
            firstLoading: true
        };
    }
    componentDidMount() {
        this.loadUserList();
    }
    loadUserList() {
        _user.getUserList(this.state.pageNum).then(res => {
            this.setState(res, ()=>{
                this.setState({
                    firstLoading: false
                })
            });
        }, (errMsg) => {
            this.setState({
                list: []
            })
            _mm.errorTips(errMsg);
        });
    }
    //页数变化的时候
    onPageNumChange(pageNum) {
        this.setState({
            pageNum: pageNum
        }, ()=>{
            this.loadUserList();
        })
    }
    render() {
        let listBody = this.state.list.map((user, index) => {
            return (<tr key={index}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{new Date(user.createTime).toLocaleString()}</td>
            </tr>);
        })
        let listError = (
            <tr>
                <td colSpan="5" className="text-center">
                    {
                        this.state.firstLoading ? "Loading Now, Please Wait...." : "Sorry, No data right now."
                    }
                </td>
            </tr>
        )

        let tableBody = this.state.list.length > 0 ? listBody : listError;
        return (
            <div id="page-wrapper">
                <PageTitle title="User List"/>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Telephone</th>
                                    <th>Registration Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tableBody
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <Pagination current={this.state.pageNum} 
                            total={this.state.total} 
                            onChange={(pageNum) => this.onPageNumChange(pageNum)}></Pagination>
            </div>
        )
    }
}

export default UserList;