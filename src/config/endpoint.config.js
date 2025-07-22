
import HttpClient from "../api/index.api";

export const HttpMethod = {
  Get: "GET",
  Post: "POST",
  Put: "PUT",
  Patch: "PATCH",
  Delete: "DELETE",
};

const ApiRoutes = {
  
  Doctor: {
    
    Register: {
      Endpoint: "auth/register",
      Method: HttpMethod.Post,
    },
  },
  Lab: {
    Register: {
      Endpoint: "auth/register",
      Method: HttpMethod.Post,
    },
   
  },
  Clinic: {
    Register: {
      Endpoint: "auth/register",
      Method: HttpMethod.Post,
    }
    
  },
  
};

export default ApiRoutes;
