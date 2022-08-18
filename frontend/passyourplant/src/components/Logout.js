import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import { AuthContext } from './AuthContext.js';

export function Logout(){
    const navigate = useNavigate();
    AuthContext.userLogout();
    useEffect(()=> {navigate('/')});
}