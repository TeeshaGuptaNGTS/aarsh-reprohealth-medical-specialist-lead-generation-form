import ApiRoutes from "../../config/endpoint.config"; //  Import the API Routes
import HttpClient from "../index.api";
const baseURL = process.env.NEXT_PUBLIC_API_URL;


class Register extends HttpClient {
  constructor() {
    super(baseURL);
    this._initializeRequestInterceptor();
    this._initializeResponseInterceptor();
  }

  
  _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use((config) => {
      config.headers["Authorization"] = `Bearer ${getTokenLocal() || ""}`;
      config.headers["authKey"] = process.env.NEXT_PUBLIC_API_AUTH_KEY;
      config.headers["Content-Type"] = "application/json";

      // if (config.data) {
      //   config.data = { encryptedData: encryptData(config.data) }; 
        
      // }

      return config;
    });
  };

  _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      (response) => {
        // console.log("Raw Response Data:", response);

        if (response) {
          //   console.log("Encrypted Data:", response);
          response = response;
        } else {
          console.error("No encryptedData found in response.");
        }

        return response;
      },
      (error) => Promise.reject(error)
    );
  };

  //  Use `ApiRoutes` for Signup
  postClinicRegister = async (reqBody) => {
    console.log("postClinicRegister reqBody:",reqBody);
    return this.instance({
      method: ApiRoutes.Clinic.Register.Method,
      url: ApiRoutes.Clinic.Register.Endpoint,
      data:reqBody
    });
  };

}
// GetDoctorOnlineConsultationSlots
//  Export an instance of the `Doctor` class
const registerInstance = new Register();
export default registerInstance;
