import axios from 'axios';

import { responseErrorInterceptor, responseInterceptor } from '../interceptors';

const apiClient = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params.api_key = '38pGeTANczR7HM7sj8V3VCJGUFX3oVHX'; // Replace with your actual GIPHY API key
  return config;
});
apiClient.interceptors.response.use(responseInterceptor, responseErrorInterceptor);

export default apiClient;
