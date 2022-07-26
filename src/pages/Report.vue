<template>
    <div class="h-screen py-5 px-5">
        <div class="flex h-full flex-row">
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
                <div class="w-full h-full rounded-3xl flex flex-row xs:flex-col gap-6 ">
                    <div class="w-1/2 xs:w-full h-full bg-white shadow-xl mr-2 rounded-3xl flex flex-col ">
                    </div>
                    <div class="w-1/2 xs:w-full h-full bg-white shadow-xl mr-2 rounded-3xl flex flex-col ">
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
// import Sidebar from '../components/Sidebar.vue';
export default {
    data() {
        return {
            showMenu : true,
        }
    },
    // components: {
    //     Sidebar,
    // },
    methods: {
        toggleNav(){
            this.showMenu = this.showMenu===false?true:false
            console.log(this.showMenu)
        }
    }
}
</script>