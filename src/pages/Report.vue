<template>
    <div class="h-screen py-5 px-5">
        <div class="flex h-full flex-row">
            <aside :class="showMenu ? 'flex' : 'hidden'" class="h-full  mx-2 xs:px-2 w-40 flex items-center flex-col justify-center rounded-3xl bg-primary-900 ">
                <div class="w-20 xs:w-10 mb-7">
                    <img src="../assets/user.jpeg" alt=""  class="shadow rounded-full max-w-full h-auto align-middle border-4 border-white">
                </div>
                <router-link :to="{name: 'beranda', params:{}}">
                    <div class="flex flex-col items-center text-secondary-900 hover:text-white ">
                        <div class="flex items-center justify-center h-16 w-16 xs:w-10 xs:h-10 xs:rounded-xl rounded-2xl bg-white hover:bg-secondary-900">
                            <i class="fa-solid fa-house text-xl xs:lg"></i>
                        </div>
                        <div class="text-white text-base xs:text-xs mt-1">Report</div>
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
            <!-- <Sidebar></Sidebar> -->
            <main class="h-full mx-3 w-full rounded-3xl  flex flex-col">
                <div class="w-full py-3  bg-primary-900 mb-5 rounded-3xl flex items-center pl-5">
                    <div class="text-white text-xl font-bold flex flex-row" >
                        <button  @click="toggleNav()" >
                            <i class="fa-solid fa-bars"></i>
                        </button>
                        <div  class="ml-3 ">Beranda</div>
                    </div>
                </div>
                <div class="w-full h-full rounded-3xl flex flex-row xs:flex-col gap-6  overflow-y-auto">
                    <div class="w-1/3 xs:w-full h-full bg-white shadow-xl mr-2 rounded-3xl flex flex-col ">
                        <div class="h-14 rounded-t-3xl bg-secondary-900 px-4 py-4 text-lg font-bold text-white">
                            <div>Data Sensor Turbidity</div>
                        </div>
                        <div class="px-4 py-4 h-auto flex justify-center">
                            <div class="overflow-y-auto overflow-x-auto h-96 shadow-md sm:rounded-lg bg-gray-600">
                                <table class="w-auto text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="py-3 px-6">
                                                No
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                Nama
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                Value
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                Waktu
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr  v-for="(c,i) in dataTurbidity" :key="i" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row" class="text-center  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {{i+1}}
                                            </th>
                                            <td class="py-2 px-2">
                                                Turbidity
                                            </td>
                                            <td class="py-2 px-2 text-center">
                                                {{c.value}}
                                            </td>
                                            <td class="py-2 px-2">
                                                {{date_format(c.createdAt)}}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
            </main>
        </div>
    </div>
</template>

<script>
// import Sidebar from '../components/Sidebar.vue';
import axios from 'axios';
export default {
    data() {
        return {
            showMenu : true,
            datapH : [],
            dataTurbidity :[],
            dataTemperatur : []
        }
    },
    // components: {
    //     Sidebar,
    // },
    methods: {
        toggleNav(){
            this.showMenu = this.showMenu===false?true:false
            console.log(this.showMenu)
        },
        date_format(v) {
            let date = new Date(v);
            return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
        },
        getDataSensor(){
            axios
                .get(`http://localhost:3000/reports/1`)
                .then(r => {
                    this.dataTurbidity = r.data.data
                    console.log(this.dataTurbidity)
                }).catch(e => {
                    console.dir(e);
                });

            axios
                .get(`http://localhost:3000/reports/2`)
                .then(r => {
                    this.dataTurbidity = r.data.data
                    console.log(this.dataTemperatur)
                }).catch(e => {
                    console.dir(e);
                });

            axios
                .get(`http://localhost:3000/reports/3`)
                .then(r => {
                    this.datapH = r.data.data
                    console.log(this.datapH)
                }).catch(e => {
                    console.dir(e);
                });
        }
    },
    mounted(){
        this.getDataSensor()
    }
}
</script>