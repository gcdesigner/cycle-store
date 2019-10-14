import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Login from './pages/Login'
import List from './pages/List'
import Single from './pages/Single'

const Routes = createAppContainer(
  createSwitchNavigator({
    // Login,
    List,
    Single
  })
)

export default Routes