import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './EditorComponent.css';

export class EditorComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { editorHtml: '' }; // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.setState({ editorHtml: value })
    }

    modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ]
    };

    render() {
        return (
            <div className="text-editor">
                <ReactQuill theme="snow"
                    value={this.state.editorHtml}
                    onChange={this.handleChange}
                    modules={this.modules}
                />
            </div>
        );
    }
}

export default EditorComponent;
