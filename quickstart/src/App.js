import * as React from 'react';
import { DocumentEditorComponent, WordExport, TextExport, SfdtExport, Selection, Editor } from '@syncfusion/ej2-react-documenteditor';
import Default from './component/Default';
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
import DownloadComp from './component/DownloadComp';

DocumentEditorComponent.Inject(SfdtExport, WordExport, TextExport, Selection, Editor);

export class App extends React.Component {
	save() {
		let proxy = this;
		proxy.documenteditorcontainercomponent.save('sample', 'Docx');
	}
	onImportClick() {
		document.getElementById('file_upload').click();
	}
	onFileChange(e) {
		if (e.target.files[0]) {
			let file = e.target.files[0];
			if (file.name.substr(file.name.lastIndexOf('.')) === '.sfdt') {
				let fileReader = new FileReader();
				fileReader.onload = (e) => {
					let contents = e.target.result;
					let proxy = this;
					proxy.documenteditor.open(contents);
				};
				fileReader.readAsText(file);
				this.documenteditor.documentName = file.name.substr(0, file.name.lastIndexOf('.'));
			}
		}
	}
	render() {
		return (
			<div>
				<DownloadComp />
				{/* <Default /> */}
				{/* <button onClick={this.save.bind(this)}>Save</button> 
				<DocumentEditorContainerComponent
					id="container"
					style={{ height: '100vh' }}
					serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
					enableToolbar={true}
					ref={(scope) => { this.documenteditor = scope; }}
					isReadOnly={false}
					enableSelection={true}
					enableWordExport={true}
					enableTextExport={true}
					enableEditor={true}
					enableSfdtExport={true}
				/> */}


				{/* <button onClick={this.save.bind(this)}>Save</button>
				<DocumentEditorComponent id="container"
					ref={(scope) => { this.documenteditor = scope; }}
					isReadOnly={false}
					enableSelection={true}
					enableWordExport={true}
					enableTextExport={true}
					enableEditor={true}
					enableSfdtExport={true}
				/> */}

			</div>);
	}
}
export default App;