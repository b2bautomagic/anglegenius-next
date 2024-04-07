import { z } from 'zod';

const requiredString = () => z.string().min(1, 'This field is required!');

const step1Fields = {
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  companyName: z.string().min(1, 'A company name is required'),
  companyURL: z.string().min(1, 'A company website is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
};

const step2to5Fields = {
  idealClient: requiredString(),
  painPoints: requiredString(),
  clientLocation: requiredString(),
  majorProblems: requiredString(),
  dreamClient: requiredString(),
  solutionsForMarket: requiredString(),
  uniqueSellingProp: requiredString(),
  bottleneckFeatures: requiredString(),
  timeToDeliver: requiredString(),
  guaranteeOffers: requiredString(),
  noteworthyClients: requiredString(),
  customerCaseStudy: requiredString(),
  impressiveStats: requiredString(),
  declareTrackRecord: requiredString(),
  totalClients: requiredString(),
  usefulContent: requiredString(),
  miscInfo: requiredString(),
};

const step6Field = {
  chkboxAgree: z.boolean().optional().refine(
    (value) => value === true,
    { message: "You need to agree to proceed." }
  ),
};

const allFields = {
  ...step1Fields,
  ...step2to5Fields,
  ...step6Field,
};

export const FormDataSchema = z.object(allFields);
