import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Editor, EditorTools } from '@progress/kendo-react-editor';
import content from './content';

const {
	Bold, Italic, Underline, Strikethrough, Subscript, Superscript,
	AlignLeft, AlignCenter, AlignRight, AlignJustify,
	Indent, Outdent, OrderedList, UnorderedList,
	Undo, Redo, FontSize, FontName, FormatBlock,
	Link, Unlink, InsertImage, ViewHtml,
	InsertTable,
	AddRowBefore, AddRowAfter, AddColumnBefore, AddColumnAfter,
	DeleteRow, DeleteColumn, DeleteTable,
	MergeCells, SplitCell
} = EditorTools;

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			name: 'React',
			editor_Value : '',
		};
	}
	showFile = () => {
		if (window.File && window.FileReader && window.FileList && window.Blob) {
			var preview = document.getElementById('show-text');
			var file = document.querySelector('input[type=file]').files[0];
			var reader = new FileReader()
			var textFile = /.*/;
			
			if (file.type.match(textFile)) {
				reader.onload = function (event) {
					// preview.innerHTML = event.target.result;
					this.state.editor_Value = event.target.result;
					console.log("All Text Content : ", event.target.result);
				}
			}
			else {
				preview.innerHTML = "<span class='error'>It doesn't seem to be a text file!</span>";
			}
			reader.readAsText(file);
		} else {
			alert("Your browser is too old to support HTML5 File API");
		}
		console.log("Selected file Details: ", file)
		console.log("Selected file name : ", file.name)
	}

	render() {
		const {editor_Value} = this.state;
		return (
			<>
				{/* <input type="file" onChange={this.showFile} /> */}
				<Editor id="show-text"  
					tools={[
						[Bold, Italic, Underline, Strikethrough],
						[Subscript, Superscript],
						[AlignLeft, AlignCenter, AlignRight, AlignJustify],
						[Indent, Outdent],
						[OrderedList, UnorderedList],
						FontSize, FontName, FormatBlock,
						[Undo, Redo],
						[Link, Unlink, InsertImage, ViewHtml],
						[InsertTable],
						[AddRowBefore, AddRowAfter, AddColumnBefore, AddColumnAfter],
						[DeleteRow, DeleteColumn, DeleteTable],
						[MergeCells, SplitCell]
					]}
					contentStyle={{ height: 630 }}

				// defaultContent={content}
				/>
			</>
		);
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('my-app')
);

