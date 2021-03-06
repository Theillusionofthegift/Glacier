import axios from 'axios';

export default function UseFileUpload(key, files, uploadProgressHandler) {
  const formData = new FormData();
  
  for (let i = 0; i < files.length; i++){
    formData.append(key, files[i])
  }

  const axiosConfig = {
    url: 'http://localhost:4000/api/v1/uploads',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
    onUploadProgress: uploadProgressHandler,
  };

  return axios(axiosConfig);
}