import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";


const BASE_URL = import.meta.env.VITE_BASE_URL

class Http {
  private instance: AxiosInstance | null = null;

  private get http(): AxiosInstance {
    return this.instance ?? this.initHttp();
  }

  private configuration: Readonly<Record<string, string | boolean>> | null =
    null;


  //   constructor(defaultErrorHandler: boolean) {
  //     this.defaultErrorHandler = defaultErrorHandler
  //   }


  initHttp() {
    const headers: any = {
      "Content-Type": "application/json"
      // multipart/form-data
    }

    // if(userAuthData?.value?.token){
    //   headers['Authorization'] = `Bearer ${userAuthData.value.token}`
    // }

    const http = axios.create({
      baseURL: BASE_URL,
      timeout: 60000,
      headers
    });


    http.interceptors.response.use(
      (response) => response,
      (error) => {
        if (hasDefaultErrorHandler)
          return this.handleError(error);
        return Promise.reject(error)
      }
    );

    this.instance = http;
    return http;
  }

  public setBaseUrl = (val: string) => {
    this.http.defaults.baseURL = val;
  }

  public setHeaders = (val: { [key: string]: any }) => {
    this.http.defaults.headers = { ...this.http.defaults.headers, ...val }
  }

  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    return this.http.request(config);
  }

  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.get<T, R>(url, config);
  }

  options<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.options<T, R>(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.post<T, R>(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.put<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }

  // Handle global app errors
  // We can handle generic app errors depending on the status code
  // private handleError(error:any) {
  //   const { showDefaultErrorToast } = useToastMessage()

  //   console.log({error})
  //   showDefaultErrorToast('Something went wrong!', error?.response?.data?.resp_message || error?.response?.data?.message)
  //   let status:any;
  //   if(error.status){
  //     status = error.status
  //   }
  //   else if(error.response && error.response.status){
  //     status = error.response.status
  //   }
  //   switch (status) {
  //     case StatusCode.InternalServerError: {
  //       // Handle InternalServerError
  //       showDefaultErrorToast('Something went wrong!', 'There appears to be problem fetching data.')
  //       break;
  //     }
  //     case StatusCode.Unauthorized: {
  //       setUserAuth(null)
  //       forgetUser()
  //       // save return url
  //       const currentRoute=router.currentRoute
  //       returnUrl.value=currentRoute.value.fullPath
  //       doHideDefaultLoading(true, true)
  //       router.push({ name:'LoginInit' })
  //       break;
  //     }
  //     case StatusCode.Forbidden: {
  //       // setUserAuth(null)
  //       // forgetUser()
  //       // router.push({ name:'LoginInit' })
  //       break;
  //     }
  //     // case StatusCode.Unauthorized: {

  //     //   break;
  //     // }
  //     // case StatusCode.TooManyRequests: {
  //     //   // Handle TooManyRequests
  //     //   break;
  //     // }
  //     default:{
  //       // if(!showNotifBar.value){
  //       //   if(error?.response?.data?.resp_message)
  //       //     doShowNotifBar(error.response.data.resp_message as string)
  //       // }
  //     }
  //   }

  //   return Promise.reject(error);
  // }
}
const http = new Http();
export default http
