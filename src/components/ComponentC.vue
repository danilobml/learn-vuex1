<template>
    <div>
        <ComponentD />
        <HistoryComp />
    </div>
</template>

<script>
    import ComponentD from './ComponentD.vue';
    import HistoryComp from './HistoryComp.vue';
    export default {
        name: 'ComponentC',
        components: {
            ComponentD,
            HistoryComp
        }
    }
</script>

<style scoped>

</style>