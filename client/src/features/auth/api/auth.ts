import Cookies from 'js-cookie';
import  axios  from "../../../lib/axios";
import { LoginCredential, User } from "../types";
import { AxiosResponse } from 'axios';


const handleLogin = async ({email,password}: User) => {
    try {
        const {data} = await axios.post('/auth/login',  { email, password } );
        console.log(data);
        Cookies.set('token', data.token);
        return ({nickname: data.name,id: data.uid});
    } catch (err) {
        console.log(err);
    }
};

const handleRegister = async ({email,password,nickname}: User) => {
    try {
        const {data} = await axios.post('/auth/register',  { email, password, nickname } );
        console.log(data);
        Cookies.set('token', data.token);
        console.log(Cookies.get('token'));
        return ({nickname: data.nickname,id: data.uid});
    } catch (err) {
        console.log(err);
    }
}

export { handleLogin, handleRegister };