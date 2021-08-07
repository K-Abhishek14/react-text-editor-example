import { IconButton, TextareaAutosize, Tooltip } from '@material-ui/core'
import React, { useState , useEffect} from 'react'
import '../assets/css/CustomEditor.css';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import SearchIcon from '@material-ui/icons/Search';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

const CustomEditor = () => {
	const [file, setFile] = useState([]);
	const [fileName, setFileName] = useState('');
	const [textArea_Value, setTextArea_Value] = useState('');

	const handleChangeTextArea = (e) => {
		setTextArea_Value(e.target.value);
	}

	const handleAttach = (inputValue) => {
		document.getElementById("fileInput").click()
	}

	const handleFileInput = () => {
		if (window.File && window.FileReader && window.FileList && window.Blob) {
			var preview = document.getElementById('show-text');
			var file = document.querySelector('input[type=file]').files[0];
			var reader = new FileReader()
			var textFile = /.*/;
			if (file.type.match(textFile)) {
				reader.onload = function (event) {
					preview.innerHTML = event.target.result;
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
		setFile(file);
		setFileName(file.name)
	}

	const handleSave = () => {
		var text = file;
		var data = new Blob([text], { type: 'text/plain' });
		var url = window.URL.createObjectURL(data);
		document.getElementById('download_link').href = url;
		// var url = window.URL.createObjectURL(data);
		// window.URL.revokeObjectURL(url);
	}
		const handleBold = () => {
			 console.log("Bold Handle");
		}
		const handleItalic = () => {
			console.log("Italic handle function")
		}
	 
useEffect(() => {
 console.log("TextArea Value : ", textArea_Value);
})

	return (
		<div>
			<div className="icon-Container">
				<input type="file" style={{ display: 'none' }} id="fileInput" accept=".txt, .doc, .docx" onChange={handleFileInput} />
				<Tooltip title="Insert Doc"><IconButton aria-label="Insert" onClick={handleAttach}><AttachFileIcon> </AttachFileIcon></IconButton></Tooltip>
				<Tooltip title="Save"><IconButton onClick={handleSave} aria-label="Save"><a id="download_link" download={fileName} href="#/" ><SaveIcon /></a></IconButton></Tooltip>
				<Tooltip title="Undo"><IconButton aria-label="Undo"><UndoIcon /></IconButton></Tooltip>
				<Tooltip title="Redo"><IconButton aria-label="Redo"><RedoIcon /></IconButton></Tooltip>
				<Tooltip title="Search"><IconButton aria-label="Search"><SearchIcon /></IconButton></Tooltip>
				<Tooltip title="Insert Image"><IconButton aria-label="Insert Image"><InsertPhotoIcon /></IconButton></Tooltip>
				<Tooltip title="Bold"><IconButton aria-label="Bold" onClick={handleBold}><FormatBoldIcon /></IconButton></Tooltip>
				<Tooltip title="Italic"><IconButton aria-label="Italic" onClick={handleItalic}><FormatItalicIcon /></IconButton></Tooltip>
				<Tooltip title="UnderLine"><IconButton aria-label="UnderLine"><FormatUnderlinedIcon /></IconButton></Tooltip>
				<Tooltip title="Strikethrough"><IconButton aria-label="Strikethrough"><StrikethroughSIcon /></IconButton></Tooltip>
				<Tooltip title="Align Left"><IconButton aria-label="Align Left"><FormatAlignLeftIcon /></IconButton></Tooltip>
				<Tooltip title="Center"><IconButton aria-label="Center"><FormatAlignCenterIcon /></IconButton></Tooltip>
				<Tooltip title="Align Right"><IconButton aria-label="Align Right"><FormatAlignRightIcon /></IconButton></Tooltip>
				<Tooltip title="Justify"><IconButton aria-label="Justify"><FormatAlignJustifyIcon /></IconButton></Tooltip>
				<Tooltip title="Numbering"><IconButton aria-label="Numbering"><FormatListNumberedIcon /></IconButton></Tooltip>
				<Tooltip title="Bullets"><IconButton aria-label="Bullets"><FormatListBulletedIcon /></IconButton></Tooltip>
			</div>

			<TextareaAutosize aria-label="minimum height"
				id="show-text"
				rowsMin={30}
				className="text-Area"
				value={textArea_Value}
				onChange={handleChangeTextArea}
				placeholder="Custom Text Editor" />
		</div>
	)
}

export default CustomEditor
