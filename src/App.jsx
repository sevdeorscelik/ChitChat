import { useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import SidePanel from './component/SidePanel/SidePanel'
import ChatPanel from './component/ChatPanel/ChatPanel'


function App() {

  const currentChannel = useSelector(state => state.channels.currentChannel)


  return (
    <div className="App">
      <Grid columns="2" style={{ background: '#eee', height: '110vh' }}>
        <Grid.Column width="3"  >

          {/*sidebar*/}
          <SidePanel />

        </Grid.Column>
        <Grid.Column width="13" style={{ background: '#eee' }}>

          {/*chatpanel*/}
          {currentChannel && <ChatPanel currentChannel={currentChannel} />}

        </Grid.Column>
      </Grid>

    </div>
  )
}

export default App
