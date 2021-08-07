import React, { useEffect } from 'react'

function DownloadComp() {

	useEffect(() => {
		// dynamic();
		var text = 'Some data I want to export, HI Shoiab';
		var data = new Blob([text], { type: 'text/plain' });
		var url = window.URL.createObjectURL(data);
		document.getElementById('download_link').href = url;
		var url = window.URL.createObjectURL(data);
		window.URL.revokeObjectURL(url);
	})

	const dynamic = () => {
		var fileName = 'myfile.txt';
		var fileContent = 'Page content...';
		var myFile = new Blob([fileContent], { type: 'text/plain' });
		window.URL = window.URL || window.webkitURL;
		document.getElementById('download').setAttribute('href', window.URL.createObjectURL(myFile));
		document.getElementById('download').setAttribute('download', fileName);
	}

	return (
		<div>
			<a id="download_link" download="my_exported_file.txt" href="" >Download as Text File</a>
			{/* <a href="" id="download">Download</a> */}
			{/* <a href="data:text/plain;charset=UTF-8,Hello%20World!" download="hello.txt">Download</a> */}
		</div>
	)
}

export default DownloadComp
