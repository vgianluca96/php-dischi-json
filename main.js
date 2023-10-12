const { createApp } = Vue

createApp({
    data() {
        return {
            disks: null,
        }
    },
    methods: {
        readData() {
            axios
                .get('./server.php')
                .then(response => {
                    this.disks = response.data;
                    this.disks.forEach(disk => {
                        disk.visible = false;
                    });
                });
        },
    },
    mounted() {
        this.readData();
    }
}).mount('#app')