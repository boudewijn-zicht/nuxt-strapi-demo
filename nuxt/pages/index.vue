<template>
    <div>

        <h2>Lijst met pagina's</h2>
        <div class="links" v-for="page in pages" :key="page.slug">
            <a :href="page.slug">
                <img v-if="page.image" :src="`${imageDomain}${page.image.url}`" :alt="page.image.alternativeText">
                {{ page.title }}
            </a>
        </div>

        <Dump :value="pages"/>
    </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
    apollo: {
        pages: {
            prefetch: false,
            query: gql`
query {
  pages {
    title
    slug
    image {
      url
      alternativeText
    }
  }
}`,
        },
    },
    data: () => ({
        imageDomain: '//backend.test-t6dnbai-dimevesqs2roi.eu-4.platformsh.site',
    }),
}
</script>

<style scoped>
img {
    width: 100px;
    height: 50px;
}
</style>
