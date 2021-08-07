import React from "react";
import ReactDOM from "react-dom";
import MUIRichTextEditor from "mui-rte";

const save = (data) => {
  console.log(data);
};

ReactDOM.render(
  <MUIRichTextEditor
    label="Type something here..."
    onSave={save}
    inlineToolbar={true}
  />,
 
  document.getElementById("root")
);
