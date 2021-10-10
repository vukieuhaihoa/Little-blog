import React, { useState } from 'react';
import styles from './index.module.scss';
import dynamic from 'next/dynamic';

import { EditorState } from 'draft-js';
// const Editor = dynamic(
//   () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
//   { ssr: false }
// );
import { EditorProps } from 'react-draft-wysiwyg';

const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'isomorphic-dompurify';
// MUI imp
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const WriteComponent = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [convertedContent, setConvertedContent] = useState<string>('');

  const handleEditorChange = (state: any) => {
    setEditorState(state);
    convertContentToHTML();
  };

  const convertContentToHTML = () => {
    const currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  const createMarkup = (html: any) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  return (
    <div className={styles['write-post-container']}>
      <div className={styles['upload-img']}>
        <img src="/static/images/post/main.jpeg" alt="post image" />
      </div>

      <form className={styles['post-form']}>
        <div className={styles['post-form-group']}>
          <label htmlFor="fileInput">
            <AddIcon />
          </label>
          <input id="fileInput" type="file" style={{ display: 'none' }} />
          <input
            className={styles['write-input']}
            placeholder="Title...."
            type="text"
            autoFocus={true}
          />
        </div>
        <div className={styles['post-form-group']}>
          {/* <textarea
            className={clsx(styles['write-input'], styles['write-text'])}
            placeholder="Tell your story..."
            autoFocus={true}
          /> */}
          <div className={styles['editor-and-preview']}>
          <Editor
            editorState={editorState}
            onEditorStateChange={handleEditorChange}
            wrapperClassName={styles['editor-wrapper']}
            editorClassName={styles['editor']}
            placeholder="The message goes here..."
          />
          <div
            className={styles['preview']}
            dangerouslySetInnerHTML={createMarkup(convertedContent)}
          ></div>
          </div>
          
        </div>
        <div className={styles['post-form-group']}>
          <Button
            className={styles['btn-submit']}
            variant="contained"
            color="primary"
          >
            Publish
          </Button>
        </div>
      </form>
    </div>
  );
};

export default WriteComponent;
