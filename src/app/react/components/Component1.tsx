import * as React from "react";
// import "@blocknote/core/fonts/inter.css";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
// import "@blocknote/react/style.css";
// import "node_modules/@blocknote/react/dist/style.css";

export default function Component1({ data }: any) {
  const editor = useCreateBlockNote({
    initialContent: data,
  });
  const [editorData, setEditorData] = React.useState("Empty data");
  const handleDataChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // const data = editor.document;
    // const data: any = [
    //   {
    //     id: "10de53ef-27f5-4cc3-aec7-a008a124ca7c",
    //     type: "paragraph",
    //     props: {
    //       textColor: "default",
    //       backgroundColor: "default",
    //       textAlignment: "center",
    //     },
    //     content: [
    //       {
    //         type: "text",
    //         text: "lflsdajfskladjfsal sdklfjkl;sdjfsadj fldsajflk;asdjflksaj",
    //         styles: {},
    //       },
    //     ],
    //     children: [],
    //   },
    //   {
    //     id: "60af72f8-5c07-427e-9387-e4ef2ab93ea8",
    //     type: "paragraph",
    //     props: {
    //       textColor: "default",
    //       backgroundColor: "default",
    //       textAlignment: "left",
    //     },
    //     content: [
    //       {
    //         type: "text",
    //         text: "fksdhfsdhak ",
    //         styles: {},
    //       },
    //       {
    //         type: "text",
    //         text: "fdskhfksdafksjda",
    //         styles: {
    //           bold: true,
    //         },
    //       },
    //       {
    //         type: "text",
    //         text: " fsdfjklsdafksadkfh ",
    //         styles: {},
    //       },
    //     ],
    //     children: [],
    //   },
    //   {
    //     id: "5ccd5b0f-9d57-486c-83be-50dc8fcbcebe",
    //     type: "paragraph",
    //     props: {
    //       textColor: "default",
    //       backgroundColor: "default",
    //       textAlignment: "left",
    //     },
    //     content: [
    //       {
    //         type: "text",
    //         text: "fksdfkldsha ",
    //         styles: {},
    //       },
    //       {
    //         type: "text",
    //         text: "fjlskdafdsahf",
    //         styles: {
    //           textColor: "red",
    //         },
    //       },
    //     ],
    //     children: [],
    //   },
    //   {
    //     id: "79c7c5c2-343d-4b9a-869d-7e5879065988",
    //     type: "paragraph",
    //     props: {
    //       textColor: "default",
    //       backgroundColor: "default",
    //       textAlignment: "left",
    //     },
    //     content: [],
    //     children: [],
    //   },
    //   {
    //     id: "90b589e9-9789-44fc-bb74-29e056b4589f",
    //     type: "paragraph",
    //     props: {
    //       textColor: "default",
    //       backgroundColor: "default",
    //       textAlignment: "left",
    //     },
    //     content: [],
    //     children: [],
    //   },
    // ];
    // let mdData = ""
    editor
      .blocksToHTMLLossy(data)
      .then((res) => {
        console.log(res);

        editor.tryParseHTMLToBlocks(res).then((res) => console.log(res));
      })
      .catch((err) => console.log(err));

    // console.log(mdData);
    // const getCurrentBlock = editor.getSelection().blocks[0].id;

    // const textCursorPosition = editor.getTextCursorPosition().block.id;
    // console.log(textCursorPosition);
    // editor.insertBlocks(data, textCursorPosition, "after");
  };
  return (
    <div>
      <h1>Welcome to Block Note</h1>
      <BlockNoteView editor={editor} />

      <div className="editorDocuments">
        <button onClick={(e) => handleDataChange(e)}>show</button>
        <p>{editorData}</p>
      </div>
    </div>
  );
}

// export default Component1
