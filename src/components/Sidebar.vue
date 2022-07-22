        <template>
            <aside class="xs:hidden  h-full mx-2 w-40 flex items-center flex-col justify-center rounded-3xl bg-primary-900 ">
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
                <router-link :to="'#'" class="mt-4">
                    <div class="flex flex-col items-center text-secondary-900 hover:text-white ">
                        <div class="flex items-center justify-center h-16 w-16 rounded-2xl bg-white hover:bg-secondary-900">
                            <i class="fa-solid fa-user text-2xl"></i>
                        </div>
                        <div class="text-white text-base mt-1">Profil</div>
                    </div>
                </router-link>
                <router-link :to="{name: 'login', params:{}}" class="mt-4">
                    <div class="flex flex-col items-center text-secondary-900 hover:text-white ">
                        <div class="flex items-center justify-center h-16 w-16 rounded-2xl bg-white hover:bg-secondary-900">
                            <i class="fa-solid fa-right-from-bracket text-2xl"></i>
                        </div>
                        <div class="text-white text-base mt-1">Logout</div>
                    </div>
                </router-link>
            </aside>
        </template>
<script>
export default {

}
</script>