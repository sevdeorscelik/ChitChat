import React from "react"
import { useSelector } from "react-redux";
import { useFirebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { Menu } from 'semantic-ui-react'

const ChannelList = () => {

    useFirebaseConnect([{ path: 'channels' }]) // artik react-state icerisinde kanal verileri var

    const channels = useSelector(state => state.firebase.ordered.channels)

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
                    />
                ))
            }
        </Menu.Menu>
    )
};

export default ChannelList;


// render={() => isLoaded(auth) && !isEmpty(auth) ? children : <Fallback />}