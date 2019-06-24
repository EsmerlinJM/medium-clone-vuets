import { VuexModule, Module, getModule, MutationAction, Mutation, Action } from 'vuex-module-decorators'
import store from '@/store'
import { User, Profile, UserSubmit } from '../models';
import { loginUser } from '../api';

@Module({
  namespaced: true,
  name: 'users',
  store,
  dynamic: true
})
class UsersModule extends VuexModule {
  public user: User | null = null
  public profile: Profile | null = null

  // @MutationAction({mutate: ['user']})
  // public async login(userSubmit: UserSubmit) {
  //   const user = await loginUser(userSubmit)
  //   return { user }
  // }

  get username(): string | null {
    return this.user && this.user.username || null
  }

  @Mutation
  public setUser(user: User): void { this.user = user }

  @Action({ commit: 'setUser' })
  public async login(userSubmit: UserSubmit): Promise<User> {
    const user = await loginUser(userSubmit)
    return user
  }
}

export default getModule(UsersModule);
