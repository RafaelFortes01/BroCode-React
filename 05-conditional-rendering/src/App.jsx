import { Fragment } from "react"
import UserGreeting from "./UserGreeting"

function App() {

  return (
    <Fragment>
      <UserGreeting isLoggedIn={true} username="Rafael"/>
    </Fragment>
  )
}

export default App
