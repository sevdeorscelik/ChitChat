import React from "react"
import CreateChannelForm from "../Channels/CreateChannelForm";
import { Popup, Menu, Icon } from 'semantic-ui-react'
import { useState } from 'react';
import ChannelList from "../Channels/ChannelList";
import UserPanel from "../UserPanel/UserPanel";
import { TwitterPicker } from 'react-color'


const SidePanel = () => {

    const [open, setOpen] = useState(false)
    const [color, setColor] = useState("#7D1E6A");

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
                fixed='left'
                style={{ background:color, width: '346px', fontSize: '1.3rem' }}

            >
                <Menu.Item>
                    <TwitterPicker 
                    color={color}
                    onChangeComplete={(color) => setColor(color.hex)}
                    
                    />
                </Menu.Item>
                <Menu.Item>
                    {/*userpanel */}
                    <UserPanel />

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
                    <ChannelList />

                </Menu.Item>
            </Menu>

            {/*create channel form */}
            <CreateChannelForm open={open} onOpen={handleOpen} onClose={handleClose} />
        </>

    )
};

export default SidePanel;
