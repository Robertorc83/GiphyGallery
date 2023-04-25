import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

import { GiphyApiResponse } from '../types';

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  headers?: Record<string, string>;
}

const requestInterceptor = (config: CustomAxiosRequestConfig): CustomAxiosRequestConfig => {
  config.params = config.params || {};
  config.params.api_key = 'your_giphy_api_key'; // Replace with your actual GIPHY API key
  return config;
};

const responseInterceptor = (response: AxiosResponse<GiphyApiResponse>): AxiosResponse<GiphyApiResponse> => response;

const responseErrorInterceptor = (error: AxiosError<GiphyApiResponse>): Promise<never> => {
  return Promise.reject(error);
};

export { requestInterceptor, responseInterceptor, responseErrorInterceptor };
