<template>
    <div>
        <h1 v-if="page.title">{{ page.title }} [{{ page.displayType }}]</h1>
        <p v-if="page.body">{{ page.body }}</p>
        <img v-if="page.image" :src="page.image.url" :alt="page.image.alt">
        <p>Todo: content items are broken atm, see apollo/README.md for progress</p>
    </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
    apollo: {
        page: {
            prefetch: true,
            query: gql`query page($slug: String!) {
                page(filter: {slug: {eq: $slug}}) {
                    displayType
                    title
                    body
                    image {
                        url(imgixParams:{w: 300, h: 200, fit:facearea})
                        alt
                    }
                }
            }`,
            variables() {
                return {
                    slug: this.$route.params.slug,
                }
            }
        }
    }
}
</script>
