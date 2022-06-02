import { useState } from 'react'
import './App.css'
import { Grid } from 'semantic-ui-react'
import SidePanel from './component/SidePanel/SidePanel'





function App() {


  return (
    <div className="App">
      <Grid columns="2" style={{ background:'#eee', height:'110vh' }}>
        <Grid.Column width="3"  style={{ background:'#333' }}>
          {/*sidebar*/}
          <SidePanel />


        </Grid.Column>
        <Grid.Column width="13" style={{ background:'#eee' }}>
          {/*chatpanel*/}


        </Grid.Column>
      </Grid>


    </div>
  )
}

export default App
