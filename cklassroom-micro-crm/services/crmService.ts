import { mongoDB, mongoDBRead, logger, nodemailerUtils, ejsUtils } from "cklassroom-micro-common";
import { EnquiryUser } from "../model/enquiryUser";
import { MONGO_COLLECTIONS } from "../constants/MONGO_COLLECTIONS";



const getEntrollStudentByEmail = async(email: string) => {
  return new Promise(async(resolve, reject) => {
    try {
      const enrollStudent = await mongoDBRead.findOne(MONGO_COLLECTIONS.CRM_ENQUIRY_USERS, {email});
      resolve(enrollStudent);
    } catch (error) {
      logger.error(error);
      reject(error);
    }
  })
}

const enrollStudent = async (enquiryObj: any) => {
  return new Promise(async(resolve, reject) => {
    try {
      logger.info(`crmService :: enrollStudent :: enquiryObj :: ${JSON.stringify(enquiryObj)}`);
      const data = await mongoDB.insertOne(MONGO_COLLECTIONS.CRM_ENQUIRY_USERS, enquiryObj);
      await sendEnquiryNotification(enquiryObj);
      logger.info(`crmService :: enrollStudent :: enquiryObj :: ${JSON.stringify(enquiryObj)} :: after saving :: ${JSON.stringify(data)}`);
      resolve(data);
    } catch (error) {
      logger.error(error);
      reject(error);
    }
  })
}

const sendEnquiryNotification = async (enquiryObj: EnquiryUser) => {
  try {
    const ccEmails = process.env.CKLASSROOM_CRM_CC_EMAILS.split(",")
    
    const enquiryRequestHtml = await ejsUtils.generateHtml("views/enquiryRequest.ejs", enquiryObj)
    const enquiryResponseHtml = await ejsUtils.generateHtml("views/enquiryResponse.ejs", {
      name: enquiryObj.name
    })

    await nodemailerUtils.sendEmail("CKLASSROOMS | Enquiry Request", enquiryRequestHtml, null, ccEmails, [])
    await nodemailerUtils.sendEmail("CKLASSROOMS | Enquiry Response", enquiryResponseHtml, enquiryObj.email, [], [])

    logger.info(`crmService :: sendEnquiryNotification :: Notifications Sent Successfully`);
  } catch (error) {
    logger.error(`crmService :: sendEnquiryNotification :: ${error}`)
    throw error;
  }
}

export {
  enrollStudent,
  getEntrollStudentByEmail
};
