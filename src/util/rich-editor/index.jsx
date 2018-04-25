
import React from 'react';
import Simditor from 'simditor';
import 'simditor/styles/simditor.scss';
import './index.scss';

//通用分页组件
class RichEditor extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.loadEditor();
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.defaultDetail !== nextProps.defaultDetail) {
            this.simeditor.setValue(nextProps.defaultDetail);
        }
    }
    loadEditor() {
        let element = this.refs['textarea'];
        this.simeditor = new Simditor({
            textarea: $(element),
            defaultValue: this.props.placeholder || 'Please Input your description',
            upload: {
                url: '/manage/product/richtext_img_upload.do',
                defaultImage: '',
                fileKey: 'upload_file'
            }
        });
        this.bindEditorEvent();
    }
    bindEditorEvent() {
        this.simeditor.on('valuechanged', e => {
            this.props.onValueChange(this.simeditor.getValue());
        })

    }
    render() {
        return (
            <div className="rich-editor">
                <textarea ref="textarea"></textarea>
            </div>
        )
    }
}

export default RichEditor;