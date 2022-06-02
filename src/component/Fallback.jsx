import React from "react"
import { Dimmer, Loader, Image, Segment, Icon } from 'semantic-ui-react'



const Fallback = () => {
  return (
    <Segment style={{ height: '100vh' }} >

        <Dimmer active>
            <Loader />
        </Dimmer>
        <Image src ='/images/wireframe/short-paragraph.png' />{' '}
    </Segment>
  )
};

export default Fallback;
