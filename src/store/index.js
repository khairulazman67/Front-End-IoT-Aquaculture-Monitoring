import axios from 'axios';
import {createStore} from 'vuex';
import { BACKEND_SERVICE_URL } from '../constant';
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
        setUserData(){
            console.log('anjay')
        },
        clearUserData() {
            localStorage.removeItem('user');
            localStorage.removeItem('refresh_token');
            location.reload();
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
                .post(`${BACKEND_SERVICE_URL}/refresh_tokens/refresh`,refresh)
                .then(r => {
                    data.token = r.data.data.token
                    localStorage.setItem('login',JSON.stringify(data));
                    this.$store.commit('setHeaders')
                    // console.log(r.data.data.token)
                }).catch(e => {
                    console.dir(e);
                });
        },
        login({commit},request) {
            console.log(request.credentials)
            return axios
            .post(`${BACKEND_SERVICE_URL}/users/login`, request.credentials)
            .then(({ data }) => {
                commit('setUserData', data)

                console.log('ini token ',data.data.token)
                axios.defaults.headers.Authorization = data.data.token
                localStorage.setItem('refresh_token',JSON.stringify(data.data.refresh_token));
                localStorage.setItem('user',JSON.stringify(axios.get(`${BACKEND_SERVICE_URL}/users/1`)));

                request.callback({
                    status: 200,
                    data,
                })
                // request.callback({
                //     status: 403,
                //     data,
                // }) 
            });
        },
        logout({commit}) {
            var user =  JSON.parse(localStorage.getItem('user'))
            var data = {
                user_id : user.id
            }
            console.log(data)
            axios
                .post(`${BACKEND_SERVICE_URL}/users/logout`,data)
                .then(function () {
                    // console.log(r.data.status)
                    commit('clearUserData');
                    commit('clearUserData')
                })
                .catch(e => {
                    console.error(e)
                    commit('clearUserData');
                })
        },
    },
    getters:{},
})