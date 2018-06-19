import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './QuillComponent.css';

export class QuillComponent extends Component {

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
                    value={this.props.html}
                    onChange={value => this.props.onChange(value)}
                    modules={this.modules}
                />
            </div>
        );
    }
}

export default QuillComponent;
