import registerInstance from "@/api/register-api/register.api";

 // Adjust the import path as needed

export const registerClinic = async (reqBody) => {
  try {
      console.log("ReqBody for clinic:", reqBody);
      // reqBody
      // const reqBody = "title";

      const response = await registerInstance.postClinicRegister(reqBody);
      // console.log("API Response:", response);
      return response; // Make sure this matches the API response structure
  } catch (error) {
      console.log("Error fetching register:", error);
      return [];
  }
};