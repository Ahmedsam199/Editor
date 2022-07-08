import React, { useRef,useState } from 'react';
 import { Editor } from '@tinymce/tinymce-react';

 export default function App() {
   const editorRef = useRef(null);
const [data, setdata] = useState('')
   const log = () => {
   
    console.log(editorRef.current.getContent());
     
   };
   return (
     <>
      <Editor
        onInit={(evt, editor) => editorRef.current = editor}
                 apiKey=""                  
                  initialValue="<p>This is the initial content of the editor</p>"
                  plugins="advlist mentions autolink lists link image charmap print preview anchor export pagebreak code emoticons image table paste lists advlist checklist link hr charmap directionality
                          searchreplace visualblocks code fullscreen 
                          insertdatetime media table paste code imagetools help wordcount"
                  init={{
                    height: 500,
                    toolbar:
                      '|undo redo | h1 h2 h3 h4 h5 h6  |  bold italic backcolor | \
                      alignleft aligncenter alignright alignjustify | \
                      bullist numlist outdent indent | removeformat | image |imagetools \ export  | ',
                   
                      /* and here's our custom image picker*/
                      image_title: true,
                      automatic_uploads: true,
             
                    }}
                 
               
               />
       <button onClick={log}>Log editor content</button>
     </>
   );
                }
//  
//  file_picker_types: 'image',
//  image_title: true,
//  /* enable automatic uploads of images represented by blob or data URIs*/
//  automatic_uploads: true,
//  /*
//    URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
//    images_upload_url: 'postAcceptor.php',
//    here we add custom filepicker only to Image dialog
//  */
//  file_picker_types: 'image',
//  /* and here's our custom image picker*/
//  file_picker_callback: (cb, value, meta) => {
//    const input = document.createElement('input');
//    input.setAttribute('type', 'file');
//    input.setAttribute('accept', 'image/*');

//    input.addEventListener('change', (e) => {
//      const file = e.target.files[0];
// console.log(file);
//      const reader = new FileReader();
//      reader.addEventListener('load', () => {
//        /*
//          Note: Now we need to register the blob in TinyMCEs image blob
//          registry. In the next release this part hopefully won't be
//          necessary, as we are looking to handle it internally.
//        */
      
//        const id = 'blobid' + (new Date()).getTime();
//        const blobCache =  file;
//        const base64 = reader.result.split(',')[1];
//        const blobInfo = blobCache.create(id, file, base64);
//        blobCache.add(blobInfo);

//        /* call the callback and populate the Title field with the file name */
//        cb(blobInfo.blobUri(), { title: file.name });
//      });
//      reader.readAsDataURL(file);
//    });

//    input.click();
//  },