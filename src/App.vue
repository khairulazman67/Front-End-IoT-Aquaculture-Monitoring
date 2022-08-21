<template>
  <router-view v-if="isLogged"></router-view>
  <Login v-if="!isLogged" @success="loginSuccess"></Login>
</template>
<script>
  import Login from './pages/Login.vue';
  import axios from 'axios';
  export default {
    name: 'App',
    data() {
      return {
        isLogged: false,
      }
    },
    components: {
      Login
    },
    methods: {
        loginSuccess() {
            this.checkLogged();
        },
        checkLogged() {
            this.$router.push({name: 'beranda', params: []});
            const userInfo = localStorage.getItem('user')
            console.log('user info',userInfo)
            
            if (userInfo) {
                // const userData = JSON.parse(userInfo)
                this.isLogged = true;
                axios.interceptors.response.use(
                    response => response,
                    error => {
                    if (error.response.status === 401) {
                        this.$router.push({name: 'beranda', params: []});
                        this.$store.dispatch('logout')
                    }
                        return Promise.reject(error)
                    }
                )
            }
            console.log('cek login',this.isLogged)
        },
    },
    mounted() {
        this.checkLogged();
    },
  }
</script>
