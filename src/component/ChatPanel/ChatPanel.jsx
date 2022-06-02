import React from "react"
import { Segment, Header, Icon, Comment, Form, Input, Button, Message } from 'semantic-ui-react'
import { useFirebase } from 'react-redux-firebase'
import { useSelector } from "react-redux";
import { useState, useRef } from "react";
import { FirebaseError } from "firebase/app";
import { useFirebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import Messages from './Messages'
import { useEffect } from "react";
import styles from './chatPanel.module.css'



const ChatPanel = ({ currentChannel }) => {
    useFirebaseConnect([
        {
            path: `/messages/${currentChannel.key}`,
            storeAs: 'channelMessages'
        },
    ])

    const firebase = useFirebase()

    const profile = useSelector(state => state.firebase.profile)
    const currentUserUid = useSelector(state => state.firebase.auth.uid)
    const channelMessages = useSelector(state => state.firebase.ordered.channelMessages)

    const [searchTerm, setSearchTerm] = useState('')
    const [content, setContent] = useState('')


    // oto scroll
    const messagesEndRef = useRef(null)

    useEffect(() => {
        messagesEndRef.current.scrollIntoView({
            behaviour: 'smooth',
            block: 'end'
        })
    })


    const handleSubmit = (e) => {
        e.preventDefault()

        if (content !== '') {
            const message = {
                content,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: {
                    id: currentUserUid,
                    name: profile.name,
                    avatar: profile.avatar
                }
            }

            firebase.push(`messages/${currentChannel.key}`, message) // promise geldi
                .then(() => {
                    setContent('') //clear
                })
        }
    }
    const filterMessages = () => {
        const regex = new RegExp(searchTerm, 'gi')
        const searchResults = [...channelMessages].reduce((acc, message) => {
            if (
                (message.value.content && message.value.content.match(regex)) ||
                message.value.user.name.match(regex)
              ) {
                acc.push(message)
            }
            return acc
        }, [])
        return searchResults
    }
    const renderedMessages = searchTerm !== '' ? filterMessages() : channelMessages

    return (
        <>
            {/*Messages header */}

            <Segment className={styles.headerSegment} > 

                <Header as='h3' className={styles.header1} >

                    <span className={styles.channelName}>
                        <Icon name='hashtag' />
                        {currentChannel?.name}
                    </span>

                </Header>

                {/* search message */}
                <Header className={styles.header2} >
                    <Input
                        size="mini"
                        icon='search'
                        name='searchTerm'
                        placeholder='Search in messages...'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                       
                    />
                </Header>
            </Segment>


            {/*Messages*/}
            <Segment className={styles.messagesSegment} >
                <Comment.Group
                    style={{
                        height: '80vh',
                        overflowY: 'auto',
                        maxWidth: '100%'
                    }}
                >
                    {
                        renderedMessages && renderedMessages.map(({ key, value }) => (
                            <Messages key={key} message={value} />
                        ))
                    }
                    <div ref={messagesEndRef} />
                </Comment.Group>
            </Segment>

            {/* sende new message*/}
            <Segment
                style={{ position: 'fixed', bottom: '0', width: '85%', display: 'flex' }}
            >


                <Form onSubmit={handleSubmit} style={{ width: '88%' }} >
                    <Input fluid name='message' value={content} autoComplete='off' onChange={(e) => setContent(e.target.value)} placeholder={`# Send a message to channel ${currentChannel.name}`} />
                </Form>
                <Button icon labelPosition='right' onClick={handleSubmit} >
                    Send
                    <Icon name='send' />
                </Button>

            </Segment>

        </>
    )
};

export default ChatPanel;
