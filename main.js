const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!'
        }
    },
    methods: {
        myFunction() {
            console.log(this.message);
        }
    },
    mounted() {
        this.myFunction();
    }
}).mount('#app')