<template>
    <div class="h-screen py-5 px-5">
        <div class="flex h-full flex-row">
            <Sidebar></Sidebar>
            <main class="h-full mx-3 w-full rounded-3xl  flex flex-col">
                <div class="w-full py-3  bg-primary-900 mb-5 rounded-3xl flex items-center pl-5">
                    <div class="text-white text-2xl font-bold">
                        Pakan
                    </div>
                </div>
                <div class="w-full h-full rounded-3xl flex flex-row xs:flex-col gap-6 ">
                    
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