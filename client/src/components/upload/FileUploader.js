import React, { useState } from 'react';
import UseFileUpload from './FileUpload';
import {
    Container,
    Button,
    ProgressBar
} from 'react-bootstrap'



export default function FileUploader() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [error, setError] = useState(null);

    const selectFile = (event) => {
        const { files } = event.target;
        setSelectedFile(files[0]);
    };

    const progressUpdater = (event) => {
        setUploadProgress(Math.round((100 * event.loaded)) / event.total);
    };

    const upload = () => {
        console.log('file to upload ', selectedFile);
        if (selectedFile) {
            UseFileUpload('featImage', selectedFile, progressUpdater)
                .then((response) => {
                    console.log(response.data.message);
                    setSelectedFile(null);
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
                    />
                    <Button
                        variant="primary"
                        as= "span"
                    >
                        Choose a featured image:
            </Button>
                </label>

                {selectedFile ? <h3>{selectedFile.name}</h3> : <h3>Select a File</h3>}

            </Container>

            <Button
                variant="primary"
                disabled={!selectedFile}
                onClick={upload}
            >
                Upload
            </Button>

            <ProgressBar variant="primary" now={uploadProgress} />

            { error ? <div> Whoops! </div> : null}
        </>
    );
}