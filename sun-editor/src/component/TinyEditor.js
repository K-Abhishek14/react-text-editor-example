import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';

class TinyEditor extends Component {
	state = { content: '', };
	handleEditorChange = (e) => {
		console.log('Content was updated:', e.target.getContent());
		this.setState({ content: e.target.getContent() });
	}
	componentDidMount() {
		console.log("Conetnt", this.state.content);
	}

	render() {
		const content = <p>This is the initial content of the editor</p>;
		return (
			<div>
				<form>
					<Editor
						initialValue={content}
						init={{
							plugins: 'link image code',
							toolbar: 'undo redo | bold italic| alignleft aligncenter alignright | code'
						}}
						onChange={this.handleEditorChange} />

					<div className="col-md-3">
						<button className="btn btn-block btn-primary btn-lg" type="submit">Save Event</button>
					</div>
				</form>
			</div>
		)
	}
}

export default TinyEditor;