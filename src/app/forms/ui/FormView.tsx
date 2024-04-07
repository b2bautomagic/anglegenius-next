'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { z } from 'zod'
import { FormDataSchema } from '../lib/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'

import ProgressBar from './ProgressBar'
import ProgressIndicator from './ProgressIndicator'

import './FormContainer.css'
import { FormNavigation } from './FormNavigation'
import { formSteps } from '../lib/steps';

import { createClient } from '../utils/supabase/client'

type Inputs = z.infer<typeof FormDataSchema>

export default function FormView() {
  const [feedbackObject, setFeedbackObject] = useState<string>("");
  const supabase = createClient()

  const [previousStep, setPreviousStep] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const delta = currentStep - previousStep

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema)
  })

    const processForm: SubmitHandler<Inputs>  = async (clientRecord: Inputs) => {
      try {
        // Your existing processForm logic here
        const { data, error } = await supabase.from('offercustomers').insert([clientRecord]);
        setFeedbackObject("Form submitted successfully");
    
        if (error) {
          throw error;
        }
    
        reset();
      } catch (error) {
        console.log("Error occurred", { error });
        setFeedbackObject("An error occurred");
      }
    };
  
    console.log(feedbackObject);
  
  

  type FieldName = keyof Inputs

  const next = async () => {
    const fields = formSteps[currentStep].fields
    const output = await trigger(fields as FieldName[], { shouldFocus: true })

    if (!output) return

    if (currentStep < formSteps.length - 1) {
      if (currentStep === formSteps.length - 2) {
        console.log("last page");
      }
      setPreviousStep(currentStep)
      setCurrentStep(step => step + 1)
    }
  }

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep)
      setCurrentStep(step => step - 1)
    }
  }

  function getCriteriaText(stepID: number, criteriaID: number) {
    // Check if steps and the specified step exist
    if (!formSteps || stepID >= formSteps.length) {
      return "Default text"; // Handle undefined steps or invalid stepID
    }
  
    const step = formSteps[stepID];
  
    // Check if context list and the specified element exist within the step
    if (!step || !step.criteria || criteriaID >= step.criteria.length) {
      return "Default text"; // Handle undefined context or invalid contextID
    }
  
    return step.criteria[criteriaID];
  }

  function getContextText(stepID: number, contextID: number) {
    // Check if steps and the specified step exist
    if (!formSteps || stepID >= formSteps.length) {
      return "Default text"; // Handle undefined steps or invalid stepID
    }
  
    const step = formSteps[stepID];
  
    // Check if context list and the specified element exist within the step
    if (!step || !step.context || contextID >= step.context.length) {
      return "Default text"; // Handle undefined context or invalid contextID
    }
  
    return step.context[contextID];
  }

  const Step1 = () => (
    <section>
        <div>
            <h1 className="uppercase text-lg font-semibold">{formSteps[0].label}</h1>
            <h2 className="text-sm text-gray-00">{formSteps[0].description}</h2>
        </div>

        <hr className="mt-2"/>

        <main className="mt-3 md:mt-5">
                <div className="grid md:grid-cols-2 md:gap-6">

                    {/* First name */}
                    <div className="relative z-0 w-full mb-5 group">
                        <label htmlFor="firstName"
                               className="block mb-2 text-sm font-medium text-gray-900">
                                {getCriteriaText(0, 0)}
                        </label>
                        <input type="text" 
                               id="firstName" 
                               {...register('firstName')}
                               autoComplete='given-name'
                               placeholder={getContextText(0, 0)} 
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                        />
                        {errors.firstName?.message && (
                            <p className='mt-2 text-sm text-red-400'>
                                {errors.firstName.message}
                            </p>
                        )}
                        
                    </div>

                    {/* Last name */}
                    <div className="relative z-0 w-full mb-5 group">
                    <label htmlFor="firstName"
                               className="block mb-2 text-sm font-medium text-gray-900">
                                {getCriteriaText(0, 1)}
                        </label>
                        <input type="text" 
                               id="lastName" 
                               {...register('lastName')}
                               autoComplete='family-name'
                               placeholder={getContextText(0, 1)} 
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                        />
                        {errors.lastName?.message && (
                            <p className='mt-2 text-sm text-red-400'>
                                {errors.lastName.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Row C */}
                <div className="mb-5">
                        <label htmlFor="companyName"
                               className="block mb-2 text-sm font-medium text-gray-900">
                                {getCriteriaText(0, 2)}
                        </label>
                        <input type="text" 
                               id="companyName" 
                               {...register('companyName')}
                               autoComplete='organization'
                               placeholder={getContextText(0, 2)} 
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                        />
                        {errors.companyName?.message && (
                            <p className='mt-2 text-sm text-red-400'>
                                {errors.companyName.message}
                            </p>
                        )}
                </div>

                {/* Row D */}
                <div className="mb-5">
                        <label htmlFor="companyURL"
                               className="block mb-2 text-sm font-medium text-gray-900">
                                {getCriteriaText(0, 3)}
                        </label>
                        <input type="text" 
                               id="companyURL" 
                               {...register('companyURL')}
                               autoComplete='url'
                               placeholder={getContextText(0, 3)} 
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                        />
                        {errors.companyURL?.message && (
                            <p className='mt-2 text-sm text-red-400'>
                                {errors.companyURL.message}
                            </p>
                        )}
                </div>

                {/* Row E */}
                <div className="mb-5">
                <label htmlFor="email"
                               className="block mb-2 text-sm font-medium text-gray-900">
                                {getCriteriaText(0, 4)}
                        </label>
                        <input type="email" 
                               id="email" 
                               {...register('email')}
                               autoComplete='email'
                               placeholder={getContextText(0, 4)} 
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                        />
                        {errors.email?.message && (
                            <p className='mt-2 text-sm text-red-400'>
                                {errors.email.message}
                            </p>
                        )}
                </div>
            </main>
    </section>
  );

  const Step2 = () => (
    <section>
        <div>
            <h1 className="uppercase text-lg font-semibold">{formSteps[1].label}</h1>
            <h2 className="text-sm text-gray-00">{formSteps[1].description}</h2>
        </div>

        <hr className="mt-2"/>

        <main className="mt-3 md:mt-5">
                {/* ROW */}
                <div className="mb-5">
                        <label htmlFor="idealClient"
                               className="block mb-2 text-sm font-medium text-gray-900">
                                {getCriteriaText(1, 0)}
                        </label>
                        <textarea id="idealClient" 
                               {...register('idealClient')}
                               rows={2}
                               autoComplete='off'
                               placeholder={getContextText(1, 0)} 
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                        />
                        {errors.idealClient?.message && (
                            <p className='mt-2 text-sm text-red-400'>
                                {errors.idealClient.message}
                            </p>
                        )}
                </div>

                {/* ROW */}
                <div className="mb-5">
                        <label htmlFor="painPoints"
                               className="block mb-2 text-sm font-medium text-gray-900">
                                {getCriteriaText(1, 1)}
                        </label>
                        <textarea id="painPoints" 
                               {...register('painPoints')}
                               rows={2}
                               autoComplete='off'
                               placeholder={getContextText(1, 1)} 
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                        />
                        {errors.painPoints?.message && (
                            <p className='mt-2 text-sm text-red-400'>
                                {errors.painPoints.message}
                            </p>
                        )}
                </div>

                {/* ROW */}
                <div className="mb-5">
                        <label htmlFor="clientLocation"
                               className="block mb-2 text-sm font-medium text-gray-900">
                                {getCriteriaText(1, 2)}
                        </label>
                        <textarea id="clientLocation" 
                               {...register('clientLocation')}
                               rows={2}
                               autoComplete='off'
                               placeholder={getContextText(1, 2)} 
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                        />
                        {errors.clientLocation?.message && (
                            <p className='mt-2 text-sm text-red-400'>
                                {errors.clientLocation.message}
                            </p>
                        )}
                </div>

                {/* ROW */}
                <div className="mb-5">
                        <label htmlFor="majorProblems"
                               className="block mb-2 text-sm font-medium text-gray-900">
                                {getCriteriaText(1, 3)}
                        </label>
                        <textarea id="majorProblems" 
                               {...register('majorProblems')}
                               rows={2}
                               autoComplete='off'
                               placeholder={getContextText(1, 3)} 
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                        />
                        {errors.majorProblems?.message && (
                            <p className='mt-2 text-sm text-red-400'>
                                {errors.majorProblems.message}
                            </p>
                        )}
                </div>

                {/* ROW */}
                <div className="mb-5">
                        <label htmlFor="dreamClient"
                               className="block mb-2 text-sm font-medium text-gray-900">
                                {getCriteriaText(1, 4)}
                        </label>
                        <textarea id="dreamClient" 
                               {...register('dreamClient')}
                               rows={2}
                               autoComplete='off'
                               placeholder={getContextText(1, 4)} 
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                        />
                        {errors.dreamClient?.message && (
                            <p className='mt-2 text-sm text-red-400'>
                                {errors.dreamClient.message}
                            </p>
                        )}
                </div>
            </main>
    </section>
  );

  const Step3 = () => (
    <section>
        <div>
            <h1 className="uppercase text-lg font-semibold">{formSteps[2].label}</h1>
            <h2 className="text-sm text-gray-00">{formSteps[2].description}</h2>
        </div>

        <hr className="mt-2"/>

        <main className="mt-3 md:mt-5">
                {/* ROW */}
                <div className="mb-5">
                        <label htmlFor="solutionsForMarket"
                               className="block mb-2 text-sm font-medium text-gray-900">
                                {getCriteriaText(2, 0)}
                        </label>
                        <textarea id="solutionsForMarket" 
                               {...register('solutionsForMarket')}
                               rows={3}
                               autoComplete='off'
                               placeholder={getContextText(2, 0)} 
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                        />
                        {errors.solutionsForMarket?.message && (
                            <p className='mt-2 text-sm text-red-400'>
                                {errors.solutionsForMarket.message}
                            </p>
                        )}
                </div>

                {/* ROW */}
                <div className="mb-5">
                        <label htmlFor="uniqueSellingProp"
                               className="block mb-2 text-sm font-medium text-gray-900">
                                {getCriteriaText(2, 1)}
                        </label>
                        <textarea id="uniqueSellingProp" 
                               {...register('uniqueSellingProp')}
                               rows={3}
                               autoComplete='off'
                               placeholder={getContextText(2, 1)} 
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                        />
                        {errors.uniqueSellingProp?.message && (
                            <p className='mt-2 text-sm text-red-400'>
                                {errors.uniqueSellingProp.message}
                            </p>
                        )}
                </div>

                {/* ROW */}
                <div className="mb-5">
                        <label htmlFor="bottleneckFeatures"
                               className="block mb-2 text-sm font-medium text-gray-900">
                                {getCriteriaText(2, 2)}
                        </label>
                        <textarea id="bottleneckFeatures" 
                               {...register('bottleneckFeatures')}
                               rows={2}
                               autoComplete='off'
                               placeholder={getContextText(2, 2)} 
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                        />
                        {errors.bottleneckFeatures?.message && (
                            <p className='mt-2 text-sm text-red-400'>
                                {errors.bottleneckFeatures.message}
                            </p>
                        )}
                </div>

                {/* ROW */}
                <div className="mb-5">
                        <label htmlFor="timeToDeliver"
                               className="block mb-2 text-sm font-medium text-gray-900">
                                {getCriteriaText(2, 3)}
                        </label>
                        <textarea id="timeToDeliver" 
                               {...register('timeToDeliver')}
                               rows={2}
                               autoComplete='off'
                               placeholder={getContextText(2, 3)} 
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                        />
                        {errors.timeToDeliver?.message && (
                            <p className='mt-2 text-sm text-red-400'>
                                {errors.timeToDeliver.message}
                            </p>
                        )}
                </div>

                {/* ROW */}
                <div className="mb-5">
                        <label htmlFor="guaranteeOffers"
                               className="block mb-2 text-sm font-medium text-gray-900">
                                {getCriteriaText(2, 4)}
                        </label>
                        <textarea id="guaranteeOffers" 
                               {...register('guaranteeOffers')}
                               rows={2}
                               autoComplete='off'
                               placeholder={getContextText(2, 4)} 
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                        />
                        {errors.guaranteeOffers?.message && (
                            <p className='mt-2 text-sm text-red-400'>
                                {errors.guaranteeOffers.message}
                            </p>
                        )}
                </div>
            </main>
    </section>
  );

  const Step4 = () => (
    <section>
        <div>
            <h1 className="uppercase text-lg font-semibold">{formSteps[3].label}</h1>
            <h2 className="text-sm text-gray-00">{formSteps[3].description}</h2>
        </div>

        <hr className="mt-2"/>

        <main className="mt-3 md:mt-5">
                {/* ROW */}
                <div className="mb-5">
                        <label htmlFor="noteworthyClients"
                               className="block mb-2 text-sm font-medium text-gray-900">
                                {getCriteriaText(3, 0)}
                        </label>
                        <textarea id="noteworthyClients" 
                               {...register('noteworthyClients')}
                               rows={2}
                               autoComplete='off'
                               placeholder={getContextText(3, 0)} 
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                        />
                        {errors.noteworthyClients?.message && (
                            <p className='mt-2 text-sm text-red-400'>
                                {errors.noteworthyClients.message}
                            </p>
                        )}
                </div>

                {/* ROW */}
                <div className="mb-5">
                        <label htmlFor="customerCaseStudy"
                               className="block mb-2 text-sm font-medium text-gray-900">
                                {getCriteriaText(3, 1)}
                        </label>
                        <textarea id="customerCaseStudy" 
                               {...register('customerCaseStudy')}
                               rows={2}
                               autoComplete='off'
                               placeholder={getContextText(3, 1)} 
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                        />
                        {errors.customerCaseStudy?.message && (
                            <p className='mt-2 text-sm text-red-400'>
                                {errors.customerCaseStudy.message}
                            </p>
                        )}
                </div>

                {/* ROW */}
                <div className="mb-5">
                        <label htmlFor="impressiveStats"
                               className="block mb-2 text-sm font-medium text-gray-900">
                                {getCriteriaText(3, 2)}
                        </label>
                        <textarea id="impressiveStats" 
                               {...register('impressiveStats')}
                               rows={2}
                               autoComplete='off'
                               placeholder={getContextText(3, 2)} 
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                        />
                        {errors.impressiveStats?.message && (
                            <p className='mt-2 text-sm text-red-400'>
                                {errors.impressiveStats.message}
                            </p>
                        )}
                </div>

                {/* ROW */}
                <div className="mb-5">
                        <label htmlFor="declareTrackRecord"
                               className="block mb-2 text-sm font-medium text-gray-900">
                                {getCriteriaText(3, 3)}
                        </label>
                        <textarea id="declareTrackRecord" 
                               {...register('declareTrackRecord')}
                               rows={2}
                               autoComplete='off'
                               placeholder={getContextText(3, 3)} 
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                        />
                        {errors.declareTrackRecord?.message && (
                            <p className='mt-2 text-sm text-red-400'>
                                {errors.declareTrackRecord.message}
                            </p>
                        )}
                </div>

                {/* ROW */}
                <div className="mb-5">
                        <label htmlFor="totalClients"
                               className="block mb-2 text-sm font-medium text-gray-900">
                                {getCriteriaText(3, 4)}
                        </label>
                        <textarea id="totalClients" 
                               {...register('totalClients')}
                               rows={2}
                               autoComplete='off'
                               placeholder={getContextText(3, 4)} 
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                        />
                        {errors.totalClients?.message && (
                            <p className='mt-2 text-sm text-red-400'>
                                {errors.totalClients.message}
                            </p>
                        )}
                </div>
            </main>
    </section>
  );

  const Step5 = () => (
    <section>
        <div>
            <h1 className="uppercase text-lg font-semibold">{formSteps[4].label}</h1>
            <h2 className="text-sm text-gray-00">{formSteps[4].description}</h2>
        </div>

        <hr className="mt-2"/>

        <main className="mt-3 md:mt-5">
                {/* ROW */}
                <div className="mb-5">
                        <label htmlFor="usefulContent"
                               className="block mb-2 text-sm font-medium text-gray-900">
                                {getCriteriaText(4, 0)}
                        </label>
                        <textarea id="usefulContent" 
                               {...register('usefulContent')}
                               rows={2}
                               autoComplete='off'
                               placeholder={getContextText(4, 0)} 
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                        />
                        {errors.usefulContent?.message && (
                            <p className='mt-2 text-sm text-red-400'>
                                {errors.usefulContent.message}
                            </p>
                        )}
                </div>

                {/* ROW */}
                <div className="mb-5">
                        <label htmlFor="miscInfo"
                               className="block mb-2 text-sm font-medium text-gray-900">
                                {getCriteriaText(4, 1)}
                        </label>
                        <textarea id="miscInfo" 
                               {...register('miscInfo')}
                               rows={2}
                               autoComplete='off'
                               placeholder={getContextText(4, 1)} 
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                        />
                        {errors.miscInfo?.message && (
                            <p className='mt-2 text-sm text-red-400'>
                                {errors.miscInfo.message}
                            </p>
                        )}
                </div>
            </main>
    </section>
  );

  const Step6 = () => (
    <section>
        <div>
            <h1 className="uppercase text-lg font-semibold">{formSteps[5].label}</h1>
            <h2 className="text-sm text-gray-00">{formSteps[5].description}</h2>
        </div>

        <hr className="mt-2"/>

        <main className="mt-3 md:mt-5">
                <div className="flex items-center mb-4">
                    <h1>I agree to let AngleGenius make the required changes to my company's messaging in order to create effective angles and campaigns.</h1>
                </div>
                {/* ROW */}
                <div  className="flex items-center mb-4">
                        
                        <input type='checkbox'
                                id="chkboxAgree" 
                               {...register('chkboxAgree')}
                               autoComplete='off'
                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                        />

                        <label htmlFor="chkboxAgree"
                               className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Yes, <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">I agree</a>.
                        </label> 
                </div>

                <div>
                    {errors.chkboxAgree?.message && (
                        <p className='text-sm text-red-400'>
                            {errors.chkboxAgree.message}
                        </p>
                    )}
                </div>
            </main>
    </section>
  );


  return (
    <main className="max-w-screen p-6 md:py-8 md:px-20 bg-white rounded-lg shadow">
    <section className=''>
        {/* Title */}
        <h5 className="mb-2 text-xl font-bold tracking-tight text-center">Customize Your Offer</h5>

      {/* Progress indicator */}
      <section className="mt-6 mb-6">
                {/* Choose between detailed progress indicator or simplified progress bar */}
                <div className="hidden md:inline">
                    <ProgressIndicator activeStep={currentStep + 1}/>
                </div>
                <div className="inline md:hidden">
                    <ProgressBar progress={(100 / formSteps.length) * (currentStep + 1)} />
                </div>
            </section>

      {/* Form */}
      
      <form className='my-2 md:my-12' onSubmit={handleSubmit(processForm)}>
        {currentStep === 0 && (
          <motion.div
            initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Step1 />
          </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
            initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Step2 />
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Step3 />
          </motion.div>
        )}

        {currentStep === 3 && (
          <motion.div
            initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Step4 />
          </motion.div>
        )}

        {currentStep === 4 && (
          <motion.div
            initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Step5 />
          </motion.div>
        )}

        {currentStep === 5 && (
          <motion.div
            initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Step6 />
          </motion.div>
        )}
      </form>

        <FormNavigation beacon={currentStep} totalSteps={formSteps.length} backward={prev} foward={next} tender={handleSubmit(processForm)}/>
    </section>
    </main>
  )
}