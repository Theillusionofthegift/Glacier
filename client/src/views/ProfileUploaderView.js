import React from 'react'
import { Container } from 'react-bootstrap';
import ProfileUploader from '../components/upload/ProfileUploader'
import { useParams } from 'react-router-dom'

export default function ProfileUploaderView() {
    const { id } = useParams();
    
    return (
        <Container style={{ margin: "auto", marginTop: "5em", width: "60%" }}>
            <h1 style={{ textAlign: "center" }}>Upload a profile image</h1>
            <ProfileUploader userId={id} />
        </Container>
    );
}