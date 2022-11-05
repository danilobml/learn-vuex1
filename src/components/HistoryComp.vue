<template>
    <div class="container">
        <h4>History:</h4>
    </div>
    <div class="flex">
        <p v-for="(item, index) in history" :key="index" :class="activeIndexes(parseInt(value)).includes(index) && 'bold'">{{item}}</p>
    </div>
    <input type="number" placeholder="Search by index" v-model="value">
</template>

<script>
    import { mapState, mapGetters } from 'vuex';
    export default {
        name: 'HistoryComp',
        data() {
            return {
                value:0
            }
        },
        computed: {
            ...mapState(['history']),
            ...mapGetters(['activeIndexes'])
        }
    }
</script>

<style scoped>
.container {
    margin-top: 7rem;
}
.flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25rem;
    margin: 0 auto;
    text-align: center;
}
.flex p{
    margin: 1rem;
}
.bold {
    font-weight: 900;
}
</style>