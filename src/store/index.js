import { createStore } from 'vuex'

// Modules
import AuthModule from './modules/AuthModule'
import UserModule from './modules/UserModule'
import ProgramModule from './modules/ProgramModule'

export default createStore({
  modules: {
      AuthModule,
      UserModule,
      ProgramModule
  }
})
