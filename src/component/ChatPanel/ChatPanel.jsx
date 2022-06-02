import React from "react"
import { Segment, Header, Icon, Comment, Form, Input, Button, StepContent } from 'semantic-ui-react'
import { useFirebase } from 'react-redux-firebase'
import { useSelector } from "react-redux";
import { useState } from "react";
import { FirebaseError } from "firebase/app";



const ChatPanel = ({ currentChannel }) => {

    const firebase = useFirebase()
    const profile = useSelector(state => state.firebase.profile)
    const currentUserUid = useSelector(state => state.firebase.auth.uid)

    const [searchTerm, setSearchTerm] = useState('')
    const [content, setContent] = useState('')
    

    const handleSubmit = (e) => {
        e.preventDefault()

        if(content !== ''){
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
            .then(()=>{
                setContent('') //clear
            })
        }
    }


    return (
        <>
            {/*Messages header */}

            <Segment clearing>

                <Header as='h3' floted='left' >

                    <span>
                        <Icon name='hashtag' />
                        {currentChannel?.name}
                    </span>

                </Header>

                {/* search message */}
                <Header as='h3' floated='right'>
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
            <Segment style={{ position: 'fixed', top: 55, bottom: 70, width: '80%' }}>
                <Comment.Group
                    style={{
                        height: '80vh',
                        overflowY: 'auto',
                        maxWidth: '100%'
                    }}
                >

                </Comment.Group>
            </Segment>

            {/* sende new message*/}
            <Segment
                style={{ position: 'fixed', bottom: 0, width: '85%', display: 'flex' }}
            >
                <Button icon>
                    <Icon name='add' />
                </Button>

                <Form onSubmit={handleSubmit} style={{ flex: '1' }} >
                    <Input fluid name='message' value={content} onChange={(e) => setContent(e.target.value)} labelPosition='left' placeholder={`# Send a message to channel ${currentChannel.name}`} />
                </Form>

            </Segment>





        </>
    )
};

export default ChatPanel;
