// import axios from 'axios';

// export const getUserId=(params)=>{
//     return axios.post('./userID',params)
// }

// axios.get('/user?ID=12345')

// export const getUseInfo=(params)=>{
//   return axios.post('./user',{
//     firstName:'Fred',
//     lastName:'Flintstone'
//   })
// }

import axios from 'axios';
export const baseURL='http://localhost:3000';

export const getNewsByld=(id)=>{
  return axios.get('${baseURL}/news/${id}');
};

export const getNewsList=async()=>{
  const{data}=await axios.get('${baseURL}/news');
  const imageList=["/images/banner1.png","/images/banner1.png"];
  return data.map((i,index)=>({
    ...i,
    image:imageList[index],
  }));
};


