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
                    <form class="flex-col  rounded px-8 pt-6 pb-8  mb-2 w-full">
                        <div class="mb-4">
                            <label class="block text-gray-700 text-xl font-bold mb-2" for="username">
                                Email
                            </label>
                            <input
                                class="shadow h-16 text-lg rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                id="username" type="email" placeholder="Email">
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-xl font-bold mb-2" for="password">
                                Password
                            </label>
                            <input
                                class="shadow h-16 text-lg rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                id="password" type="password" placeholder="******************">
                        </div>
                        <div class="flex items-center justify-end">
                            <router-link :to="{name: 'beranda', params:{}}">
                                <div class="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xl rounded-xl py-4 px-6 focus:outline-none focus:shadow-outline"
                                type="button">
                                    Sign In
                                </div>
                            </router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>