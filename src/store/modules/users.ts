import { VuexModule, Module, getModule, MutationAction, Mutation, Action } from 'vuex-module-decorators'
import store from '@/store'
import { User, Profile, UserSubmit } from '../models';
import { loginUser, fetchProfile } from '../api';

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
    return this.user && this.user.username || null
  }

  @MutationAction
  public async login(userSubmit: UserSubmit) {
      const user = await loginUser(userSubmit)
      return { user }
  }

  @MutationAction
  public async loadProfile(username: string) {
    const profile = await fetchProfile(username)
    return { profile }
  }
}

export default getModule(UsersModule);
