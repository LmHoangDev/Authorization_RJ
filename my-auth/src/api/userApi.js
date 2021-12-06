import axiosClient from './axiosClient';
import { urlRegister, baseUrlAuth} from './url.js';
const userApi = {
  register(data) {
    return axiosClient.post(urlRegister, data);
  },

  login(data) {
    return axiosClient.post(baseUrlAuth, data);
  },
};

export default userApi;
