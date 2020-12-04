<template>
    <div>
        <h1 v-if="page.title">{{ page.title }}</h1>
        <p v-if="page.body">{{ page.body }}</p>
        <img v-if="page.image" :src="`${imageDomain}${page.image.url}`" :alt="page.image.alternativeText">
        <p>Todo: content items are broken atm, see apollo/README.md for progress</p>

        <Dump :value="page"/>
    </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
    apollo: {
        pages: {
            prefetch: true,
            query: gql`
query {
  pages(where: { slug: "thuis" }, limit: 1) {
    title
    body
    image {
      url
      alternativeText
    }
  }
}`,
            variables() {
                return {
                    slug: this.$route.params.slug,
                }
            }
        }
    },
    computed: {
        page: function () {
            return this.pages.length ? this.pages[0] : {};
        },
    },
    data: () => ({
        imageDomain: '//backend.test-t6dnbai-dimevesqs2roi.eu-4.platformsh.site/',
    }),
}
</script>

<style scoped>
img {
    width: 200px;
    height: 100px;
}
</style>
