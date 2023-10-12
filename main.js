const { createApp } = Vue

createApp({
    data() {
        return {
            disks: null
        }
    },
    methods: {
        readData() {
            axios
                .get('./server.php')
                .then(response => {
                    this.disks = response.data;
                    console.log(this.disks);
                })
        }
    },
    mounted() {
        this.readData();
    }
}).mount('#app')