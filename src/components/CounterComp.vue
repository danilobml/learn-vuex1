<template>
    <div>
        <h1>Vuex Counter</h1>
        <h1 class="counter">{{ counter }}</h1>
        <button @click="subtractToCounter(value)">-</button>
        <input type="number" v-model="value">
        <button @click="addToCounter(value)">+</button>
    </div>
    <button class="reset" @click="resetCounter">Reset</button>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
    export default {
        name: 'CounterComp',
        data() {
            return {
                value: 1,
            }
        },
        computed: {
            ...mapState(['counter'])
        },
        methods: {
            ...mapMutations(['addToCounter', 'subtractToCounter', 'resetCounter'])
        }
    }
</script>

<style scoped>
.counter {
    font-size: 5rem;
}
button {
    font-weight: 700;
    border-radius: 100%;
    border: none;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
}
button.reset{
    width: 6rem;
}
input {
    text-align: center;
    padding: 0.4rem;
    margin: 0 0.5rem;
}
</style>