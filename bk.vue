
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

            <!-- <Sidebar></Sidebar> -->
            <main class="h-full mx-3 w-full rounded-3xl  flex flex-col">
                <div class="w-full py-3  bg-primary-900 mb-5 rounded-3xl flex items-center pl-5">
                    <div class="text-white text-xl font-bold flex flex-row" >
                        <button  @click="toggleNav()" >
                            <i class="fa-solid fa-bars"></i>
                        </button>
                        <div  class="ml-3 ">Output Sensor</div>
                        <!-- <canvas id="myChart" width="400" height="400"></canvas> -->
                    </div>
                </div>
                <div class="w-full h-full rounded-3xl flex flex-row xs:flex-col gap-6  overflow-y-auto">
                    <div class="w-1/3 xs:w-full h-full bg-white shadow-xl mr-2 rounded-3xl flex flex-col ">
                        <canvas id="myChart" class="w-full h-4 mb-4" ></canvas>
                        <div class="h-14 rounded-t-3xl bg-secondary-900 px-4 py-4 text-lg font-bold text-white">
                            <div>Data Sensor Turbidity</div>
                        </div>
                        <div class="px-4 py-4 h-auto flex justify-center flex-col">
                            <div class="flex flex-row gap-2 my-2 text-white font-bold justify-center">
                                <button @click="getDataSensor(1)" class="bg-primary-900 hover:bg-blue-400 py-2 px-5 rounded-lg">All</button>
                                <button @click="getDataFilter(1,0)" class="bg-red-600 hover:bg-red-700 py-2 px-5 rounded-lg">Danger</button>
                                <button  @click="getDataFilter(1,1)" class="bg-green-600 hover:bg-green-700 py-2 px-5 rounded-lg">Normal</button>
                            </div>
                            <div class="w-full h-1 bg-gray-200 rounded-xl my-2"></div>
                            <div class="overflow-y-auto overflow-x-auto h-96 shadow-md sm:rounded-lg flex justify-center">
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
                    <div class="w-1/3 xs:w-full h-full bg-white shadow-xl mr-2 rounded-3xl flex flex-col ">
                        <canvas id="myChart2" class="w-full h-4 mb-4" ></canvas>
                        <div class="h-14 rounded-t-3xl bg-secondary-900 px-4 py-4 text-lg font-bold text-white">
                            <div>Data Sensor pH</div>
                        </div>
                        <div class="px-4 py-4 h-auto flex justify-center flex-col">
                            <div class="flex flex-row gap-2 my-2 text-white font-bold justify-center">
                                <button @click="getDataSensor(2)" class="bg-primary-900 hover:bg-blue-400 py-2 px-5 rounded-lg">All</button>
                                <button @click="getDataFilter(2,0)" class="bg-red-600 hover:bg-red-700 py-2 px-5 rounded-lg">Danger</button>
                                <button  @click="getDataFilter(2,1)" class="bg-green-600 hover:bg-green-700 py-2 px-5 rounded-lg">Normal</button>
                            </div>
                            <div class="w-full h-1 bg-gray-200 rounded-xl my-2"></div>
                            <div class="overflow-y-auto overflow-x-auto h-96 shadow-md sm:rounded-lg flex justify-center ">
                                <table class="w-auto text-sm text-left text-gray-500 ">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
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
                                        <tr  v-for="(c,i) in datapH" :key="i" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
                    <div class="w-1/3 xs:w-full h-full bg-white shadow-xl mr-2 rounded-3xl flex flex-col ">
                        <canvas id="myChart3" class="w-full h-4 mb-4" ></canvas>
                        <div class="h-14 rounded-t-3xl bg-secondary-900 px-4 py-4 text-lg font-bold text-white">
                            <div>Data Sensor Temperatur</div>
                        </div>
                        <div class="px-4 py-4 h-auto flex justify-center flex-col">
                            <div class="flex flex-row gap-2 my-2 text-white font-bold justify-center">
                                <button @click="getDataSensor(3)" class="bg-primary-900 hover:bg-blue-400 py-2 px-5 rounded-lg">All</button>
                                <button @click="getDataFilter(3,0)" class="bg-red-600 hover:bg-red-700 py-2 px-5 rounded-lg">Danger</button>
                                <button  @click="getDataFilter(3,1)" class="bg-green-600 hover:bg-green-700 py-2 px-5 rounded-lg">Normal</button>
                            </div>
                            <div class="w-full h-1 bg-gray-200 rounded-xl my-2"></div>
                            <div class="overflow-y-auto overflow-x-auto h-96 shadow-md sm:rounded-lg flex justify-center">
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
                                        <tr  v-for="(c,i) in dataTemperatur" :key="i" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 ">
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
                </div>
            </main>
        </div>
    </div>
