import Tiptap from "../Tiptap";

const NewPost = () => {
  const handleEditorContentSave = (html) => {
    console.log(html);
  }

  return (
    <Tiptap onEditorContentSave={handleEditorContentSave} />
  );
}

export default NewPost;