import React from 'react';
import FileUpload from './FileUpload.jsx';
class FileUploader extends React.Component {
    render() {
        const options = {
            baseUrl: '/manage/product/upload.do',
            fileFieldName: 'upload_file',
            chooseAndUpload: true,
            uploadSuccess: (res) => {
                this.props.onSuccess(res.data);
            },
            dataType: 'json',
            uploadError: (err) => {
                this.props.onError(err.message || 'Uploading Picture Failure');
            }
        }
        return (
            <FileUpload options={options}>
                <button className="btn btn-xs btn-default" ref="chooseAndUpload">Please choose image</button>
            </FileUpload>
        )
    }
}
export default FileUploader;