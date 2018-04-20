import MUtil from 'util/mm.jsx';
const _mm = new MUtil();
class Product {

    getProductList(listParam) {
        let url = '',
            data = {};
        if (listParam.listType === 'list') {
            url = '/manage/product/list.do';
            data.pageNum = listParam.pageNum;
        } else if (listParam.listType === 'search') {
            url = '/manage/product/search.do';
            data.pageNum =  listParam.pageNum;
            data[listParam.searchType] = listParam.keyword;
        }
        return _mm.request({
            type: 'post',
            url: url,
            data: data
        })
    }
    setProductStatus(productInfo) {
        return _mm.request({
            type: 'post',
            url: '/manage/product/set_sale_status.do',
            data: productInfo
        })
    }
    // -------------------------------------
    getCategoryList(parentCategoryId) {
        return _mm.request({
            type: 'post',
            url: '/manage/category/get_category.do',
            data: {
                categoryId: parentCategoryId || 0
            }
        });
    }
    checkProduct(product) {
        let result = {
            status: true,
            msg: 'Verify success'
        }
        if (typeof product.name !== 'string' || product.name.length === 0) {
            return {
                status: false,
                msg: 'Product name cannot be empty!'
            }
        }
        if (typeof product.subtitle !== 'string' || product.subtitle.length === 0) {
            return {
                status: false,
                msg: 'Product subtitle cannot be empty!'
            }
        }
        if (typeof product.categoryId !== 'number' || !(product.categoryId > 0)) {
            return {
                status: false,
                msg: 'category id cannot be empty!'
            }
        }
        if (typeof product.price !== 'number' || !(product.price >= 0)) {
            return {
                status: false,
                msg: 'Product price is invalid!'
            }
        }

        if (typeof product.stock !== 'number' || !(product.stock >= 0)) {
            return {
                status: false,
                msg: 'Product stock cannot be empty!'
            }
        }
        return result;

    }
    saveProduct(product) {
        return _mm.request({
            type: 'post',
            url: '/manage/product/save.do',
            data: product
        })
    }
}

export default Product;