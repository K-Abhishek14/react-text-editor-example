import React, { useState,useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function QuillEditor() {
	const [text, setText] = useState('')
	const handleChange = (value) => {
		setText(value)
	}
	useEffect(() => {
		console.log("REact-Quill Editor",text);
		 
	}, [text])
	return (
		<ReactQuill value={text} onChange={handleChange} />
	)
}