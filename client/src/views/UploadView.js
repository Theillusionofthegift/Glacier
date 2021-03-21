import React from 'react'
import { Container } from 'react-bootstrap';
import FileUploader from '../components/upload/FileUploader'
import {useParams} from 'react-router-dom'

export default function UploadView() {
    const {id} = useParams();
    return(
        <Container style={{margin: "auto", marginTop: "5em", width:"60%"}} fluid>
            <h1 style={{textAlign:"center"}}>Upload Images</h1>
            <FileUploader prodId={id}/>
        </Container>
    );
}