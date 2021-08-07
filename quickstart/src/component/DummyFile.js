import React, { useState, useRef, useEffect } from 'react';

const DummyFile = () => {
const fileInput  = useRef(null);

useEffect(() => {
	fileInput .current.focus();
})

// const  onLoad = function (e){
// 	var file = fileInput.files[0];
// 		 var textType = /text.*/;
// 		 if (file.type.match(textType)) {
// 				 var reader = new FileReader();
 
// 				 reader.onload = function(e) {
// 						 var content = reader.result;
// 					 						 alert(content);
// 				 }
// 				 reader.readAsText(file);    
// 		 } 
//  }

//  const showFile = async (e) => {
// 	e.preventDefault()
// 	const reader = new FileReader()
// 	reader.onload = async (e) => { 
// 		const text = (e.target.result)
// 		console.log(text)
// 		alert(text)
// 	};
// 	reader.readAsText(e.target.files[0])
// }

// const  onChange = (event)  => {
//   var file = event.target.files[0];
//   var reader = new FileReader();
//   reader.onload = function(event) {
//     // O arquivo de texto será impresso aqui
//     console.log(event.target.result)
//   };

//   reader.readAsText(file);
// }
	const handleSubmit = (e) => {
		e.preventDefault();
		alert(`Selected file - ${fileInput.current.files[0].name}`);
		console.log("Selected file Name", fileInput.current.files[0].name)
		console.log("Selected file", fileInput.current.files[0])
	}
	return (
		<form onSubmit={handleSubmit}>
			<label>Upload Files: 
			
				<input type="file" ref={fileInput} 
				// onChange={(e) => onLoad(e)}
				// onChange={(e) => showFile(e)}
			 
				/>
			</label>
			<br/>
			<button type="submit">Submit</button>
		</form>
	)
}
export default DummyFile;