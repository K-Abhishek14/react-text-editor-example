import { render } from 'react-dom';
import './default.css';
import * as React from 'react';
import { SampleBase } from './SampleBase';
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
import { TitleBar } from './TitleBar';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

DocumentEditorContainerComponent.Inject(Toolbar);
// tslint:disable:max-line-length
class Default extends SampleBase {
	constructor() {
		super(...arguments);
		this.hostUrl = 'https://ej2services.syncfusion.com/production/web-services/';
		// console.log("object",this.contentChanged)
	}
	rendereComplete() {
		this.container.serviceUrl = this.hostUrl + 'api/documenteditor/';
		this.container.documentEditor.pageOutline = '#E0E0E0';
		this.container.documentEditor.acceptTab = true;
		this.container.documentEditor.resize();
		this.titleBar = new TitleBar(document.getElementById('documenteditor_titlebar'), this.container.documentEditor, true);
	}

	notify = () => {
		toast('Default!', { position: toast.POSITION.TOP_LEFT })
		toast.success('Modification Success!', {
			position: toast.POSITION.TOP_CENTER,
			autoClose: 8000
		})
		toast.info('Info!', {
			position: toast.POSITION.TOP_RIGHT,
			autoClose: false
		})

		toast.error('Error!', { position: toast.POSITION.BOTTOM_CENTER })
		// toast('Wow so easy !', { position: toast.POSITION.BOTTOM_RIGHT })
	}
	handleEditor = (e) => {
		this.notify();
		console.log("Editor Object : ");
	}

	// 	rendereComplete() {
	// 		this.container.serviceUrl = this.hostUrl + 'api/documenteditor/';
	// 		this.container.documentEditor.pageOutline = '#E0E0E0';
	// 		this.container.documentEditor.acceptTab = true;
	// 		this.container.documentEditor.resize();
	// 		this.titleBar = new TitleBar(document.getElementById('documenteditor_titlebar'), this.container.documentEditor, true);
	// 		this.container.contentChange = () => {this.contentChanged = true;};
	// 		if(this.contentChanged){
	// 			this.container.documentEditor.saveAsBlob('Docx').then((blob) =>{
	// 				if (window.File && window.FileReader && window.FileList && window.Blob) {

	// 				}				
	// 			} )
	// 		}

	// 		this.onLoadDefault();
	// 		setInterval(() => {
	// 				if (this.contentChanged) {
	// 						this.container.documentEditor.saveAsBlob('Docx').then((blob) => {
	// 								let exportedDocumment = blob;
	// 								let span = document.createElement('span');
	// 								let date = new Date();
	// 								let time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
	// 								span.innerHTML = 'Auto saved at <b>' + time + '</b><hr>';
	// 								let log = document.getElementById('AutosaveLog');
	// 								log.insertBefore(span, log.firstChild);
	// 						});
	// 						this.contentChanged = false;
	// 				}
	// 		}, 15000);
	// 		this.container.contentChange = () => {
	// 				this.contentChanged = true;
	// 		};
	// }
	// clearLog() {
	// 		document.getElementById('AutosaveLog').innerHTML = '';
	// }
	render() {
		return (
			<div className='control-pane'>
				<div className='control-section'>
					<div id='documenteditor_titlebar' className="e-de-ctn-title"></div>
					<div id="documenteditor_container_body">
						<DocumentEditorContainerComponent id="container"
							ref={(scope) => { this.container = scope; }}
							style={{ 'display': 'block' }}
							height={'590px'}
							enableToolbar={true}
							locale='en-US'
							showPropertiesPane={false}
							enableTrackChanges={true}
							userColor={'#b70f34'}
							currentUser={'ABHISHEK'}
							layoutType={"Pages"}
							enableWordExport= {true}
							enableTextExport= {true}
						/>
					</div>
					{/* <div id="documenteditor_container_body">
					<DocumentEditorContainerComponent id="container"
						ref={(scope) => { this.container = scope; }}
						style={{ 'display': 'block' }} height={'590px'}
						enableToolbar={true} locale='en-US'
						onClick={(e) => this.handleEditor(e)} />
				</div> */}
				</div>
				<script>{window.onbeforeunload = function () {
					return 'Want to save your changes?';
				}}
				</script>
			</div>
		);
	}
}

export default Default;