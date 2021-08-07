import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class EditorConvertToHTML extends Component {
  constructor(props) {
    super(props);
    const html = "";
    this.state = {
      text: "",
    };

    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
      };
    }
  }

  onEditorStateChange = (editorState) => {
    const res = convertToRaw(editorState.getCurrentContent());
    const p = res.blocks[0].text;
    const { placeholder } = this.props;
    if (placeholder === "Contract agreement") {
      localStorage.setItem("agreement", p);
    } else {
      localStorage.setItem("Description", p);
    }
    this.setState({
      editorState,
      text: p,
    });
    // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  render() {
    const { editorState } = this.state;
    const { placeholder } = this.props;

    return (
      <div style={{ height: "250px", background: "#E9E9E9", padding: 2 }}>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default EditorConvertToHTML;
