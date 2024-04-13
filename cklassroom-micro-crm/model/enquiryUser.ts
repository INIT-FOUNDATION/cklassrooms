import Joi from "joi";
import moment from "moment";
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
  job_role: string;
  company: string;
  date_created: string;
  constructor (enquiryObj : {
    crmId: string;
    email: string;
    mobileNumber: number;
    name: string;
    education: string;
    graduation_year: string;
    working: string;
    job_domain: string;
    job_role: string;
    company: string;
    date_created: string;
  }){
    this.crmId = uuidv4();
    this.email = enquiryObj.email;
    this.mobileNumber = enquiryObj.mobileNumber;
    this.name = enquiryObj.name;
    this.education = enquiryObj.education;
    this.graduation_year = enquiryObj.graduation_year;
    this.working = enquiryObj.working;
    this.job_domain = enquiryObj.job_domain;
    this.job_role = enquiryObj.job_role;
    this.company = enquiryObj.company;
    this.date_created = moment().toISOString()
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
      graduation_year: Joi.number().integer().min(1900).max(2100).required().messages({
          'number.base': 'Graduation Year must be a number',
          'number.integer': 'Graduation Year must be an integer',
          'number.min': 'Graduation Year must be greater than or equal to 1900',
          'number.max': 'Graduation Year must be less than or equal to 2100'
      }),
      working: Joi.string().required(),
      job_domain: Joi.string().when('working', {
        is: 'yes',
        then: Joi.string().required(),
        otherwise: Joi.string().allow('', null)
      }),
      job_role: Joi.string().when('working', {
        is: 'yes',
        then: Joi.string().required(),
        otherwise: Joi.string().allow('', null)
      }),
      company: Joi.string().when('working', {
        is: 'yes',
        then: Joi.string().required(),
        otherwise: Joi.string().allow('', null)
      }),
      date_created: Joi.string().required()
    });
    return schema.validate(enquiryObj);
  }
}
export { 
  EnquiryUser,
  ValidateEnquiryUser
};
