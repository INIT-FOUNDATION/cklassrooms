import Joi from "joi";
import { v4 as uuidv4 } from 'uuid';


class EnquiryUser {
  crmId: string;
  email: string;
  mobileNumber: number;
  name: string;
  education: string;
  graduation_year: string;
  working: string;
  job_domain: string;
  job_title: string;
  company: string;
  constructor (enquiryObj : {
    crmId: string;
    email: string;
    mobileNumber: number;
    name: string;
    education: string;
    graduation_year: string;
    working: string;
    job_domain: string;
    job_title: string;
    company: string;
  }){
    this.crmId = uuidv4();
    this.email = enquiryObj.email;
    this.mobileNumber = enquiryObj.mobileNumber;
    this.name = enquiryObj.name;
    this.education = enquiryObj.education;
    this.graduation_year = enquiryObj.graduation_year;
    this.working = enquiryObj.working;
    this.job_domain = enquiryObj.job_domain;
    this.job_title = enquiryObj.job_title;
    this.company = enquiryObj.company;
  }
}

class ValidateEnquiryUser {
  static validate(enquiryObj: any) : Joi.ValidationResult {
    const schema = Joi.object({
      crmId: Joi.string(),
      email: Joi.string().email().required(),
      mobileNumber: Joi.string().regex(/^[6-9]\d{9}$/).required().messages({
          'string.pattern.base': 'Mobile number must be 10 digits and start with 6, 7, 8, or 9'
      }),
      name: Joi.string().required(),
      education: Joi.string().required(),
      graduation_year: Joi.string().required(),
      working: Joi.string().required(),
      job_domain: Joi.string().when('working', {
        is: 'yes',
        then: Joi.string().required(),
        otherwise: Joi.string().allow('', null)
      }),
      job_title: Joi.string().when('working', {
        is: 'yes',
        then: Joi.string().required(),
        otherwise: Joi.string().allow('', null)
      }),
      company: Joi.string().when('working', {
        is: 'yes',
        then: Joi.string().required(),
        otherwise: Joi.string().allow('', null)
      }),
    });
    return schema.validate(enquiryObj);
  }
}
export { 
  EnquiryUser,
  ValidateEnquiryUser
};
