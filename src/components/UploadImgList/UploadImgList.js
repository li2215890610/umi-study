import React from 'react';

import { Upload, Icon, Modal, Form, message } from 'antd';

export default class PicturesWall extends React.Component {
	state = {
		previewVisible: false,
		previewImage: '',
	};

	handleCancel = () => this.setState({ previewVisible: false })

	handlePreview = (file) => {
		this.setState({
			previewImage: file.url || file.thumbUrl,
			previewVisible: true,
		});
	}

	handleChange = ({ fileList, file }) => {
		const response = file.response;

		function removeFromFileList() {
			const index = fileList.indexOf(file);
			fileList.splice(index, 1);
		}

		if (response) {

			// console.log('resonpon:', response);

			if (response.errno !== 0) {
				message.error(response.errmsg);
				removeFromFileList();
				return fileList;
			} else {
				const f = fileList.find(f => f.uid === file.uid);
				if (f) {
					const idx = fileList.indexOf(f);
					fileList[idx] = this.normalizeFile(f, response.data);
				}
				return fileList;
			}
		} else {
			return fileList;
		}
	}

	normalizeFile(file, url) {
		return {
			uid: file.uid,
			name: file.name,
			status: 'done',
			url
		}
	}

	normalize = (urls) => {
		if (!urls) {
			return [];
		}

		let uid = 1;

		function getFileName(url) {
			const splited = url.split('/');
			return splited[splited.length - 1];
		}

		return urls.split(',').map((url) => {

			return {
				uid: uid++,
				name: getFileName(url),
				status: 'done',
				url
			}
		})
	}

	onRemove = (data, cb) => {
		// console.log(data,cb)
		return !this.props.disabled
	}

	renderUpload() {

		const uploadUrl = 'https://server.fctconcierge.com/pc/hotel/uploadHotelImg';
		// !this.props.disabled &&
		const uploadButton = (
			<div>
				<Icon style={{ fontSize: 18 }} type="plus" />
				<div style={{ fontSize: 13, marginTop: 15, color: '#999' }}>选择图片</div>
			</div>
		);

		const images = this.props.form.getFieldValue('imgList');

		return <Upload
			disabled={this.props.disabled}
			multiple={true}
			action={uploadUrl}
			listType="picture-card"
			onPreview={this.handlePreview}
			onRemove={this.onRemove}
			headers={{
				'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImFjY291bnRUeXBlIjoicGMiLCJpYXQiOjE1NDY1MDA3ODEsImV4cCI6MTU1NTE0MDc4MX0.sMjKjAWLUktUjwjsaLiMZFhINZ9zNRMVrHf36yCK5v0'
			}}
			name="file"
		>
			{images && images.length >= 3 ? null : uploadButton}
		</Upload>
	}

	/**
	 * props 词语解释
	 * @param {imgRequired} FromItem 是不是必传数据 
	 * @param {labelkey} FromItem 传入后台数据key  labelkey="images"
	 * @param {labelFont} FromItem 信息文本 labelFont="门店照片" 
	 */
	renderFormItem(children) {

		const { previewVisible, previewImage } = this.state;
		const { labelFont, labelkey, imgRequired } = this.props;

		const decorator = this.props.form.getFieldDecorator(labelkey, {
			initialValue: this.normalize(this.props.initialValue),
			valuePropName: 'fileList',
			getValueFromEvent: this.handleChange,
			rules: [{
				required: imgRequired,
				message: `请上传${labelFont}`
			}]
		});

		return <Form.Item label={labelFont}>
			{decorator(children)}
			<Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
				<img alt="example" style={{ width: '100%' }} src={previewImage} />
			</Modal>
		</Form.Item>
	}

	render() {
		// console.log(this.props.disabled);
		return (
			this.renderFormItem(
				this.renderUpload()
			)
		);
	}
}