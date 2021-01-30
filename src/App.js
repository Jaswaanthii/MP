import { Button } from 'antd'
import './App.css'
import firebase from './firebase'
import Fettle from './components/fettle'

function App() {
  const handleSignOut = () => {
    firebase.auth().signOut()
  }
  return (
    <div className='App'>
      App <Button onClick={() => handleSignOut()}>SignOut</Button>
      <Fettle/>
    </div>
  )
}

export default App
