import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import MUtil from 'util/mm.jsx';
import Product from 'service/product-service.jsx';
import CategorySelector from './category-selector.jsx';

import FileUploader from 'util/file-uploader/index.jsx';
import RichEditor from 'util/rich-editor/index.jsx';
import './save.scss';
const _mm = new MUtil();
const _product = new Product();

class ProductSave extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
    onValueChange(e) {
        let name = e.target.name;
        let value = e.target.value.trim();
        this.setState({
            [name]: value
        })

    }
    onCategoryChange(categoryId, parentCategoryId) {
        this.setState({
            categoryId: categoryId,
            parentCategoryId: parentCategoryId
        });
    }
    onUploadSuccess(res) {
        let subImages = this.state.subImages;
        subImages.push(res);
        this.setState({
            subImages: subImages
        });
    }
    onUploadError(error) {
        _mm.errorTips(error.message || 'Uploading image failure');
    }
    onImageDelete(e) {
        let index = parseInt(e.target.getAttribute('index')),
            subImages = this.state.subImages;
        subImages.splice(index, 1);
        this.setState({
            subImages: subImages
        })
    }
    onDetailValueChange(value) {
        console.log(value)
        this.setState({
            detail: value
        });
    }
    getSubImagesString() {
        return this.state.subImages.map(image => image.url).join(',');
    }

    onSubmit() {
        let product = {
            name: this.state.name,
            subtitle: this.state.subtitle,
            categoryId: parseInt(this.state.categoryId),
            subImages: this.getSubImagesString(),
            detail: this.state.detail,
            price: parseFloat(this.state.price),
            stock: parseFloat(this.state.stock),
            status: this.state.status
        }
        let productCheckResult = _product.checkProduct(product);
        if (productCheckResult.status) {
            _product.saveProduct(product).then((res)=>{
                _mm.successTips(res);
                this.props.history.push('/product/index');
            }, (errMsg) => {
                _mm.errorTips(errMsg);
            });
        } else {
            _mm.errorTips(productCheckResult.msg);
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
                            <input type="text" className="form-control" 
                                   placeholder="Please input product name" 
                                   name="name"
                                   onChange={e => this.onValueChange(e)}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">Product Description</label>
                        <div className="col-md-5">
                            <input type="text" className="form-control" 
                                   placeholder="Please input description of this product" 
                                   name="subtitle"
                                   onChange={e => this.onValueChange(e)}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">Product Category</label>
                        <CategorySelector onCategoryChange={(categoryId, parentCategoryId)=>{
                            this.onCategoryChange(categoryId, parentCategoryId);
                        }}/>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">Product Price</label>
                        <div className="col-md-3">
                            <div className="input-group">
                                  <input type="number" className="form-control" placeholder="Price"
                                   name="price"
                                   onChange={e => this.onValueChange(e)}/>
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
                                   onChange={e => this.onValueChange(e)}/>
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
                                            <i className="fa fa-close" index={index} 
                                                onClick={(e)=> this.onImageDelete(e)}></i>
                                        </div>) 
                                    : (<div>Please Upload Image</div>)
                            }
                        </div>
                        <div className="col-md-offset-2 col-md-10 file-upload-con">
                            <FileUploader onSuccess={(res) => {this.onUploadSuccess(res)}}
                                            onError={(errMsg) => {this.onUploadError(errMsg)}}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">Product Detail</label>
                        <div className="col-md-10">
                                <RichEditor onValueChange={(value) => this.onDetailValueChange(value)}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-offset-2 col-md-10">
                            <button type="submit" className="btn btn-primary" 
                                onClick={(e)=>{this.onSubmit(e)}}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductSave;
