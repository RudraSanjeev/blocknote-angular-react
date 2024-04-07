import * as React from "react";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import { AppComponent } from "../../app.component"; // Import AppComponent
import { Inject } from "@angular/core";
import { DataSharingService } from "../../service/sharedData.service";

export default function Component1({ data, sharedDataService }: any) {
  const editor = useCreateBlockNote({
    initialContent: data || null,
  });
  const [editorData, setEditorData] = React.useState("Empty data");
  // const appComponent = new AppComponent();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // editor
    //   .blocksToHTMLLossy(data)
    //   .then((res) => {
    //     sharedDataService.sendData(res);
    //   })
    //   .catch((err) => console.log(err));
    const allData = editor.document;
    sharedDataService.sendData(allData);
  };
  return (
    <div>
      <h1>Welcome to Block Note</h1>
      <BlockNoteView editor={editor} />

      <div className="editorDocuments">
        <button onClick={(e) => handleClick(e)}>show</button>
        <p>{editorData}</p>
      </div>
    </div>
  );
}

// export default Component1
