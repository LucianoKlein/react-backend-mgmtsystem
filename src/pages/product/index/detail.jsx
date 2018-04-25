import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import MUtil from 'util/mm.jsx';
import Product from 'service/product-service.jsx';
import CategorySelector from './category-selector.jsx';

import './save.scss';
const _mm = new MUtil();
const _product = new Product();

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.pid,
            name: '',
            subtitle: '',
            categoryId: 0,
            parentCategoryId: 0,
            subImages: [],
            price: '',
            stock: '',
            detail: '',
            status: 1
        }
    }
    componentDidMount() {
        this.loadProduct();
    }
    loadProduct() {
        // 有id的时候表示是编辑功能, 表单回填
        if (this.state.id) {
            _product.getProduct(this.state.id).then((res) => {
                let images = res.subImages.split(',');
                res.subImages = images.map((imgUri) => {
                    return {
                        uri: imgUri,
                        url: res.imageHost + imgUri
                    }
                });
                this.setState(res);
            }, errMsg => {
                _mm.errorTips(errMsg);
            })
        }
    }

    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="Add Product" />
                <div className="form-horizontal">
                    <div className="form-group">
                        <label className="col-md-2 control-label">Product Name</label>
                        <div className="col-md-5">
                            <p className="form-control-static">{this.state.name}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">Product Description</label>
                        <div className="col-md-5">
                            <p className="form-control-static">{this.state.subtitle}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">Product Category</label>
                        <CategorySelector 
                            readOnly
                            categoryId={this.state.categoryId}
                            parentCategoryId={this.state.parentCategoryId}
                            />
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">Product Price</label>
                        <div className="col-md-3">
                            <div className="input-group">
                                  <input type="number" className="form-control" 
                                   value={this.state.price}
                                   readOnly
                                   />
                                  <span className="input-group-addon">$</span>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">Product Inventory</label>
                        <div className="col-md-3">
                            <div className="input-group">
                                  <input type="number" className="form-control" placeholder="Inventory"
                                   name="stock"
                                   value={this.state.stock}
                                   onChange={e => this.onValueChange(e)}
                                   readOnly
                                   />
                                  <span className="input-group-addon">Pieces</span>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">Product Picture</label>
                        <div className="col-md-10">
                            {
                                this.state.subImages.length ? this.state.subImages.map(
                                    (image, index) => 
                                        <div className="img-con" key={index}>
                                            <img src={image.url}/>
                                        </div>) 
                                    : (<div>No image on this product</div>)
                            }
                        </div>
                        <div className="col-md-offset-2 col-md-10 file-upload-con">
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">Product Detail</label>
                        <div className="col-md-10" dangerouslySetInnerHTML={{__html: this.state.detail}}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetail;
