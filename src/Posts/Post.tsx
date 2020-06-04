import React, { useMemo } from "react";
import Card from 'react-bootstrap/Card';

export interface IPost {
    user: string
    message: string
}

export interface ITime {
    time: number
}

const Post: React.FC<IPost & ITime> = ({ user, message, time }): any => {
    const timeObject = useMemo(() => new Date(time/1000), [time]);
    return (
        <Card bg="dark" text="white">
            <Card.Body>
                <Card.Title>
                    {user}
                </Card.Title>
                <Card.Text>
                    {message}
                </Card.Text>
                <Card.Text>
                    {`${timeObject.getHours()}:${timeObject.getMinutes()} ${timeObject.toLocaleDateString()}`}
                </Card.Text>
            </Card.Body>
        </Card>
    )
};

export default Post;
