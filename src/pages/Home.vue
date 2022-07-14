<template>
    <div class="h-screen py-5 px-5">
        <div class="flex h-full flex-row">
            <!-- <aside class="xs:hidden  h-full mx-2 w-40 flex items-center flex-col justify-center rounded-3xl bg-primary-900 ">
                <div class="w-20 mb-7">
                    <img src="../assets/user.jpeg" alt=""  class="shadow rounded-full max-w-full h-auto align-middle border-4 border-white">
                </div>
                <router-link :to="'#'">
                    <div class="flex flex-col items-center text-secondary-900 hover:text-white ">
                        <div class="flex items-center justify-center h-16 w-16 rounded-2xl bg-white hover:bg-secondary-900">
                            <i class="fa-solid fa-house text-2xl"></i>
                        </div>
                        <div class="text-white text-base mt-1">Beranda</div>
                    </div>
                </router-link>
                <router-link :to="'#'" class="mt-4">
                    <div class="flex flex-col items-center text-secondary-900 hover:text-white ">
                        <div class="flex items-center justify-center h-16 w-16 rounded-2xl bg-white hover:bg-secondary-900">
                            <i class="fa-solid fa-burger text-2xl"></i>
                        </div>
                        <div class="text-white text-base mt-1">Pakan</div>
                    </div>
                </router-link >
                <router-link :to="'#'" class="mt-4">
                    <div class="flex flex-col items-center text-secondary-900 hover:text-white ">
                        <div class="flex items-center justify-center h-16 w-16 rounded-2xl bg-white hover:bg-secondary-900">
                            <i class="fa-solid fa-gear text-2xl"></i>
                        </div>
                        <div class="text-white text-base mt-1">Setting</div>
                    </div>
                </router-link>
                <router-link :to="'#'" class="mt-4">
                    <div class="flex flex-col items-center text-secondary-900 hover:text-white ">
                        <div class="flex items-center justify-center h-16 w-16 rounded-2xl bg-white hover:bg-secondary-900">
                            <i class="fa-solid fa-right-from-bracket text-2xl"></i>
                        </div>
                        <div class="text-white text-base mt-1">Logout</div>
                    </div>
                </router-link>
            </aside> -->
            <Sidebar></Sidebar>
            <main class="h-full mx-3 w-full rounded-3xl  flex flex-col">
                <div class="w-full py-3  bg-primary-900 mb-5 rounded-3xl flex items-center pl-5">
                    <div class="text-white text-2xl font-bold">
                        Beranda
                    </div>
                </div>
                <div class="w-full h-full rounded-3xl flex flex-row xs:flex-col gap-6 ">
                    <div class="w-1/2 xs:w-full h-full bg-white shadow-xl mr-2 rounded-3xl flex flex-col ">
                        <div class="bg-primary-900 h-11 flex items-center justify-center rounded-t-2xl">
                            <div class="text-white py-5 text-xl font-bold">
                                Kolam 1
                            </div>
                        </div>
                        <div class="flex flex-col  px-5 py-5 bg-white  h-full gap-5">
                            <div class="flex flex-row  w-full bg-secondary-900 rounded-3xl">
                                <div class="w-1/2 mr-2 px-7 py-5 flex flex-row items-center text-white font-bold">
                                    <div class="flex flex-col w-2/3">
                                        <div class="text-lg ">SISA PAKAN</div>
                                        <div class="text-3xl">80%</div>
                                    </div>
                                    <div class="bg-white py-3 px-3 w-1/3 rounded-3xl shadow-md">
                                        <img src="../assets/check.png" alt="" >
                                    </div>
                                </div>
                                <div class="w-2  bg-white my-2 rounded-xl "></div>
                                <div class="w-1/2 mr-2 px-7 py-5 flex flex-col text-white font-bold">
                                    <div class="text-lg ">INTENSITAS PAKAN</div>
                                    <div class="text-3xl">50 Menit</div>
                                </div>
                            </div>
                            <div class="flex flex-row w-full gap-3">
                                <div class="flex flex-col w-1/2 bg-secondary-800 rounded-3xl px-5 py-5 ">
                                    <div class="flex flex-row">
                                        <div class="w-3/4 flex flex-col mr-2">
                                            <div class="font-semibold text-3xl">8.8</div>
                                            <div class="w-28 h-1 rounded-xl bg-black"></div>
                                            <div class="font-semibold text-xl">pH Kolam</div>
                                        </div>
                                        <div class="w-1/4 flex items-center justify-center">
                                            <div class="h-16 w-16 rounded-2xl bg-white p-3 shadow-md">
                                                <img src="../assets/up_red.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-row items-center justify-between  h-auto mt-5 rounded-2xl bg-white mx-3 px-5 py-3 shadow-md">
                                        <div class="h-full flex flex-col items-center">
                                            <div>
                                                <img src="../assets/down_red.png" class="h-7" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1">pH 6</div>
                                        </div>
                                        <div class="w-1 bg-black rounded-2xl"></div>
                                        <div class="h-full flex flex-col items-center">
                                            <div>
                                                <img src="../assets/check.png" class="h-7" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1">6pH - 8pH</div>
                                        </div>
                                        <div class="w-1 bg-black rounded-2xl"></div>
                                        <div class="h-full flex flex-col items-center">
                                            <div>
                                                <img src="../assets/up_red.png" class="h-7" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1">>8.5pH</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex flex-col w-1/2 bg-cream-900 rounded-3xl px-5 py-5 ">
                                    <div class="flex flex-row">
                                        <div class="w-3/4 flex flex-col mr-2">
                                            <div class="font-semibold text-3xl">18°C</div>
                                            <div class="w-full h-1 rounded-xl bg-black"></div>
                                            <div class="font-semibold text-xl">Temperatur Kolam</div>
                                        </div>
                                        <div class="w-1/4 flex items-center justify-center">
                                            <div class="h-16 w-16 rounded-2xl bg-white p-3 shadow-md">
                                                <img src="../assets/down_red.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-row items-center justify-between  h-auto mt-5 rounded-2xl bg-white mx-3 px-5 py-3 shadow-md">
                                        <div class="h-full flex flex-col items-center">
                                            <div>
                                                <img src="../assets/down_red.png" class="h-7" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1">20°C</div>
                                        </div>
                                        <div class="w-1 bg-black rounded-2xl"></div>
                                        <div class="h-full flex flex-col items-center">
                                            <div>
                                                <img src="../assets/check.png" class="h-7" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1">20°C - 30°C</div>
                                        </div>
                                        <div class="w-1 bg-black rounded-2xl"></div>
                                        <div class="h-full flex flex-col items-center">
                                            <div>
                                                <img src="../assets/up_red.png" class="h-7" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1">>30°C</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="w-full  bg-secondary-900 rounded-3xl px-5 py-7 flex flex-row justify-center gap-4">
                                <div class="flex flex-col  text-white font-bold">
                                    <div class="text-3xl ">5,00 </div>
                                    <div class="h-1 w-60 mt-1 rounded-xl bg-white"></div>
                                    <div class="text-2xl">Kekeruhan Air Kolam</div>
                                    <div class="flex w-44 flex-row items-center justify-between text-black h-auto mt-5 rounded-2xl bg-white mx-3 px-5 py-3 shadow-md">
                                        <div class="h-full flex flex-col items-center ">
                                            <div>
                                                <img src="../assets/warning.png" class="h-7" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1 text-center">5 NTU</div>
                                        </div>
                                        <div class="w-1 bg-black rounded-2xl"></div>
                                        <div class="h-full  flex flex-col items-center">
                                            <div>
                                                <img src="../assets/check.png" class="h-7" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1 text-center">>=5 NTU</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-center ml-10">
                                    <div class="bg-white py-5 px-5 h-auto rounded-3xl shadow-md">
                                        <img src="../assets/check.png" class="h-28"  alt="" >
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="w-1/2 xs:w-full xs:mt-96 h-full bg-white shadow-xl mr-2 rounded-3xl flex flex-col ">
                        <div class="bg-primary-900 h-11 flex items-center justify-center rounded-t-2xl">
                            <div class="text-white py-5 text-xl font-bold">
                                Kolam 2
                            </div>
                        </div>
                        <div class="flex flex-col  px-5 py-5 bg-white  h-full gap-5">
                            <div class="flex flex-row  w-full bg-secondary-900 rounded-3xl">
                                <div class="w-1/2 mr-2 px-7 py-5 flex flex-row items-center text-white font-bold">
                                    <div class="flex flex-col w-2/3">
                                        <div class="text-lg ">SISA PAKAN</div>
                                        <div class="text-3xl">80%</div>
                                    </div>
                                    <div class="bg-white py-3 px-3 w-1/3 rounded-3xl shadow-md">
                                        <img src="../assets/check.png" alt="" >
                                    </div>
                                </div>
                                <div class="w-2  bg-white my-2 rounded-xl "></div>
                                <div class="w-1/2 mr-2 px-7 py-5 flex flex-col text-white font-bold">
                                    <div class="text-lg ">INTENSITAS PAKAN</div>
                                    <div class="text-3xl">50 Menit</div>
                                </div>
                            </div>
                            <div class="flex flex-row w-full gap-3">
                                <div class="flex flex-col w-1/2 bg-secondary-800 rounded-3xl px-5 py-5 ">
                                    <div class="flex flex-row">
                                        <div class="w-3/4 flex flex-col mr-2">
                                            <div class="font-semibold text-3xl">8.8</div>
                                            <div class="w-28 h-1 rounded-xl bg-black"></div>
                                            <div class="font-semibold text-xl">pH Kolam</div>
                                        </div>
                                        <div class="w-1/4 flex items-center justify-center">
                                            <div class="h-16 w-16 rounded-2xl bg-white p-3 shadow-md">
                                                <img src="../assets/up_red.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-row items-center justify-between  h-auto mt-5 rounded-2xl bg-white mx-3 px-5 py-3 shadow-md">
                                        <div class="h-full flex flex-col items-center">
                                            <div>
                                                <img src="../assets/down_red.png" class="h-7" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1">pH 6</div>
                                        </div>
                                        <div class="w-1 bg-black rounded-2xl"></div>
                                        <div class="h-full flex flex-col items-center">
                                            <div>
                                                <img src="../assets/check.png" class="h-7" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1">6pH - 8pH</div>
                                        </div>
                                        <div class="w-1 bg-black rounded-2xl"></div>
                                        <div class="h-full flex flex-col items-center">
                                            <div>
                                                <img src="../assets/up_red.png" class="h-7" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1">>8.5pH</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex flex-col w-1/2 bg-cream-900 rounded-3xl px-5 py-5 ">
                                    <div class="flex flex-row">
                                        <div class="w-3/4 flex flex-col mr-2">
                                            <div class="font-semibold text-3xl">18°C</div>
                                            <div class="w-full h-1 rounded-xl bg-black"></div>
                                            <div class="font-semibold text-xl">Temperatur Kolam</div>
                                        </div>
                                        <div class="w-1/4 flex items-center justify-center">
                                            <div class="h-16 w-16 rounded-2xl bg-white p-3 shadow-md">
                                                <img src="../assets/down_red.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-row items-center justify-between  h-auto mt-5 rounded-2xl bg-white mx-3 px-5 py-3 shadow-md">
                                        <div class="h-full flex flex-col items-center">
                                            <div>
                                                <img src="../assets/down_red.png" class="h-7" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1">20°C</div>
                                        </div>
                                        <div class="w-1 bg-black rounded-2xl"></div>
                                        <div class="h-full flex flex-col items-center">
                                            <div>
                                                <img src="../assets/check.png" class="h-7" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1">20°C - 30°C</div>
                                        </div>
                                        <div class="w-1 bg-black rounded-2xl"></div>
                                        <div class="h-full flex flex-col items-center">
                                            <div>
                                                <img src="../assets/up_red.png" class="h-7" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1">>30°C</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="w-full bg-secondary-900 rounded-3xl px-5 py-7 flex flex-row justify-center gap-4">
                                <div class="flex flex-col  text-white font-bold">
                                    <div class="text-3xl ">5,00 </div>
                                    <div class="h-1 w-60 mt-1 rounded-xl bg-white"></div>
                                    <div class="text-2xl">Kekeruhan Air Kolam</div>
                                    <div class="flex w-44 flex-row items-center justify-between text-black h-auto mt-5 rounded-2xl bg-white mx-3 px-5 py-3 shadow-md">
                                        <div class="h-full flex flex-col items-center ">
                                            <div>
                                                <img src="../assets/warning.png" class="h-7" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1 text-center">5 NTU</div>
                                        </div>
                                        <div class="w-1 bg-black rounded-2xl"></div>
                                        <div class="h-full  flex flex-col items-center">
                                            <div>
                                                <img src="../assets/check.png" class="h-7" alt="">
                                            </div>
                                            <div class="text-xs font-semibold mt-1 text-center">>=5 NTU</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-center ml-10">
                                    <div class="bg-white py-5 px-5 h-auto rounded-3xl shadow-md">
                                        <img src="../assets/check.png" class="h-28"  alt="" >
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
import Sidebar from '../components/Sidebar.vue';
export default {
    components: {
        Sidebar,
    },
}
</script>