import React, { useState } from 'react';
import UseFileUpload from './MultiFileUpload';
import {
    Container,
    Button,
    ProgressBar
} from 'react-bootstrap'



export default function FileUploader() {

    const [imageFiles, setimageFiles] = useState([]);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [error, setError] = useState(null);

    const selectFile = (event) => {
        const { files } = event.target;
        setimageFiles(files);
    };

    const progressUpdater = (event) => {
        setUploadProgress(Math.round((100 * event.loaded)) / event.total);
    };

    const upload = () => {
        console.log('files to upload ', imageFiles);
        if (imageFiles) {
            UseFileUpload('images', imageFiles, progressUpdater)
                .then((response) => {
                    console.log(response.data.message);
                    setimageFiles([]);
                })
                .catch((err) => {
                    setError(err);
                    setUploadProgress(0);
                });
        }
    };

    return (
        <>
            <Container>
                <label htmlFor="btn-upload">
                    <input
                        id="btn-upload"
                        name="btn-upload"
                        style={{ display: 'none' }}
                        type="file"
                        onChange={selectFile}
                        multiple
                    />
                    <Button
                        variant="primary"
                        as= "span"
                        className= "mb-3"
                        style={{fontSize: 18}}
                    >
                        Choose up to 3 images:
            </Button>
                </label>
                {imageFiles[0] ? <p>{imageFiles[0].name} <br/></p> : <p>Select a File</p>}
                {imageFiles[1] ? <p>{imageFiles[1].name} <br/></p> : <p>Select a File</p>}
                {imageFiles[2] ? <p>{imageFiles[2].name}</p> : <p>Select a File</p>}

            </Container>

            <Button
                variant="primary"
                disabled={!imageFiles}
                onClick={upload}
                className= "mb-3"
                style={{fontSize: 18}}
            >
                Upload
            </Button>

            <ProgressBar variant="primary" now={uploadProgress} className= "mb-3"/>

            { error ? <div> Whoops! </div> : null}
        </>
    );
}