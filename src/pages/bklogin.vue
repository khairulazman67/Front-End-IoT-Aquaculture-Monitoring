<template>
    <div class="flex justify-center items-center h-screen w-screen">
        <div class="flex flex-row bg-white w-full mx-20 rounded-2xl my-20  shadow-xl">
            <div class="w-1/3 ">
                <img src="../assets/foto.png" alt="" class=" overflow-hidden rounded-l-xl">
            </div>
            <div class="w-2/3 flex flex-col px-10 ">
                <div
                    class="w-full h-28 bg-blue-400 rounded-2xl mt-11 my-11  flex justify-center items-center text-2xl font-bold text-white">
                    LOGIN
                </div>
                <div class="h-full mb-20 bg-secondary-800 rounded-xl   w-full">
                    <form @submit.prevent="submit" class="flex-col  rounded px-8 pt-6 pb-8  mb-2 w-full">
                        <div class="mb-4">
                            <label class="block text-gray-700 text-xl font-bold mb-2" for="username">
                                Email
                            </label>
                            <input name="email"
                                class="shadow h-16 text-lg rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                id="username" type="email" placeholder="Email">
                        </div>
                        <div class="mb-6">
                            <label  class="block text-gray-700 text-xl font-bold mb-2" for="password">
                                Password
                            </label>
                            <input name="password"
                                class="shadow h-16 text-lg rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                id="password" type="password" placeholder="******************">
                        </div>
                        <div class="flex items-center justify-end">
                            <!-- <router-link :to="{name: 'beranda', params:{}}">
                                <div class="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xl rounded-xl py-4 px-6 focus:outline-none focus:shadow-outline"
                                type="button">
                                    Sign In
                                </div>
                            </router-link> -->
                            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xl rounded-xl py-4 px-6 focus:outline-none focus:shadow-outline">Sign In</button>
                        </div>
                    </form>
                    <!-- <button @click="getUser()" class="bg-red-800">Get User</button>
                    <button @click="refreshToken()" class="bg-blue-800">Refresh</button> -->

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import axios from 'axios';
    // import Swal from 'sweetalert2'

    // import {useRouter} from 'vue-router';
    // import { BACKEND_SERVICE_URL } from '../constant';
    // import {useStore} from 'vuex'

    export default {
        name: 'App',
        // setup(){
        //     const router = useRouter();

        //     const submit = async e => {
        //         const form = new FormData(e.target);

        //         const inputs = Object.fromEntries(form.entries());

        //         console.log('ini token ',inputs)

        //         const {data} = await axios.post(`${BACKEND_SERVICE_URL}/users/login`,inputs)

        //         console.log('ini token ',data.data.token)
        //         axios.defaults.headers.Authorization = data.data.token
        //         localStorage.setItem('refresh_token',JSON.stringify(data.data.refresh_token));

        //         // let {user} = await axios.get(`${BACKEND_SERVICE_URL}/users/1`)

        //         // console.log('data',await user)
        //         localStorage.setItem('user',JSON.stringify(await axios.get(`${BACKEND_SERVICE_URL}/users/1`)));

        //         await router.push('/');
        //     }

        //     return{
        //         submit
        //     }
        // }
        methods: {
            login() {
                // const inputs = Object.fromEntries(form.entries());
                this.$store.dispatch('login', {
                    credentials: {
                        email: this.email,
                        password: this.password,
                    },
                    callback: (r) => {
                        if (r.status == 403) {
                            this.error = "Maaf, anda tidak diizinkan untuk masuk!"
                        }else if(r.status == 200) {
                            this.$emit('success')
                        }
                    },
                }).catch(e => {
                    let r = e.response;
                    this.errors = {
                        email: [],
                        password: [],
                    };
                    if (r.status == 403) {
                        let data = e.response.data.body;
                        for (const key in data) {
                            if (Object.hasOwnProperty.call(data, key)) {
                                const val = data[key];
                                this.errors[key] = val;
                            }
                        }
                    } else {
                        this.error = "Email atau Password anda salah!";
                    }
                });
            },
        }
    }
</script>