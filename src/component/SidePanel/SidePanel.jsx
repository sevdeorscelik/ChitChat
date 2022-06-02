import React from "react"
import CreateChannelForm from "../Channels/CreateChannelForm";
import { Popup, Menu, Icon } from 'semantic-ui-react'
import { useState } from 'react';

const SidePanel = () => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>

            <Menu
                vertical
                inverted
                secondary
                color="blue"
                fixed='left'
                style={{ width: '346px', fontSize: '1.3rem' }}

            >
                <Menu.Item>
                    {/*userpanel */}
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>
                        Channels
                        <span style={{ float: 'right' }} >
                            <Popup
                                content='Create new channel'
                                trigger={<Icon name='add' onClick={e => handleOpen()} />}
                            >

                            </Popup>
                        </span>
                    </Menu.Header>

                    {/*Channels */}
                    {[... new Array(10)].map((prop, index) => (
                        <Menu.Item key={index} name="A" as='a' icon='hashtag' />
                    ))}

                </Menu.Item>
            </Menu>

            {/*create channel form */}
            <CreateChannelForm  open={open} onOpen={handleOpen} onClose={handleClose} />
        </>

    )
};

export default SidePanel;
