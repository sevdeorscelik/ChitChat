import React from "react"
import { useForm } from 'react-hook-form'
import { Modal, Form, Button } from 'semantic-ui-react'
import { useFirebase } from 'react-redux-firebase'



const CreateChannelForm = ({ open, onOpen, onClose }) => {

    const firebase = useFirebase();

    return (
        <Modal open={open} onOpen={onOpen} onClose={onClose}>
            <Modal.Header>
                Create new channel
            </Modal.Header>
            <Modal.Content>
                <Form>


                    <Form.Input
                        fluidicon='hashtag'
                        iconPosition="left"
                        name='name'
                        placeholder='#General'
                    />
                    <Form.Input
                        fluidicon='hashtag'
                        iconPosition="left"
                        name='description'
                        placeholder='#General This is the one channel that will always include everyone.'

                    />
                </Form>
            </Modal.Content>
            <Modal.Actions>

            </Modal.Actions>
            <Button color='black' onClick={() => onClose()}>
                Cancel
            </Button>
            <Button icon='checkmark' positive onClick={() => onClose()}>
                Create
            </Button>

        </Modal>
    )
};

export default CreateChannelForm;
