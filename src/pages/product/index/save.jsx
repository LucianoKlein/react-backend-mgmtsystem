import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import MUtil from 'util/mm.jsx';
import Product from 'service/product-service.jsx';
import CategorySelector from './category-selector.jsx';

import FileUploader from 'util/file-uploader/index.jsx';
import './save.scss';
const _mm = new MUtil();
const _product = new Product();

class ProductSave extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryId: 0,
            parentCategoryId: 0,
            subImages: []
        }
    }
    onCategoryChange(categoryId, parentCategoryId) {
        console.log('categoryId', categoryId);
        console.log('parentCategoryId', parentCategoryId);
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

    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="Add Product" />
                <div className="form-horizontal">
                    <div className="form-group">
                        <label className="col-md-2 control-label">Product Name</label>
                        <div className="col-md-5">
                            <input type="text" className="form-control" placeholder="Please input product name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">Product Description</label>
                        <div className="col-md-5">
                            <input type="text" className="form-control" placeholder="Please input description of this product" />
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
                                  <input type="number" className="form-control" placeholder="Price"/>
                                  <span className="input-group-addon">$</span>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">Product Inventory</label>
                        <div className="col-md-3">
                            <div className="input-group">
                                  <input type="number" className="form-control" placeholder="Inventory"/>
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
                        <div className="col-md-3">
                            <div className="input-group">
                                datail
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-offset-2 col-md-10">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductSave;
