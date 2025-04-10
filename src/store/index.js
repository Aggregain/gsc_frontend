import { createStore } from 'vuex'

// Modules
import AuthModule from './modules/AuthModule'
import UserModule from './modules/UserModule'
import ProgramModule from './modules/ProgramModule'
import UniversityModule from './modules/UniversityModule'
import ApplicationModule from './modules/ApplicationModule'

export default createStore({
  modules: {
      AuthModule,
      UserModule,
      ProgramModule,
      UniversityModule,
      ApplicationModule
  }
})
