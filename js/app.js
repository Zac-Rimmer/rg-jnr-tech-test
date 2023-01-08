const contact = Vue.createApp({
    data() {
        return {
            items: [{name: "John Smith"}, {phone: "07700 000 000"}, {email: "j.smith@test.com"}]
        }
    }
})

contact.mount("#contact")

const count = Vue.createApp({
    data() {
        return {
            count: 0
        }
    }
})

count.mount("#bonus-task")