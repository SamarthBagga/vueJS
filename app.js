const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
          }
        },
        methods: {
            getUser() {
                this.firstName= 'Samarth',
                this.lastName= 'Bagga',
                this.email= 'sam@gmail.com',
                this.gender= 'male',
                this.picture= 'https://randomuser.me/api/portraits/men/9.jpg'
            },
        }
})
app.mount('#app')