</template>

<script>
// import Sidebar from '../components/Sidebar.vue';
import axios from 'axios';
import { BACKEND_SERVICE_URL } from '../constant';
import Chart from 'chart.js/auto';

export default {
    data() {
        return {
            showMenu : true,
            datapH : [],
            dataTurbidity :[],
            dataTemperatur : [],
            limit:{
                turbidity :[],
                temperatur : [],
                pH :[]
            }
        }
    },
    methods: {
        toggleNav(){
            this.showMenu = this.showMenu===false?true:false
        },
        date_format(v) {
            let date = new Date(v);
            return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
        },
        getDataSensor(id){
            if(id===1){
                axios
                .get(`${BACKEND_SERVICE_URL}/reports/${id}`)
                .then(r => {
                    this.dataTurbidity = r.data.data
                }).catch(e => {
                    console.dir(e);
                });

            }else if(id===2){
                axios
                .get(`${BACKEND_SERVICE_URL}/reports/${id}`)
                .then(r => {
                    this.dataTemperatur = r.data.data
                }).catch(e => {
                    console.dir(e);
                });
            }else if(id===3){
                axios
                    .get(`${BACKEND_SERVICE_URL}/reports/${id}`)
                    .then(r => {
                        this.datapH = r.data.data
                    }).catch(e => {
                        console.dir(e);
                    });
            }
        },
        getAll(){
            this.getDataSensor(1)
            this.getDataSensor(2)
            this.getDataSensor(3)
        },
        getLimit(){
            axios
                .get(`${BACKEND_SERVICE_URL}/limits`)
                .then(r => {
                    this.limit.turbidity = r.data.data[0]
                    this.limit.temperatur = r.data.data[1]
                    this.limit.pH = r.data.data[2]
                    
                }).catch(e => {
                    console.dir(e);
                });
        },
        async getDataFilter(id,cek){
            function getData(data, min_limit, max_limit){
                let outData = []
                var index = 0;
                for(let i=0; i<data.length; i++){
                    // filter data normal
                    if(cek===0){
                        if(data[i]['value']>=min_limit && data[i]['value']<=max_limit){
                            outData[index]= data[i]
                            index++
                        }
                    }
                    // filter data Danger
                    else if(cek===1){
                        if(data[i]['value']<min_limit || data[i]['value']>max_limit){
                            outData[index]= data[i]
                            index++
                        }
                    }
                }
                return outData
            }
            if(id===1){
                //call getData to get data by filter
                this.dataTurbidity=getData(this.dataTurbidity,this.limit.turbidity.min_limit, this.limit.turbidity.max_limit,cek)
            }else if(id===2){
                //call getData to get data by filter
                this.dataTemperatur=getData(this.dataTemperatur,this.limit.temperatur.min_limit, this.limit.temperatur.max_limit,cek)
            }else if(id===3){
                //call getData to get data by filter
                this.datapH=getData(this.datapH,this.limit.pH.min_limit, this.limit.pH.max_limit,cek)
            }
        },
        chart(name){
            console.log('data',this.dataTurbidity)
            const ctx = document.getElementById(name).getContext('2d');
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: 'My First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
            return myChart
        }
    },
    mounted(){
        this.getAll()
        this.getLimit()


    }
}
</script>


