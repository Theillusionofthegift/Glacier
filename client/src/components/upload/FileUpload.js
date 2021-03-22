import axios from 'axios';

export default function UseFileUpload(key, file, uploadProgressHandler, userId) {
  const formData = new FormData();
  formData.append(key, file)
  formData.append('userId', userId);

  const axiosConfig = {
    url: 'http://localhost:4000/api/v1/uploads/profile',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
    onUploadProgress: uploadProgressHandler,
  };

  return axios(axiosConfig);
}