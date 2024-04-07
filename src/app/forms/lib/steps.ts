// Define the FormStep type

export interface StepSchema {
    level: number;
    label: string;
    description: string;
    fields: string[] | undefined;
    criteria?:  string[] | undefined;
    context?:  string[] | undefined;
}

export const formSteps: StepSchema[] = [
  /* Step 1 */
  {
    level: 1,
    label: "Contact Info",
    description: "Provide the necessary details to register your business with us",
    fields: [
        "firstName", 
        "lastName", 
        "email"
    ],
    criteria: [
        "First name", 
        "Last name", 
        "Company name", 
        "Company URL", 
        "Email"
    ],
    context: [
        "Your first name", 
        "Your last name", 
        "Your organization's name", 
        "Your organization's website", 
        "Your email address"
    ],
  },

  /* Step 2 */
  {
    level: 2,
    label: "Ideal Client Profile",
    description: "Provide the necessary details to register your business with us",
    fields: [
        "idealClient", 
        "painPoints", 
        "clientLocation", 
        "majorProblems", 
        "dreamClient"
    ],
    criteria: [
        "Who is your ideal client?", 
        "What are the pain points people are facing that motivates them to buy?", 
        "Where are they located?", 
        "What major problem does your target market have that your product/service solves for them?", 
        "List 10 of your dream clients"
    ],
    context: [
        "Tell us as much about them as you can", 
        "In regards to their business or personal lives", 
        "Only if specific to certain states/countries", 
        "Tell us as much about it as you can", 
        "Companies you would like to target"
    ],
  },

  /* Step 3 */
  {
    level: 3,
    label: "Offer",
    description: "Provide the necessary details to register your business with us",
    fields: [
        "solutionsForMarket", 
        "uniqueSellingProp", 
        "bottleneckFeatures", 
        "timeToDeliver", 
        "guaranteeOffers"
    ],
    criteria: [
        "What is your solution to your target market's problem?", 
        "Is there something special or unique about the problem you solve or how you solve it?", 
        "Is there some unnecessary element or cumbersome feature in your competitor's product?", 
        "Is there a specific time frame that you could deliver a result in that could strengthen your message?", 
        "Do you offer any guarantees?"
    ],
    context: [
        "What it's called and how it works", 
        "Explain in detail", 
        "If applicable, explain in detail", 
        "Ex: Get a 2x boost in sales meetings per rep within 6 weeks", 
        " If so, what are they?"
    ],
  },

  /* Step 4 */
  {
    level: 4,
    label: "Track Record",
    description: "Provide the necessary details to register your business with us",
    fields: [
        "noteworthyClients", 
        "customerCaseStudy", 
        "impressiveStats", 
        "declareTrackRecord", 
        "totalClients"
    ],
    criteria: [
        "Have you worked with any noteworthy organizations, companies or individuals?", 
        "Is there an outstanding result or case study that you got from a customer that can be shared?", 
        "What are your most impressive statistics?", 
        "Do you have a track record that sets you apart from others?", 
        "How many customers have you served over time?"
    ],
    context: [
        "List here", 
        "Provide a link if possible", 
        "Ex: we've helped X person or company achieve Y in Z time", 
        "Ex: Length of time in business, results for customers, specialize in specific vertical", 
        "Ex: We've helped 500 people/companies over the last 5 years to get X result"
    ],
  },

  /* Step 5 */
  {
    level: 5,
    label: "Background Material",
    description: "Provide the necessary details to register your business with us",
    fields: [
        "usefulContent", 
        "miscInfo"
    ],
    criteria: [
        "Do you have any useful content for your market?", 
        "Anything else we should know about your product or ideal customer??"
    ],
    context: [
        "Ex: Whitepapers, articles, offers, lead magnets (paste links here)", 
        "Ex: "
    ],

  },

  /* Step 6 */
  {
    level: 6,
    label: "Finishing Up",
    description: "Provide the necessary details to register your business with us",
    fields: ["chkboxAgree"]
  },
]
