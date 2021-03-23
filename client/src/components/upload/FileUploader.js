import React, { useState } from 'react';
import UseFileUpload from './MultiFileUpload';
import { Container, Button, ProgressBar } from 'react-bootstrap'
import { Redirect } from 'react-router';



export default function FileUploader(props) {

    const [imageFiles, setimageFiles] = useState([]);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const selectFile = (event) => {
        const { files } = event.target;
        setimageFiles(files);
    };

    const progressUpdater = (event) => {
        setUploadProgress(Math.round((100 * event.loaded)) / event.total);
    };

    const upload = () => {
        if (imageFiles) {
            UseFileUpload('images', imageFiles, progressUpdater, props.prodId)
                .then((response) => {
                    setimageFiles([]);
                    setSuccess(true);
                })
                .catch((err) => {
                    setError(err);
                    setUploadProgress(0);
                });
        }
    };

    if (success) {
        return <Redirect to="/" />
    } else {
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
                            as="span"
                            className="mb-3"
                        >
                            Choose up to 3 images:
                </Button>
                    </label>
                    {imageFiles[0] ? <p>{imageFiles[0].name} <br /></p> : <p>Select a File</p>}
                    {imageFiles[1] ? <p>{imageFiles[1].name} <br /></p> : <p>Select a File</p>}
                    {imageFiles[2] ? <p>{imageFiles[2].name}</p> : <p>Select a File</p>}

                </Container>

                <Button
                    variant="primary"
                    disabled={!imageFiles}
                    onClick={upload}
                    className="mb-3"
                >
                    Upload
                </Button>

                <ProgressBar variant="primary" now={uploadProgress} className="mb-3" />

                { error ? <div> Whoops! </div> : null}
            </>
        );
    }

}