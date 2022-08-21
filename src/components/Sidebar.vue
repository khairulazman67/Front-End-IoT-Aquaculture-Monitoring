<template>
<aside :class="showMenu ? 'flex' : 'hidden'" class="h-full mx-2 w-40 flex items-center flex-col justify-center rounded-3xl bg-primary-900 ">
                <div class="w-20 mb-7">
                    <img src="../assets/user.jpeg" alt=""  class="shadow rounded-full max-w-full h-auto align-middle border-4 border-white">
                </div>
                <router-link :to="{name: 'beranda', params:{}}">
                    <div class="flex flex-col items-center text-secondary-900 hover:text-white ">
                        <div class="flex items-center justify-center h-16 w-16 rounded-2xl bg-white hover:bg-secondary-900">
                            <i class="fa-solid fa-house text-2xl"></i>
                        </div>
                        <div class="text-white text-base mt-1">Beranda</div>
                    </div>
                </router-link >
                <router-link :to="{name: 'setting', params:{}}" class="mt-4">
                    <div class="flex flex-col items-center text-secondary-900 hover:text-white ">
                        <div class="flex items-center justify-center h-16 w-16 rounded-2xl bg-white hover:bg-secondary-900">
                            <i class="fa-solid fa-gear text-2xl"></i>
                        </div>
                        <div class="text-white text-base mt-1">Setting</div>
                    </div>
                </router-link >
                <router-link :to="{name:'report',params:{}}" class="mt-4">
                    <div class="flex flex-col items-center text-secondary-900 hover:text-white ">
                        <div class="flex items-center justify-center h-16 w-16 rounded-2xl bg-white hover:bg-secondary-900">
                            <i class="fa-solid fa-user text-2xl"></i>
                        </div>
                        <div class="text-white text-base mt-1">Profil</div>
                    </div>
                </router-link>
                <a href="#" class="mt-4" @click="signout">
                    <div class="flex flex-col items-center text-secondary-900 hover:text-white ">
                        <div class="flex items-center justify-center h-16 w-16 rounded-2xl bg-white hover:bg-secondary-900">
                            <i class="fa-solid fa-right-from-bracket text-2xl"></i>
                        </div>
                        <div class="text-white text-base mt-1">Logout</div>
                    </div>
                </a>
            </aside>
</template>

<script>
// import axios from 'axios';
export default {
    methods: {
        signout(){
            event.preventDefault();
            this.$store.dispatch('logout', {
                success: () => {
                    this.$router.push({name: 'login', params: []});
                }
            });
        },
        async checklogged() {
            var user =  JSON.parse(localStorage.getItem('user'))
            if(!user){
                this.$router.push({name: 'login', params: []});
            }
        },
    },
    mounted(){
        // this.$store.commit('setHeaders')
        this.checklogged()
    }
}
</script>