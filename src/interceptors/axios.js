import axios from "axios";


axios.defaults.baseURL = 'http://localhost:3000/';

axios.interceptors.response.use(resp => resp, async error =>{
    if (error.response.status === 401 ){
        

        var token = JSON.parse(localStorage.getItem('refresh_token'))
        var user =  JSON.parse(localStorage.getItem('user'))
        var refresh = {
            refresh_token : token,
            email : user.email
        }

        const {status, data} = await axios.post('refresh_tokens/refresh',refresh)
        console.log('status ',status)
        console.log('data ',data)
        // if(status === 200){
        //     axios.defaults.com
        // }
    }
})