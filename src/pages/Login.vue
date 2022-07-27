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
                <div class="h-full mb-20 bg-secondary-800 rounded-xl py-7  w-full">
                    <form @submit.prevent="login" class="flex-col  rounded px-8 pt-6 pb-8  mb-2 w-full">
                        <div class="mb-4">
                            <label class="block text-gray-700 text-xl font-bold mb-2" for="username">
                                Email
                            </label>
                            <input v-model="datalogin.email"
                                class="shadow h-16 text-lg rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                id="username" type="email" placeholder="Email">
                        </div>
                        <div class="mb-6">
                            <label  class="block text-gray-700 text-xl font-bold mb-2" for="password">
                                Password
                            </label>
                            <input v-model="datalogin.password"
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
                    <button @click="getUser()" class="bg-red-800">Get User</button>
                    <button @click="refreshToken()" class="bg-blue-800">Refresh</button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Swal from 'sweetalert2'
    import { BACKEND_SERVICE_URL } from '../constant';
    // import {useStore} from 'vuex'

    export default {
        data() {
            return {
                profil : null,
                datalogin : {
                    email : null,
                    password : null
                }
            }
        },
        methods: {
            setHeader(){
                this.$store.commit('setHeaders')
            },
            login(){
                var datalogin= {
                        email: this.datalogin.email,
                        password: this.datalogin.password,
                    }
                axios
                .post(`${BACKEND_SERVICE_URL}/users/login`,datalogin)
                .then(r => {
                    //set local storage token
                    localStorage.setItem('login',JSON.stringify(r.data.data));
                    //get set default header
                    this.setHeader()
                    this.getUser()
                    this.$router.push({name: 'beranda', params: {}})
                    // refreshToken()
                    // console.log(r)
                }).catch(e => {
                    Swal.fire(
                        'Gagal!',
                        'Terjadi kesalahan saat login periksa kembali email dan password anda',
                        'error'
                    );
                    console.error(e.response.data.status);
                })
            },
            getUser(){
                axios
                    .get(`http://localhost:3000/users/1`)
                    .then(r => {
                        console.log(r)
                        localStorage.setItem('user',JSON.stringify(r.data.data));
                    }).catch(e => {
                        // console.dir(e);
                        console.error(e.response.data.status);
                        if(e.response.data.message==='jwt expired'){
                            console.log('masok')
                            this.$store.dispatch('refreshToken')
                            this.getUserData()
                        }
                    });
            },
        },
        mounted(){
            this.setHeader()
        }
    }
</script>