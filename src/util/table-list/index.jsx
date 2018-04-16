import React from 'react';
//通用列表组件
class TableList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFirstLoading: true
        }
    }
    componentWillReceiveProps() {
        //列表只有在第一次挂载的时候，isFirstLoading为true，其他为false
        this.setState({
            isFirstLoading: false
        })
    }
    render() {
        let tableHeader = this.props.tableHeads.map(
            (tableHead, index) => {
                if (typeof tableHead === 'object') {
                    return <th key={index} width={tableHead.width}>{tableHead.name}</th> 
                } else if (typeof tableHead === 'string') {
                    return <th key={index}>{tableHead}</th>
                }
            }
        );
        let listInfo = (
            <tr>
                <td colSpan={this.props.tableHeads.length} className="text-center">
                    { this.state.isFirstLoading ? "Loading Now, Please Wait...." : "Sorry, No data right now." }
                </td>
            </tr>
        )

        let listContent = this.props.children;
        let tableBody = listContent.length > 0 ? listContent : listInfo;
        return (
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                { tableHeader }
                            </tr>
                        </thead>
                        <tbody>
                            { tableBody }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TableList;
