import Cookies from 'js-cookie';
import  axios  from "../../../lib/axios";
import { LoginCredential, User } from "../types";
import { AxiosResponse } from 'axios';


const handleLogin = async ({email,password}: LoginCredential) => {
    try {
        const {data} = await axios.post('/auth/login',  { email, password } );
        console.log(data);
        Cookies.set('token', data.token);
        return ({nickname: data.name,id: data.uid});
    } catch (err) {
        console.log(err);
    }
};

export { handleLogin };