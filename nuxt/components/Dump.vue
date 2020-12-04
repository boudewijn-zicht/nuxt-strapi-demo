<template>
    <pre>{{ JSON.stringify(value, null, 2) }}</pre>
</template>

<script>
export default {
    props: {
        value: {},
    }
}
</script>

<style scoped>
pre {
    background-color: darkgray;
    border: 1px solid darkred;
    margin: 10px;
    padding: 5px;
}
</style>
