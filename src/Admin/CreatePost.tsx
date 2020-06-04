import React,  { MouseEvent, useCallback, useState, useRef } from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import debounce from 'debounce';

import { IPost } from '../Posts/Post';

const CreatePost: React.FC = () => {
    // Function using fetch to POST to our API endpoint
    const [message, setMessage] = useState("");
    const [issubmitDisabled, setIsSubmitDisabled] = useState(false);
    const delayedQuery = useRef(debounce(q => setMessage(q), 300)).current;
    const inputEl = useRef<HTMLTextAreaElement>(null);

    const handleChange = useCallback((event) => {
        delayedQuery(event.currentTarget.value);
    }, [delayedQuery]);

    const onCreatePostClick = useCallback((e: MouseEvent) => {
        e.preventDefault();
        const createPost = async (data) => {
            try {
                const postsResponse = await fetch('/.netlify/functions/post', {
                    body: JSON.stringify(data),
                    method: 'POST'
                });
                await postsResponse.json();
                
                if (inputEl?.current) {
                    inputEl.current.value = "";
                }
            } catch (err) {
                console.log(err);
            }
            setIsSubmitDisabled(false);
        }

        // Post data
        const myPost: IPost = {
            message,
            user: "Brandon In",
        }
        
        // create it!
        setIsSubmitDisabled(true);
        createPost(myPost);
    }, [message, setIsSubmitDisabled]);

    return (
        <Card bg="dark" text="white" style={{ margin: "5% 0" }}>
            <Card.Body>
                <Card.Title>
                    <Form>
                        <Form.Group controlId="post">
                            <Form.Control as="textarea" ref={inputEl} size="lg" onChange={handleChange} rows={5} placeholder="What's happening?" />
                        </Form.Group>
                        <Button variant="light" size="lg" onClick={onCreatePostClick} disabled={issubmitDisabled} block>
                            Submit
                        </Button>
                    </Form>
                </Card.Title>
            </Card.Body>
        </Card>
    )
};

export default CreatePost;
