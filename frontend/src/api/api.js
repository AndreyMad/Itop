import axios from "axios";

// const ip = 'https://jwebdev.pro'
const ip = "http://localhost:80";


export const createUser = (user) => {
  return axios.post(`${ip}/itop/api/createuser`, { user })
 };
export const itopAuthorization = (user)=>{
    return axios.post(`${ip}/itop/api/authorization`, {user})
  }
export const itopLogout = (token)=>{
  return axios.post(`${ip}/itop/api/logout`, {token} )
}
export const  getUsers=(token)=> {
  return axios.post(`${ip}/itop/api/getusers`, {token});
}


export const itopCheckSession = (token)=>{
  return axios.post(`${ip}/itop/api/checksession`, {token})
}

export const createProfile =(profile, token,email)=>{
  return axios.post(`${ip}/itop/api/createprofile`, {profile, token,email})
}
export const updateProfile =(profile, token)=>{
  return axios.post(`${ip}/itop/api/updateprofile`, {profile, token})
}
export const deleteProfile =(id, token)=>{
  
  return axios.post(`${ip}/itop/api/deleteprofile`, {id, token})
}

export const  getProfiles=(token)=> {
  return axios.post(`${ip}/itop/api/getprofiles`, {token});
}
