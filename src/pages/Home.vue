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
            <!-- <Sidebar></Sidebar> -->
            <main class="h-full ml-3 xs:ml-0 xs:mr-0 mr-2 w-full rounded-3xl  flex flex-col">
                <div class="w-full py-3  bg-primary-900 mb-5 rounded-3xl flex items-center pl-5">
                    <div class="text-white xs:text-lg text-2xl font-bold flex flex-row" >
                        <button  @click="toggleNav()" >
                            <i class="fa-solid fa-bars"></i>
                        </button>
                        <div class="ml-3">Beranda</div>
                    </div>
                </div>
                <div class="w-full h-full rounded-3xl flex flex-row xs:flex-col gap-6 overflow-hidden overflow-y-auto">
                    <div class="w-1/2 xs:w-full h-auto bg-white shadow-xl mr-2 rounded-3xl flex flex-col xs:mt-3">
                        <div class="bg-primary-900 h-11 flex items-center justify-center rounded-t-2xl">
                            <div class=" py-5 text-2xl xs:text-lg font-bold text-white">
                                Kolam 1
                            </div>
                        </div>
                        <div class="flex flex-col  px-5 py-5  h-full gap-5">
                            <div class="flex flex-row  w-full bg-secondary-900 rounded-3xl">
                                <div class="w-1/2 mr-2 px-7 xs:px-3 py-5 flex flex-row items-center text-white font-bold">
                                    <div class="flex flex-col w-2/3">
                                        <div class="text-lg xs:text-base">SISA PAKAN</div>
                                        <div class="text-3xl xs:text-xl">80%</div>
                                    </div>
                                    <div class="bg-white py-3 px-3 w-1/3 rounded-3xl shadow-md">
                                        <img src="../assets/check.png" alt="" >
                                    </div>
                                </div>
                                <div class="w-2  bg-white my-2 rounded-xl "></div>
                                <div class="w-1/2 mr-2 px-7 py-5 flex flex-col text-white justify-center font-bold">
                                    <div class="text-lg xs:text-base">PAKAN BERIKUTNYA</div>
                                    <div class="text-3xl xs:text-xl">20:00</div>
                                </div>
                            </div>
                            <div class="flex flex-row w-full gap-3">
                                <div class="flex flex-col w-1/2 bg-secondary-800 rounded-3xl px-5 py-5 ">
                                    <div class="flex flex-row">
                                        <div class="w-3/4 flex flex-col mr-2">
                                            <div class="font-semibold text-3xl xs:text-2xl">8.8</div>
                                            <div class="w-28 h-1 rounded-xl bg-black"></div>
                                            <div class="font-semibold text-xl xs:text-lg">pH Kolam</div>
                                        </div>
                                        <div class="w-1/4 flex items-center justify-center">
                                            <div class="h-16 w-16 xs:h-10 xs:w-10 rounded-2xl bg-white p-3 xs:p-1 shadow-md">
                                                <img class="p-1" src="../assets/up_red.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-row items-center justify-between  h-auto mt-5 rounded-2xl bg-white mx-3 px-5 py-3 xs:mx-1 xs:px-3 xs:py-2 shadow-md">
                                        <div class="h-full flex flex-col items-center">
                                            <div >
                                                <img src="../assets/down_red.png" class="h-7 xs:h-5" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1 ">pH {{pH.min_limit}}</div>
                                        </div>
                                        <div class="w-1 bg-black rounded-2xl"></div>
                                        <div class="h-full flex flex-col items-center ">
                                            <div>
                                                <img src="../assets/check.png" class="h-7 xs:h-5" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1 text-center">{{pH.min_limit}}pH-{{pH.max_limit}}pH</div>
                                        </div>
                                        <div class="w-1 bg-black rounded-2xl"></div>
                                        <div class="h-full flex flex-col items-center">
                                            <div>
                                                <img src="../assets/up_red.png" class="h-7 xs:h-5" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1">>pH {{pH.max_limit}}</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex flex-col w-1/2 bg-cream-900  rounded-3xl px-5 py-5 ">
                                    <div class="flex flex-row">
                                        <div class="w-3/4 flex flex-col mr-2">
                                            <div class="font-semibold text-3xl xs:text-2xl">18°C</div>
                                            <div class="w-full h-1 rounded-xl bg-black"></div>
                                            <div class="font-semibold text-lg xs:text-base">Temperatur</div>
                                        </div>
                                        <div class="w-1/4 flex items-center justify-center">
                                            <div class="h-16 w-16 xs:h-10 xs:w-10 rounded-2xl bg-white p-3 xs:p-1 shadow-md">
                                                <img class="p-1" src="../assets/down_red.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-row items-center justify-between  h-auto mt-5 rounded-2xl bg-white mx-3 px-5 py-3 xs:mx-1 xs:px-3 xs:py-2 shadow-md">
                                        <div class="h-full flex flex-col items-center">
                                            <div>
                                                <img src="../assets/down_red.png" class="h-7 xs:h-5" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1 text-center">{{temperatur.min_limit}}°C</div>
                                        </div>
                                        <div class="w-1 bg-black rounded-2xl"></div>
                                        <div class="h-full flex flex-col items-center">
                                            <div>
                                                <img src="../assets/check.png" class="h-7 xs:h-5" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1 text-center">{{temperatur.min_limit}}°C - {{temperatur.max_limit}}°C</div>
                                        </div>
                                        <div class="w-1 bg-black rounded-2xl"></div>
                                        <div class="h-full flex flex-col items-center">
                                            <div>
                                                <img src="../assets/up_red.png" class="h-7 xs:h-5" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1 text-center">>{{temperatur.max_limit}}°C</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="w-full  bg-secondary-900 rounded-3xl px-5 py-7 flex flex-row justify-center gap-4 xs:gap-1">
                                <div class="flex flex-col  text-white font-bold w-2/3 " >
                                    <div class="text-3xl xs:text-2xl">5,00 </div>
                                    <div class="h-1 w-60 mt-1 rounded-xl bg-white"></div>
                                    <div class="text-2xl xs:text-xl">Kekeruhan Air Kolam</div>
                                    <div class="flex w-44 flex-row items-center justify-between text-black h-auto mt-5 rounded-2xl bg-white mx-3 px-5 py-3 shadow-md">
                                        <div class="h-full flex flex-col items-center ">
                                            <div>
                                                <img src="../assets/warning.png" class="h-7" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1 text-center">{{turbidity.min_limit}} NTU</div>
                                        </div>
                                        <div class="w-1 bg-black rounded-2xl"></div>
                                        <div class="h-full  flex flex-col items-center">
                                            <div>
                                                <img src="../assets/check.png" class="h-7" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1 text-center">>= {{turbidity.min_limit}} NTU</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-center ml-10 xs:ml-5 w-1/3 justify-center">
                                    <div class="bg-white py-5 px-5 xs:px-2 xs:py-2 h-auto rounded-3xl shadow-md">
                                        <img src="../assets/check.png" class="h-28 xs:h-16"  alt="" >
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="w-1/2 xs:w-full h-auto bg-white shadow-xl mr-2 rounded-3xl flex flex-col xs:mt-3">
                        <div class="bg-primary-900 h-11 flex items-center justify-center rounded-t-2xl">
                            <div class=" py-5 text-2xl xs:text-lg font-bold text-white">
                                Kolam 2
                            </div>
                        </div>
                        <div class="flex flex-col  px-5 py-5  h-full gap-5">
                            <div class="flex flex-row  w-full bg-secondary-900 rounded-3xl">
                                <div class="w-1/2 mr-2 px-7 xs:px-3 py-5 flex flex-row items-center text-white font-bold">
                                    <div class="flex flex-col w-2/3">
                                        <div class="text-lg xs:text-base">SISA PAKAN</div>
                                        <div class="text-3xl xs:text-xl">80%</div>
                                    </div>
                                    <div class="bg-white py-3 px-3 w-1/3 rounded-3xl shadow-md">
                                        <img src="../assets/check.png" alt="" >
                                    </div>
                                </div>
                                <div class="w-2  bg-white my-2 rounded-xl "></div>
                                <div class="w-1/2 mr-2 px-7 py-5 flex flex-col text-white justify-center font-bold">
                                    <div class="text-lg xs:text-base">PAKAN BERIKUTNYA</div>
                                    <div class="text-3xl xs:text-xl">20:00</div>
                                </div>
                            </div>
                            <div class="flex flex-row w-full gap-3">
                                <div class="flex flex-col w-1/2 bg-secondary-800 rounded-3xl px-5 py-5 ">
                                    <div class="flex flex-row">
                                        <div class="w-3/4 flex flex-col mr-2">
                                            <div class="font-semibold text-3xl xs:text-2xl">8.8</div>
                                            <div class="w-28 h-1 rounded-xl bg-black"></div>
                                            <div class="font-semibold text-xl xs:text-lg">pH Kolam</div>
                                        </div>
                                        <div class="w-1/4 flex items-center justify-center">
                                            <div class="h-16 w-16 xs:h-10 xs:w-10 rounded-2xl bg-white p-3 xs:p-1 shadow-md">
                                                <img class="p-1" src="../assets/up_red.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-row items-center justify-between  h-auto mt-5 rounded-2xl bg-white mx-3 px-5 py-3 xs:mx-1 xs:px-3 xs:py-2 shadow-md">
                                        <div class="h-full flex flex-col items-center">
                                            <div >
                                                <img src="../assets/down_red.png" class="h-7 xs:h-5" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1">pH {{pH.min_limit}}</div>
                                        </div>
                                        <div class="w-1 bg-black rounded-2xl"></div>
                                        <div class="h-full flex flex-col items-center ">
                                            <div>
                                                <img src="../assets/check.png" class="h-7 xs:h-5" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1 text-center">{{pH.min_limit}}pH-{{pH.max_limit}}pH</div>
                                        </div>
                                        <div class="w-1 bg-black rounded-2xl"></div>
                                        <div class="h-full flex flex-col items-center">
                                            <div>
                                                <img src="../assets/up_red.png" class="h-7 xs:h-5" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1">>pH {{pH.max_limit}}</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex flex-col w-1/2 bg-cream-900  rounded-3xl px-5 py-5 ">
                                    <div class="flex flex-row">
                                        <div class="w-3/4 flex flex-col mr-2">
                                            <div class="font-semibold text-3xl xs:text-2xl">18°C</div>
                                            <div class="w-full h-1 rounded-xl bg-black"></div>
                                            <div class="font-semibold text-lg xs:text-base">Temperatur</div>
                                        </div>
                                        <div class="w-1/4 flex items-center justify-center">
                                            <div class="h-16 w-16 xs:h-10 xs:w-10 rounded-2xl bg-white p-3 xs:p-1 shadow-md">
                                                <img class="p-1" src="../assets/down_red.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-row items-center justify-between  h-auto mt-5 rounded-2xl bg-white mx-3 px-5 py-3 xs:mx-1 xs:px-3 xs:py-2 shadow-md">
                                        <div class="h-full flex flex-col items-center">
                                            <div>
                                                <img src="../assets/down_red.png" class="h-7 xs:h-5" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1 text-center">{{temperatur.min_limit}}°C</div>
                                        </div>
                                        <div class="w-1 bg-black rounded-2xl"></div>
                                        <div class="h-full flex flex-col items-center">
                                            <div>
                                                <img src="../assets/check.png" class="h-7 xs:h-5" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1 text-center">{{temperatur.min_limit}}°C - {{temperatur.max_limit}}°C</div>
                                        </div>
                                        <div class="w-1 bg-black rounded-2xl"></div>
                                        <div class="h-full flex flex-col items-center">
                                            <div>
                                                <img src="../assets/up_red.png" class="h-7 xs:h-5" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1 text-center">>{{temperatur.max_limit}}°C</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="w-full  bg-secondary-900 rounded-3xl px-5 py-7 flex flex-row justify-center gap-4 xs:gap-1">
                                <div class="flex flex-col  text-white font-bold w-2/3 " >
                                    <div class="text-3xl xs:text-2xl">5,00 </div>
                                    <div class="h-1 w-60 mt-1 rounded-xl bg-white"></div>
                                    <div class="text-2xl xs:text-xl">Kekeruhan Air Kolam</div>
                                    <div class="flex w-44 flex-row items-center justify-between text-black h-auto mt-5 rounded-2xl bg-white mx-3 px-5 py-3 shadow-md">
                                        <div class="h-full flex flex-col items-center ">
                                            <div>
                                                <img src="../assets/warning.png" class="h-7" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1 text-center">{{turbidity.min_limit}} NTU</div>
                                        </div>
                                        <div class="w-1 bg-black rounded-2xl"></div>
                                        <div class="h-full  flex flex-col items-center">
                                            <div>
                                                <img src="../assets/check.png" class="h-7" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1 text-center">>= {{turbidity.min_limit}} NTU</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-center ml-10 xs:ml-5 w-1/3 justify-center">
                                    <div class="bg-white py-5 px-5 xs:px-2 xs:py-2 h-auto rounded-3xl shadow-md">
                                        <img src="../assets/check.png" class="h-28 xs:h-16"  alt="" >
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
// import Sidebar from '../components/Sidebar.vue';
export default {
    data() {
        return {
            showMenu : true,
            temperatur : 0,
            turbidity : 0,
            pH : 0,
        }
    },
    // components: {
    //     Sidebar,
    // },
    methods: {
        toggleNav(){
            this.showMenu = this.showMenu===false?true:false
        },
        getLimit(){
            axios
                .get(`http://localhost:3000/limits`)
                .then(r => {
                    this.turbidity = r.data.data[0]
                    this.temperatur = r.data.data[1]
                    this.pH = r.data.data[2]

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