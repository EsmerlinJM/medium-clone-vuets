<template>
    <div class="article-preview">
        <div class="article-meta">
            <a href=""><img :src="article.author.image" alt=""></a>
            <div class="info">
                <router-link :to="`/@${article.author.username}`" class="author">
                    {{ article.author.username }}
                </router-link>
                <span class="date">
                    January 20th
                </span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart">{{ article.favoritesCount }}</i>
            </button>
        </div>
        <a href="" class="preview-link">
            <h1>{{ article.title }}
            </h1>
            <p>{{ article.description }}</p>
            <span>Read more...</span>
        </a>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Article } from '@/store/models';

@Component
export default class ArticlePreview extends Vue {
    @Prop() public article?: Article
}
</script>

<style>

</style>
