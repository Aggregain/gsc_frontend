import { createStore } from 'vuex'

// Modules
import DictionaryModule from './modules/DictionaryModule'
import AuthModule from './modules/AuthModule'
import UserModule from './modules/UserModule'
import ProgramModule from './modules/ProgramModule'
import UniversityModule from './modules/UniversityModule'
import ApplicationModule from './modules/ApplicationModule'
import WishlistModule from './modules/WishlistModule'
import AttachmentModule from './modules/AttachmentModule'
import NotificationModule from './modules/NotificationModule'

export default createStore({
  modules: {
      DictionaryModule,
      AuthModule,
      UserModule,
      ProgramModule,
      UniversityModule,
      ApplicationModule,
      WishlistModule,
      AttachmentModule,
      NotificationModule
  }
})
