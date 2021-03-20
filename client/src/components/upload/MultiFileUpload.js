import axios from 'axios';

export default function UseFileUpload(key, files, uploadProgressHandler, puId) {
  const formData = new FormData();
  
  for (let i = 0; i < files.length; i++){
    formData.append(key, files[i])
  }
  console.log(puId);
  formData.append("productId",puId);

  const axiosConfig = {
    url: 'http://localhost:4000/api/v1/uploads/products',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
    onUploadProgress: uploadProgressHandler,
  };

  return axios(axiosConfig);
}