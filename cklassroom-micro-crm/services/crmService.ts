import { mongoDB, logger } from "cklasroom-micro-common";
import { EnquiryUser } from "../model/enquiryUser";
import { MONGO_COLLECTIONS } from "../constants/MONGO_COLLECTIONS";


const enrollStudent = async (enquiryObj: EnquiryUser) => {
  try {
    logger.info(`crmService :: enrollStudent :: enquiryObj :: ${JSON.stringify(enquiryObj)}`);
    const data = await mongoDB.insertOne(MONGO_COLLECTIONS.CRM_ENQUIRY_USERS, enquiryObj);
    logger.info(`crmService :: enrollStudent :: enquiryObj :: ${JSON.stringify(enquiryObj)} :: after saving :: ${JSON.stringify(data)}`);
    return data;
  } catch (error) {
    logger.error(error);
    throw error;
  }
}

export {
  enrollStudent
};
