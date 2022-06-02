import React from "react"
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFirebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { Menu } from 'semantic-ui-react'
import { setCurrentChannel } from '../../store/action/channel'

const ChannelList = () => {

    useFirebaseConnect([{ path: 'channels' }]) // artik react-state icerisinde kanal verileri var
    
    const dispatch = useDispatch()
    const channels = useSelector(state => state.firebase.ordered.channels)
    const currentChannel = useSelector(state => state.channels.currentChannel)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        if (!mounted && !isEmpty(channels)) {
            const { key, value } = channels[0];
            setActiveChannel({ key, ...value })
            setMounted(true)
        }
    }, [isLoaded(channels)])

    const setActiveChannel = (channel) => {
        dispatch(setCurrentChannel(channel))
    }

    if (!isLoaded(channels)) {
        return 'Loading channels..'
    }

    if (isEmpty(channels)) {
        return 'No channel'
    }
    return (
        <Menu.Menu>
            {
                channels.map(({ key, value }) => (
                    <Menu.Item
                        key={key}
                        name={value?.name}
                        as='a'
                        icon='hashtag'
                        active={currentChannel && currentChannel.key === key}
                        onClick={() => {
                            setActiveChannel({ key, ...value })
                        }}
                    />
                ))
            }
        </Menu.Menu>
    )
};

export default ChannelList;


// render={() => isLoaded(auth) && !isEmpty(auth) ? children : <Fallback />}