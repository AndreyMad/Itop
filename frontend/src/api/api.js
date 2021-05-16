import axios from "axios";

// const ip = 'https://jwebdev.pro'
const ip = "http://localhost:80";


export const itopAuthorization = (user)=>{
    return axios.post(`${ip}/itop/api/authorization`, {user})
  }
export const itopLogout = (token)=>{
  return axios.post(`${ip}/itop/api/logout`, {token} )
}
export const  getUsers=(token)=> {
  return axios.post(`${ip}/itop/api/getusers`, {token});
}

export const createUser = (user) => {
   return axios.post(`${ip}/itop/api/createuser`, { user })
  };


export const itopCheckSession = (token)=>{
  console.log('check')
  return axios.post(`${ip}/itop/api/checksession`, {token})
}