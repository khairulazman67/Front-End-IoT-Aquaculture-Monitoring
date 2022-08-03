<template>
    <div class="h-screen py-5 px-5 ">
        <div class="flex h-full flex-row ">
            <aside :class="showMenu ? 'flex' : 'hidden mx-0'" class="h-full  mx-2 xs:px-2 w-40 flex items-center flex-col justify-center rounded-3xl bg-primary-900 ">
                <div class="w-20 xs:w-10 mb-7">
                    <img src="../assets/user.jpeg" alt=""  class="shadow rounded-full max-w-full h-auto align-middle border-4 border-white">
                </div>
                <router-link :to="{name: 'beranda', params:{}}">
                    <div class="flex flex-col items-center text-secondary-900 hover:text-white ">
                        <div class="flex items-center justify-center h-16 w-16 xs:w-10 xs:h-10 xs:rounded-xl rounded-2xl bg-white hover:bg-secondary-900">
                            <i class="fa-solid fa-house text-xl xs:lg"></i>
                        </div>
                        <div class="text-white text-base xs:text-xs mt-1">Beranda</div>
                    </div>
                </router-link >
                <router-link :to="{name: 'setting', params:{}}" class="mt-4">
                    <div class="flex flex-col items-center text-secondary-900 hover:text-white ">
                        <div class="flex items-center justify-center h-16 w-16 xs:w-10 xs:h-10 xs:rounded-xl rounded-2xl bg-white hover:bg-secondary-900">
                            <i class="fa-solid fa-gear text-xl"></i>
                        </div>
                        <div class="text-white text-base xs:text-xs mt-1">Setting</div>
                    </div >
                </router-link >
                <router-link :to="{name:'report',params:{}}" class="mt-4">
                    <div class="flex flex-col items-center text-secondary-900 hover:text-white ">
                        <div class="flex items-center justify-center h-16 w-16 xs:w-10 xs:h-10 xs:rounded-xl rounded-2xl bg-white hover:bg-secondary-900">
                            <i class="fa-solid fa-book text-xl"></i>
                        </div>
                        <div class="text-white text-base xs:text-xs mt-1">Report</div>
                    </div>
                </router-link>
                <a href="#" class="mt-4" @click="signout">
                    <div class="flex flex-col items-center text-secondary-900 hover:text-white ">
                        <div class="flex items-center justify-center h-16 w-16 xs:w-10 xs:h-10 xs:rounded-xl rounded-2xl bg-white hover:bg-secondary-900">
                            <i class="fa-solid fa-right-from-bracket text-xl"></i>
                        </div>
                        <div class="text-white text-base xs:text-xs mt-1">Logout</div>
                    </div>
                </a>
            </aside>
            <main class="h-full ml-3 xs:ml-0 xs:mr-0 mr-2 w-full rounded-3xl  flex flex-col">
                <div class="w-full py-3  bg-primary-900 mb-5 rounded-3xl flex items-center pl-5">
                    <div class="text-white xs:text-lg text-2xl font-bold flex flex-row" >
                        <button  @click="toggleNav()" >
                            <i class="fa-solid fa-bars"></i>
                        </button>
                        <div  class="ml-3 ">Pengaturan Sistem</div>
                    </div>
                </div>
                <div class="w-full h-full flex flex-row xs:flex-col  gap-4 rounded-3xl  overflow-hidden overflow-y-auto ">
                    <div class="flex flex-col  w-3/5 xs:w-full rounded-t-3xl">
                        <div class="flex flex-col">
                            <div>
                                <div class="bg-primary-900 rounded-t-2xl px-10 text-center w-full text-white py-3 font-semibold text-2xl xs:text-lg">JADWAL PEMBERIAN PAKAN</div>
                                <div class=" bg-white rounded-b-3xl shadow-lg py-2">
                                    <div class="bg-secondary-800 rounded-2xl  mx-5 my-5 px-5 py-5 xs:mx-3 xs:my-3 xs:py-3 gap-4">
                                        <div class="w-full bg-primary-900 rounded-2xl py-3 px-7 text-white text-lg font-semibold xs:text-center">Form Pemberian Pakan</div>
                                        <div class="flex flex-row  gap-4 xs:gap-0.5 mt-4 h-full">
                                            <div class="w-3/5 bg-white rounded-xl px-5 py-7 xs:px-2 xs:py-4">
                                                <form  @submit.prevent="updateFeeding" action="">
                                                    <div class="mb-4">
                                                        <label class="block text-gray-700 text-lg font-bold mb-2 xs:text-base" for="username">
                                                            Pagi :
                                                        </label>
                                                        <input  v-model="update_feeding.waktu_pagi"
                                                            class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                                            type="text" placeholder="Jadwal pagi">
                                                    </div>
                                                    <div class="mb-6">
                                                        <label class="block text-gray-700 text-lg font-bold mb-2 xs:text-base" for="password">
                                                            Siang :
                                                        </label>
                                                        <input v-model="update_feeding.waktu_siang"
                                                            class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                                            type="text" placeholder="Jadwal Siang">
                                                    </div>
                                                    <div class="mb-6">
                                                        <label class="block text-gray-700 text-lg font-bold mb-2 xs:text-base" for="password">
                                                            Malam :
                                                        </label>
                                                        <input v-model="update_feeding.waktu_malam"
                                                            class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                                            type="text" placeholder="Jadwal Malam">
                                                    </div>
                                                    <div class="flex flex-row justify-end">
                                                        <!-- <button class="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-5 rounded-xl">Batal</button> -->
                                                        <button class="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-5 rounded-xl ml-2">Simpan</button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="flex flex-col w-2/5 text-gray-700 rounded-xl  justify-center  px-5 xs:px-0 xs:pl-3">
                                                <div v-for="(c,i) in feeding_times" :key="i" class="flex flex-row bg-cream-900   rounded-xl px-5 xs:px-3 xs:py-3 py-5 items-center gap-1 my-2">
                                                    <div class="mr-3  w-1/4 flex justify-center items-start">
                                                        <i class="fa-regular fa-clock text-5xl xs:text-3xl"></i>
                                                    </div>
                                                    <div class="w-full text-center xs:pr-7">
                                                        <div class="text-2xl xs:text-base font-bold">{{c.name}}</div>
                                                        <div class="h-1 xs:h1/2 w-full rounded-xl bg-black"></div>
                                                        <div class="font-bold text-xl xs:text-base">{{c.time.substring(0, 5)}}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- limit sensor temperature -->
                            <div class="col-span-2  bg-white mb-10 mt-5 rounded-t-3xl rounded-b-3xl shadow-lg">
                                <div class="bg-primary-900 rounded-t-2xl px-10 text-center w-full text-white py-3 font-semibold text-2xl xs:text-lg">
                                    LIMIT SENSOR TEMPERATUR
                                </div>
                                <div class="flex flex-row w-full justify-between items-center">
                                    <div class="bg-cream-900 w-1/2 ml-5 mr-2 my-5 px-3 py-3 xs:px-2 h-auto rounded-3xl">
                                        <form @submit.prevent="updateTemperatur" action="">
                                            <label class="block text-gray-700 text-lg font-bold mb-2 xs:text-sm" for="password">
                                                Batas Minimum :
                                            </label>
                                            <input v-model="update_temperatur.min_limit"
                                                class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                                type="text" placeholder="1">
                                            <label class="block text-gray-700 text-lg font-bold mb-2  xs:text-sm mt-2" for="password">
                                                Batas Maksimum :
                                            </label>
                                            <input v-model="update_temperatur.max_limit"
                                                class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                                type="text" placeholder="6">
                                            <div class="flex flex-row justify-end mt-3  xs:text-sm">
                                                <!-- <button class="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-xl">Batal</button> -->
                                                <button  type="submit" class="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded-xl ml-2">Simpan</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="w-1/2 flex ml-2 mr-5 my-5  flex-col items-center">
                                        <div class="bg-secondary-800 h-auto mx-3 my-3 rounded-3xl w-full flex items-center justify-center flex-col py-5">
                                            <div class="font-semibold text-xl xs:text-sm">Batas Minimum</div>
                                            <div class="font-semibold text-2xl xs:text-lg">{{temperatur.min_limit}}°C</div>
                                        </div>
                                        <div class="bg-primary-900 text-white h-auto mx-3 my-3 rounded-3xl w-full flex items-center justify-center flex-col py-5">
                                            <div class="font-semibold text-xl xs:text-sm">Batas Maksimum</div>
                                            <div class="font-semibold text-2xl xs:text-lg">{{temperatur.max_limit}}°C</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end colom 1 -->
                    <div class="w-2/5 xs:w-full ">
                        <div class="col-span-2  bg-white rounded-t-3xl rounded-b-3xl shadow-lg">
                            <div class="bg-primary-900 rounded-t-2xl px-10 text-center w-full text-white py-3 font-semibold text-2xl xs:text-lg">
                                LIMIT SENSOR PH
                            </div>
                            <div class="flex flex-row w-full  justify-between items-center">
                                <div class="bg-cream-900 w-1/2 ml-5 mr-2 my-5 px-3 py-3 h-auto rounded-3xl">
                                    <form @submit.prevent="updatePH" action="">
                                        <label class="block text-gray-700 text-lg font-bold mb-2 xs:text-xs" for="password">
                                            Batas Minimum :
                                        </label>
                                        <input v-model="update_pH.min_limit"
                                            class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                            type="text" placeholder="1">
                                        <label class="block text-gray-700 text-lg font-bold mb-2 xs:text-xs mt-2" for="password">
                                            Batas Maksimum :
                                        </label>
                                        <input v-model="update_pH.max_limit"
                                            class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                            type="text" placeholder="6">
                                        <div class="flex flex-row justify-end mt-3">
                                            <!-- <button class="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-xl">Batal</button> -->
                                            <button  type="submit" class="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded-xl ml-2">Simpan</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="w-1/2 flex ml-2 mr-5 my-5  flex-col items-center">
                                    <div class="bg-secondary-800 h-auto mx-3 my-3 rounded-3xl w-full flex items-center justify-center flex-col py-5">
                                        <div class="font-semibold text-xl xs:text-base">Batas Minimum</div>
                                        <div class="font-semibold text-2xl xs:text-lg">{{pH.min_limit}} pH</div>
                                    </div>
                                    <div class="bg-primary-900 text-white h-auto mx-3 my-3 rounded-3xl w-full flex items-center justify-center flex-col py-5">
                                        <div class="font-semibold text-xl xs:text-base">Batas Maksimum</div>
                                        <div class="font-semibold text-2xl xs:text-lg">{{pH.max_limit}} pH</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Sensor Turbidity -->
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
// import Sidebar from '../components/Sidebar.vue';
import Swal from 'sweetalert2'
import { BACKEND_SERVICE_URL } from '../constant';
// import mqtt from 'mqtt'
export default {
    data() {
        return {
            showMenu : true,
            temperatur : 0,
            turbidity : 0,
            pH : 0,
            feeding_times : [],

            update_feeding : {
                waktu_pagi : '',
                waktu_siang : '',
                waktu_malam : ''
            },

            update_pH :{
                min_limit : null,
                max_limit : null
            },

            update_temperatur : {
                min_limit : null,
                max_limit : null
            },

            update_turbidity : {
                min_limit : null
            }

        }
    },
    // components: {
    //     Sidebar,
    // },
    methods: {
        toggleNav(){
            this.showMenu = this.showMenu===false?true:false
            // console.log(this.showMenu)
        },
        getLimit(){
            axios
                .get(`${BACKEND_SERVICE_URL}/limits`)
                .then(r => {
                    this.turbidity = r.data.data[0]
                    this.temperatur = r.data.data[1]
                    this.pH = r.data.data[2]

                    this.update_turbidity.min_limit = this.turbidity.min_limit.toString()

                    this.update_temperatur.min_limit = this.temperatur.min_limit.toString()
                    this.update_temperatur.max_limit = this.temperatur.max_limit.toString()

                    this.update_pH.min_limit = this.pH.min_limit.toString()
                    this.update_pH.max_limit = this.pH.max_limit.toString()

                }).catch(e => {
                    console.dir(e);
                });
        },
        getFeedingTimes(){
            axios
                .get(`${BACKEND_SERVICE_URL}/feeding_times`)
                .then(r => {

                    this.feeding_times = r.data.data
                    // console.log('sadas',this.feeding_times)
                    this.update_feeding.waktu_pagi = this.feeding_times[0].time.substring(0, 5)
                    this.update_feeding.waktu_siang = this.feeding_times[1].time.substring(0, 5)
                    this.update_feeding.waktu_malam = this.feeding_times[2].time.substring(0, 5)
                }).catch(e => {
                    console.dir(e);
                });
        },
        updateFeeding(){
            function update(id,data){
                var dat = {
                    time : data
                }
                axios
                    .put(`${BACKEND_SERVICE_URL}/feeding_times/${id}`,dat)
                    // .then(r =>{
                    //     console.log(r)
                    // })
            }
            try{
                update(1,this.update_feeding.waktu_pagi);
                update(2,this.update_feeding.waktu_siang);
                update(3,this.update_feeding.waktu_malam);
                Swal.fire(
                    'Berhasil!',
                    'Data jadwal pakan berhasil diupdate!',
                    'success'
                )
                this.getFeedingTimes()
            }catch(err){
                console.log(err)
            }
        },
        updateTurbidity(){
            // console.log(this.update_turbidity)
            axios
                .put(`${BACKEND_SERVICE_URL}/limits/1`,this.update_turbidity)
                .then(r =>{
                    if(r.data.status==='success'){
                        Swal.fire(
                            'Berhasil!',
                            'Data limit turbidity berhasil diupdate!',
                            'success'
                        )
                    }
                    this.getLimit()
                })
                .catch(e => {
                    Swal.fire(
                        'Gagal!',
                        'Terjadi kesalahan saat proses update data',
                        'error'
                    );
                    console.dir(e);
                });
        },
        updateTemperatur(){
            axios
                .put(`${BACKEND_SERVICE_URL}/limits/2`,this.update_temperatur)
                .then(r =>{
                    if(r.data.status==='success'){
                        Swal.fire(
                            'Berhasil!',
                            'Data limit temperatur berhasil diupdate!',
                            'success'
                        )
                    }
                    this.getLimit()
                })
                .catch(e => {
                    Swal.fire(
                        'Gagal!',
                        'Terjadi kesalahan saat proses update data',
                        'error'
                    );
                    console.dir(e);
                });
        },
        updatePH(){
            axios
                .put(`${BACKEND_SERVICE_URL}/limits/3`,this.update_pH)
                .then(r =>{
                    // console.log(r.data.status==='success')
                    if(r.data.status==='success'){
                        Swal.fire(
                            'Berhasil!',
                            'Data limit pH berhasil diupdate!',
                            'success'
                        )
                    }
                    this.getLimit()
                })
                .catch(e => {
                    Swal.fire(
                        'Gagal!',
                        'Terjadi kesalahan saat proses update data',
                        'error'
                    );
                    console.dir(e);
                });
        },
    },
    mounted(){
        this.getLimit(),
        this.getFeedingTimes()

    }
}
</script>