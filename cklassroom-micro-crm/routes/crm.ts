import express, { Request, Response } from "express";
import { STATUS, redis, logger } from "cklassroom-micro-common";
import { CACHE_TTL } from "../constants/CONST";
import { ERRORCODE } from "../constants/ERRORCODE";
import { enrollStudent } from "../services/crmService";
import moment from "moment";
import { EnquiryUser, ValidateEnquiryUser } from '../model/enquiryUser';

export const crmRouter = express.Router();

crmRouter.get("/health", async (req: Request, res: Response) => {
  try {
    return res.status(STATUS.OK).send("CKlassroom CRM Service is Healthy");
  } catch (error) {
    logger.error("CRM :: healthCheck :: ", error);
    return res
      .status(STATUS.INTERNAL_SERVER_ERROR)
      .send({ errorCode: error, error: error });
  }
});


crmRouter.post("/enquiry", async(req: Request, res: Response) => {
  try {
    const reqBody = req.body;
    const enquiryUserObj = new EnquiryUser(reqBody);
    const { error } = ValidateEnquiryUser.validate(enquiryUserObj);

    if (error) {
      if (error.details)
        return res.status(STATUS.BAD_REQUEST).send(error.details[0].message);
      else return res.status(STATUS.BAD_REQUEST).send(error.message);
    }
    const response = await enrollStudent(enquiryUserObj);
    res.status(STATUS.OK).send(response);
  } catch (error) {
    logger.error("CRM :: enquiry :: ", error);
    return res.status(STATUS.INTERNAL_SERVER_ERROR).send({ errorCode: error, error: error });
  }
});


