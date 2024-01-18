import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';
import DialogModal from "./DialogModal";


const apiId = 'rcvhit2019'
const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/prod`

function About() {
    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        title: "",
        message: "",
    });

    const [showDialog, setShowDialog] = useState(false);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContactInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle sending the contactInfo data (you can add your logic here)
       
        const newItem = {
            contactId: uuidv4(),
            contactName: contactInfo.name,
            contactEmail: contactInfo.email,
            contactSubject: contactInfo.title,
            contactMessage: contactInfo.message
        };
         // Show the dialog
         setShowDialog(true);
         console.log('showDialog after setting to true:', showDialog)
        async function createItem(newItem) {
            const response = await Axios.post(`${apiEndpoint}/contacts`, JSON.stringify(newItem), {
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              }
            });
          }
          createItem(newItem)
            .then(result => {
              console.log('Result:', result);
            })
            .catch(error => {
              console.error('Error:', error);
            });

        // Clear the form fields
        setContactInfo({
            name: "",
            email: "",
            title: "",
            message: "",
        });
    };
    const handleCloseDialog = () => {
        // Close the dialog
        setShowDialog(false);
      };
    return (
        <Container fluid className="about-section">

            <Container>

                {/* Contact Form */}
                <h1 className="project-heading">
                    Contact <strong className="purple">Me</strong>
                </h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                            value={contactInfo.name}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={contactInfo.email}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter the title"
                            name="title"
                            value={contactInfo.title}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder="Type your message here"
                            name="message"
                            value={contactInfo.message}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Send
                    </Button>
                </Form>
                {showDialog && <DialogModal onClose={handleCloseDialog} />}
            </Container>
        </Container>
    );
}

export default About;
