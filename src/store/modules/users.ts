import { VuexModule, Module, getModule, MutationAction } from 'vuex-module-decorators'
import store from '@/store'
import { User, Profile, UserSubmit, UserForUpdate } from '../models';
import { loginUser, fetchProfile, updateUser, setJWT, fetchUser } from '../api';
@Module({
  namespaced: true,
  name: 'users',
  store,
  dynamic: true
})
class UsersModule extends VuexModule {
  public user: User | null = null
  public profile: Profile | null = null

  get username(): string | null {
    return (this.user && this.user.username) || null
  }

  @MutationAction
  public async login(userSubmit: UserSubmit) {
      const user = await loginUser(userSubmit)
      setJWT(user.token)
      return { user }
  }

  @MutationAction
  public async loadProfile(username: string) {
    const profile = await fetchProfile(username)
    return { profile }
  }

  @MutationAction
  public async loadUser() {
    const user = await fetchUser()
    return { user }
  }

  @MutationAction
  public async updateSelfProfile(userUpdateFields: UserForUpdate) {
    const user = await updateUser(userUpdateFields)
    return { user }
  }
}

export default getModule(UsersModule);
