import React from 'react';
import { Loader, Editor, Representation ,Viewer} from "we-edit"
import iDocx from "we-edit/input-docx"
import lsBrowser from "we-edit/loader-stream-browser"
import  "we-edit/representation-pagination"
import  "we-edit/representation-html"
import ReactDOM from "react-dom"

iDocx.install()
lsBrowser.install()

function WeEditEditor() {
	return (
		<div>
			<Loader type="browser">
				<div style={{ position: "absolute", left: 0, width: 500 }}>
					<Editor representation="pagination" />
				</div>

				<div style={{ position: "absolute", right: 0, width: 500 }}>
					<Viewer representation="html" />
				</div>
			</Loader>
		</div>
	)
}
export default WeEditEditor
