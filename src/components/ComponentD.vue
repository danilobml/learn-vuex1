<template>
    <div>
        <CounterComp />
    </div>
</template>

<script>
    import CounterComp from './CounterComp.vue'
    export default {
        name: 'ComponentD',
        components: {
            CounterComp,
        }
    }
</script>

<style scoped>

</style>