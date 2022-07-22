<template>
    <div class="h-screen py-5 px-5">
        <div class="flex h-full flex-row">
            <Sidebar></Sidebar>
            <main class="h-full ml-3 mr-2 w-full rounded-3xl  flex flex-col">
                <div class="w-full py-3  bg-primary-900 mb-5 rounded-3xl flex items-center pl-5">
                    <div class="text-white text-3xl font-bold">
                        Pengaturan Sistem
                    </div>
                </div>
                <div class="w-full h-full flex flex-row gap-4 rounded-3xl  overflow-hidden overflow-y-auto ">
                    <div class="flex flex-col h-10 w-3/5 rounded-t-3xl ">
                        <div class="flex flex-col">
                            <div>
                                <div class="bg-primary-900 rounded-t-2xl px-10 text-center w-full text-white py-3 font-semibold text-2xl">JADWAL PEMBERIAN PAKAN</div>
                                <div class=" bg-white rounded-b-3xl shadow-lg py-2">
                                    <div class="bg-secondary-800 rounded-2xl  mx-5 my-5 px-5 py-5 gap-4">
                                        <div class="w-full bg-primary-900 rounded-2xl py-3 px-7 text-white text-lg font-semibold ">Form Pemberian Pakan</div>
                                        <div class="flex flex-row  gap-4 mt-4 h-full">
                                            <div class="w-3/5 bg-white rounded-xl px-5 py-7">
                                                <form action="">
                                                    <div class="mb-4">
                                                        <label class="block text-gray-700 text-lg font-bold mb-2" for="username">
                                                            Pagi :
                                                        </label>
                                                        <input
                                                            class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                                            type="text" placeholder="Jadwal pagi">
                                                    </div>
                                                    <div class="mb-6">
                                                        <label class="block text-gray-700 text-lg font-bold mb-2" for="password">
                                                            Siang :
                                                        </label>
                                                        <input
                                                            class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                                            type="text" placeholder="Jadwal Siang">
                                                    </div>
                                                    <div class="mb-6">
                                                        <label class="block text-gray-700 text-lg font-bold mb-2" for="password">
                                                            Malam :
                                                        </label>
                                                        <input
                                                            class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                                            type="text" placeholder="Jadwal Malam">
                                                    </div>
                                                    <div class="flex flex-row justify-end">
                                                        <button class="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-5 rounded-xl">Batal</button>
                                                        <button class="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-5 rounded-xl ml-2">Simpan</button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="flex flex-col w-2/5 text-gray-700 rounded-xl items-center justify-center px-5">
                                                <div class="flex flex-row bg-cream-900  w-full  rounded-xl px-5 py-5 items-center justify-center gap-1">
                                                    <div class="mr-3 w-1/4">
                                                        <i class="fa-regular fa-clock text-5xl"></i>
                                                    </div>
                                                    <div class="w-full text-center">
                                                        <div class="text-2xl font-bold">PAGI</div>
                                                        <div class="h-1 w-full rounded-xl bg-black"></div>
                                                        <div class="font-bold text-xl">07:00</div>
                                                    </div>
                                                </div>
                                                <div class="flex flex-row bg-cream-900  w-full  rounded-xl px-5 py-5 items-center justify-center gap-1 mt-4">
                                                    <div class="mr-3 w-1/4">
                                                        <i class="fa-regular fa-clock text-5xl"></i>
                                                    </div>
                                                    <div class="w-full text-center">
                                                        <div class="text-2xl font-bold">SIANG</div>
                                                        <div class="h-1 w-full rounded-xl bg-black"></div>
                                                        <div class="font-bold text-xl">07:00</div>
                                                    </div>
                                                </div>
                                                <div class="flex flex-row bg-cream-900  w-full  rounded-xl px-5 py-5 items-center justify-center gap-1 mt-4">
                                                    <div class="mr-3 w-1/4">
                                                        <i class="fa-regular fa-clock text-5xl"></i>
                                                    </div>
                                                    <div class="w-full text-center">
                                                        <div class="text-2xl font-bold">MALAM</div>
                                                        <div class="h-1 w-full rounded-xl bg-black"></div>
                                                        <div class="font-bold text-xl">07:00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- limit sensor temperature -->
                            <div class="col-span-2  bg-white mb-10 mt-5 rounded-t-3xl rounded-b-3xl shadow-lg">
                                <div class="bg-primary-900 rounded-t-2xl px-10 text-center w-full text-white py-3 font-semibold text-2xl">LIMIT SENSOR TEMPERATUR</div>
                                <div class="flex flex-row w-full justify-between items-center">
                                    <div class="bg-cream-900 w-1/2 ml-5 mr-2 my-5 px-3 py-3 h-auto rounded-3xl">
                                        <form action="">
                                            <label class="block text-gray-700 text-lg font-bold mb-2" for="password">
                                                Batas Minimum :
                                            </label>
                                            <input
                                                class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                                type="text" placeholder="1">
                                            <label class="block text-gray-700 text-lg font-bold mb-2" for="password">
                                                Batas Maksimum :
                                            </label>
                                            <input
                                                class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                                type="text" placeholder="6">
                                            <div class="flex flex-row justify-end mt-3">
                                                <button class="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-xl">Batal</button>
                                                <button class="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded-xl ml-2">Simpan</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="w-1/2 flex ml-2 mr-5 my-5  flex-col items-center">
                                        <div class="bg-secondary-800 h-auto mx-3 my-3 rounded-3xl w-full flex items-center justify-center flex-col py-5">
                                            <div class="font-semibold text-xl ">Batas Minimum</div>
                                            <div class="font-semibold text-2xl">6 pH</div>
                                        </div>
                                        <div class="bg-primary-900 text-white h-auto mx-3 my-3 rounded-3xl w-full flex items-center justify-center flex-col py-5">
                                            <div class="font-semibold text-xl ">Batas Maksimum</div>
                                            <div class="font-semibold text-2xl">6 pH</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end colom 1 -->
                    <div class="w-2/5 ">
                        <div class="col-span-2  bg-white rounded-t-3xl rounded-b-3xl shadow-lg">
                            <div class="bg-primary-900 rounded-t-2xl px-10 text-center w-full text-white py-3 font-semibold text-2xl">LIMIT SENSOR PH</div>
                            <div class="flex flex-row w-full justify-between items-center">
                                <div class="bg-cream-900 w-1/2 ml-5 mr-2 my-5 px-3 py-3 h-auto rounded-3xl">
                                    <form action="">
                                        <label class="block text-gray-700 text-lg font-bold mb-2" for="password">
                                            Batas Minimum :
                                        </label>
                                        <input
                                            class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                            type="text" placeholder="1">
                                        <label class="block text-gray-700 text-lg font-bold mb-2" for="password">
                                            Batas Maksimum :
                                        </label>
                                        <input
                                            class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                            type="text" placeholder="6">
                                        <div class="flex flex-row justify-end mt-3">
                                            <button class="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-xl">Batal</button>
                                            <button class="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded-xl ml-2">Simpan</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="w-1/2 flex ml-2 mr-5 my-5  flex-col items-center">
                                    <div class="bg-secondary-800 h-auto mx-3 my-3 rounded-3xl w-full flex items-center justify-center flex-col py-5">
                                        <div class="font-semibold text-xl ">Batas Minimum</div>
                                        <div class="font-semibold text-2xl">6 pH</div>
                                    </div>
                                    <div class="bg-primary-900 text-white h-auto mx-3 my-3 rounded-3xl w-full flex items-center justify-center flex-col py-5">
                                        <div class="font-semibold text-xl ">Batas Maksimum</div>
                                        <div class="font-semibold text-2xl">6 pH</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Sensor Turbidity -->
                        <div class="col-span-2 mt-5  bg-white rounded-t-3xl rounded-b-3xl shadow-lg">
                            <div class="bg-primary-900 rounded-t-2xl px-10 text-center w-full text-white py-3 font-semibold text-2xl">
                                LIMIT SENSOR TURBIDITY
                            </div>
                            <div class="flex flex-row w-full justify-between items-center">
                                <div class="bg-cream-900 w-1/2 ml-5 mr-2 my-5 px-3 py-3 h-auto rounded-3xl">
                                    <form action="">
                                        <label class="block text-gray-700 text-lg font-bold mb-2" for="password">
                                            Batas Minimum :
                                        </label>
                                        <input
                                            class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                            type="text" placeholder="1">
                                        <div class="flex flex-row justify-end mt-3">
                                            <button class="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-xl">Batal</button>
                                            <button class="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded-xl ml-2">Simpan</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="w-1/2 ml-2 mr-5 flex flex-col items-center">
                                    <div class="bg-secondary-800 h-auto mx-3 my-3 rounded-3xl w-full flex items-center justify-center flex-col py-5">
                                        <div class="font-semibold text-xl ">Batas Minimum</div>
                                        <div class="font-semibold text-2xl">6 pH</div>
                                    </div>
                                    <div class="bg-primary-900 text-white h-auto mx-3 my-3 rounded-3xl w-full flex items-center justify-center flex-col py-5">
                                        <div class="font-semibold text-xl ">Batas Maksimum</div>
                                        <div class="font-semibold text-2xl">6 pH</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Sidebar from '../components/Sidebar.vue';
// import mqtt from 'mqtt'
export default {
    data() {
        return {
            temperatur : null,
            turbidity : null,
            pH : null
        }
    },
    components: {
        Sidebar,
    },
    methods: {
        getLimit(){
            axios
                .get(`http://localhost:3000/limits`)
                .then(r => {
                    console.log(r.data.data)
                    this.turbidity = r.data.data[0]
                    this.temperatur = r.data.data[1]
                    this.pH = r.data.data[3]

                    console.log(this.turbidity)
                }).catch(e => {
                    console.dir(e);
                });
        }
    },
    mounted(){
        this.getLimit()
    }
}
</script>