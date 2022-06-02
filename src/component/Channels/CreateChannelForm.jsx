import React from "react"
import { useSelector } from "react-redux" //redux store'dan bilgi almak icin
import { useForm } from 'react-hook-form'
import { Modal, Form, Button } from 'semantic-ui-react'
import { useFirebase } from 'react-redux-firebase'
import { useEffect } from "react";



const CreateChannelForm = ({ open, onOpen, onClose }) => {

    const firebase = useFirebase();
    const profile = useSelector(state => state.firebase.profile)
    const { register, formState: { errors }, handleSubmit, setValue } = useForm()

    useEffect(() => {
        register("name", { required: true })
        register("description", { required: true, minLength: 10 })

    }, [])

    const onSubmit = ({ name, description }) => {
        firebase.push('channels', {
            name,
            description,
            createBy: {
                name: profile.name,
                avatar: profile.avatar,
            }
        })

        onClose()
    }


    return (
        <Modal open={open} onOpen={onOpen} onClose={onClose}>
            <Modal.Header>
                Create new channel
            </Modal.Header>
            <Modal.Content>
                <Form onSubmit={handleSubmit(onSubmit)} >
                    <Form.Input
                        fluid
                        icon='hashtag'
                        iconPosition="left"
                        name='name'
                        placeholder='#General'
                        onChange={(e, { name, value }) => {
                            setValue(name, value)
                        }}
                        error={errors.name ? true : false}
                    />
                    <Form.Input
                        fluid
                        icon='pencil'
                        iconPosition="left"
                        name='description'
                        placeholder='#General This is the one channel that will always include everyone.'
                        onChange={(e, { name, value }) => {
                            setValue(name, value)
                        }}
                        error={errors.description ? true : false}
                    />
                </Form>
            </Modal.Content>
            <Modal.Actions>

            </Modal.Actions>
            <Button color='black' onClick={() => onClose()}>
                Cancel
            </Button>
            <Button content='Create' icon='checkmark' size='large' positive onClick={() => handleSubmit(onSubmit)()} />
                
         

        </Modal>
    )
};

export default CreateChannelForm;
