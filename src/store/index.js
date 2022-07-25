import axios from 'axios';
import {createStore} from 'vuex';
// import Swal from 'sweetalert2'
export default createStore({
    state(){
        return{
        }
    },
    mutations:{
        setHeaders(){
            var data = JSON.parse(localStorage.getItem('login'))
            if(data){
                axios.defaults.headers.Authorization = data.token
            }
        },
        clearUserData() {
            localStorage.removeItem('user');
            localStorage.removeItem('login');
        }
    },
    actions:{
        refreshToken(){
            var data = JSON.parse(localStorage.getItem('login'))
            var user =  JSON.parse(localStorage.getItem('user'))
            var refresh = {
                refresh_token : data.refresh_token,
                email : user.email
            }
            axios
                .post(`http://localhost:3000/refresh_tokens/refresh`,refresh)
                .then(r => {
                    data.token = r.data.data.token
                    localStorage.setItem('login',JSON.stringify(data));
                    this.$store.commit('setHeaders')
                    // console.log(r.data.data.token)
                }).catch(e => {
                    console.dir(e);
                });
        },
        logout({commit}, request) {
            var user =  JSON.parse(localStorage.getItem('user'))
            var data = {
                user_id : user.id
            }
            axios
                .post('http://localhost:3000/users/logout',data)
                .then(function () {
                    // console.log(r.data.status)
                    commit('clearUserData');
                    request.success()
                })
                .catch(e => {
                    console.error(e)
                    commit('clearUserData');
                    request.success()
                })
        },

    },
    getters:{},
})