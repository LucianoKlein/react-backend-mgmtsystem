import React from 'react';
import {Link} from 'react-router-dom';
import MUtil from 'util/mm.jsx';
import PageTitle from 'component/page-title/index.jsx';
import Pagination from 'util/pagination/index.jsx';
import Product from 'service/product-service.jsx';
import TableList from 'util/table-list/index.jsx';
import './index.scss';
const _mm = new MUtil();
const _product = new Product();

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            pageNum: 1
        };
    }
    componentDidMount() {
        this.loadProductList();
    }
    loadProductList() {
        _product.getProductList(this.state.pageNum).then(res => {
            this.setState(res);
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
            this.loadProductList();
        })
    }
    onSetProductStatus(event, productId, currentStatus) {
        let newStatus = currentStatus === 1 ? 2 : 1,
            confirmTips = currentStatus === 1 
                ? 'Do you confirm to put this product on market?' : 'Do you confirm to remove this product?';
        
        if (window.confirm(confirmTips)) {
            _product.setProductStatus({
                productId: productId,
                status: newStatus
            }).then(res => {
                _mm.successTips(res);
                this.loadProductList();
            }, errMsg => {
                _mm.errorTips(res);
            });
        }
    }
    render() {
        let tableHeads = [
          { name: 'Product Id', width: '10%' }, 
          { name: 'Product Info', width: '50%' }, 
          { name: 'Price', width: '10%' },
          { name: 'Status', width: '15%' },
          { name: 'Edit', width: '15%' },
        ]

        return (
            <div id="page-wrapper">
                <PageTitle title="Product List"/>
                <TableList tableHeads={tableHeads}>
                    {
                        this.state.list.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td>{product.id}</td>
                                    <td>
                                        <p>{product.name}</p>
                                        <p>{product.subtitle}</p>
                                    </td>
                                    <td>${product.price}</td>
                                    <td>
                                        <p>{product.status === 1 ? 'For sale' : 'Not for sale'}</p>
                                        <button className="btn btn-xs btn-warning" 
                                            onClick={(e) => {this.onSetProductStatus(e, product.id, product.status)}}>{product.status === 1 ?  'Remove' : 'Launch'}</button>
                                    </td>
                                    <td>
                                        <Link className="opera" to={`/product/detail/${product.id}`}>Detail</Link>
                                        <Link className="opera" to={`/product/save/${product.id}`}>Edit</Link>
                                    </td>
                                </tr>);
                        })
                    }
                </TableList> 
                <Pagination current={this.state.pageNum} 
                            total={this.state.total} 
                            onChange={(pageNum) => this.onPageNumChange(pageNum)}></Pagination>
            </div>
        )
    }
}

export default ProductList;