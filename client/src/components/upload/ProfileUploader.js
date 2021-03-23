import React, { useState } from 'react';
import UseFileUpload from './FileUpload';
import { Container, Button, ProgressBar } from 'react-bootstrap'
import { Redirect } from 'react-router';



export default function ProfileFileUploader(props) {

    const [imageFile, setimageFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const selectFile = (event) => {
        const { files } = event.target;
        setimageFile(files);
    };

    const progressUpdater = (event) => {
        setUploadProgress(Math.round((100 * event.loaded)) / event.total);
    };

    const upload = () => {
        console.log('files to upload ', imageFile);
        if (imageFile) {
            UseFileUpload('profile', imageFile.item(0), progressUpdater, props.userId)
                .then((response) => {
                    setimageFile([]);
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
                            Choose an image:
            </Button>
                    </label>
                    {imageFile ? <p>{imageFile.name} <br /></p> : <p>Select a File</p>}

                </Container>

                <Button
                    variant="primary"
                    disabled={!imageFile}
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