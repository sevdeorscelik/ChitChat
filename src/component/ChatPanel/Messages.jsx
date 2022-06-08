import React from "react"
import moment from 'moment'
import { Comment, Image } from 'semantic-ui-react'
import styles from './messages.module.css'

const Messages = ({ message }) => {

    const timeFromNow = (timestamp) => moment(timestamp).fromNow()
    


    return (
        <Comment>
            <Comment.Avatar src={message.user.avatar} />
            <Comment.Content>

                <Comment.Author as='a'>{message.user.name}</Comment.Author>
                <Comment.Metadata> {timeFromNow(message.timestamp)} </Comment.Metadata>
                <Comment.Text> {message.content}  </Comment.Text>

            </Comment.Content>
        </Comment>
    )
};

export default Messages;
