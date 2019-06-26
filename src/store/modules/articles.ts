import { Module, VuexModule, getModule, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
import { Article, ArticlesResponse } from '../models';
import * as api from '@/store/api'

@Module({
    dynamic: true,
    namespaced: true,
    name: 'articles',
    store
})
class ArticlesModule extends VuexModule {
    public globalFeed: Article[] = []
    public userFeed: Article[] = []

    @Mutation
    public setGlobalFeed(articles: Article[]) {
        this.globalFeed = articles
    }

    @Action({ commit: 'setGlobalFeed' })
    public async refreshGlobalFeed(): Promise<ArticlesResponse> {
       const globalFeed = await api.getGlobalFeed()
       return (globalFeed.articles as ArticlesResponse)
    }
}

export default getModule(ArticlesModule)