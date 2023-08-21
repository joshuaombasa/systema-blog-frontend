import React, {useState} from "react";

import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'

export default function Write() {

    const [editorHtml, setEditorHtml] = useState('')
    const [title, setTitle] = useState('')

    function handleChange (html) {
        setEditorHtml(html);
      }

    function handleTitle(event) {
        
        setTitle(event.target.value)
    }

    function handleSubmit() {
        console.log(editorHtml)
    }

    const fontSizes = ['small', 'normal', 'large', 'huge'];

    const modules = {
      toolbar: {
        container: [
          [{ 'font': [] }],
          [{ 'size': fontSizes }], // Custom font sizes
          // Add other default toolbar options here
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'header': [1, 2, 3, false] }],
          ['link', 'image', 'video'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'align': [] }],
          ['clean'],
        ],
      },
    };
    

    return (
        <div className="write--container">
            <div className="content">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" />
                <label htmlFor="description">Description:</label>
                <ReactQuill
                    theme="snow" // You can choose different themes
                    value={editorHtml}
                    id="description"
                    style={{ fontSize: '20px' }} // Adjust the font size as needed
                    className="editor"
                    modules={modules}
                    onChange={handleChange}
                />
            </div>
            <div className="editor--control">
                <button className="submit--btn" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}