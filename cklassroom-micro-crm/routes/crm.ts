import express, { Request, Response } from "express";
import { STATUS, redis, logger } from "cklassroom-micro-common";
import { CACHE_TTL } from "../constants/CONST";
import { ERRORCODE } from "../constants/ERRORCODE";
import { enrollStudent, getEntrollStudentByEmail } from "../services/crmService";
import moment from "moment";
import { EnquiryUser, ValidateEnquiryUser } from '../model/enquiryUser';
import axios from "axios";

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


crmRouter.get("/getPublicIp", async(req: Request, res: Response) => {
  try {
    const response = await axios.get("https://api.ipify.org/?format=json")
    return res.status(STATUS.OK).send(response.data);
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


    const existingEnrollStudent = await getEntrollStudentByEmail(enquiryUserObj.email);

    if (existingEnrollStudent) {
      return res.status(STATUS.BAD_REQUEST).send({errorCode: "ERROR0002", error: ERRORCODE.ERROR0002})
    }


    const requestedDeviceInfo = getDeviceInfoHeaders(req);
    const savePayload = {
      ...enquiryUserObj,
      ...requestedDeviceInfo
    }
    const response = await enrollStudent(savePayload);
    res.status(STATUS.OK).send(response);
  } catch (error) {
    logger.error("CRM :: enquiry :: ", error);
    return res.status(STATUS.INTERNAL_SERVER_ERROR).send({ errorCode: error, error: error });
  }
});


const getDeviceInfoHeaders = (req: Request) => {
  const headers = req.headers;
  const userDeviceInfo = {
    "uo-device-type": headers["uo-device-type"],
    "uo-os": headers["uo-os"],
    "uo-os-version": headers["uo-os-version"],
    "uo-is-mobile": headers["uo-is-mobile"],
    "uo-is-tablet": headers["uo-is-tablet"],
    "uo-is-desktop": headers["uo-is-desktop"],
    "uo-browser-version": headers["uo-browser-version"],
    "uo-browser": headers["uo-browser"],
    "uo-client-ip": req.body.client_ip || req.ip || req.ips,
  };
  return userDeviceInfo;
};

