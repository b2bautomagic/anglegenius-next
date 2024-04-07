'use client'

import { z } from 'zod'
import { FormDataSchema } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { createContext, useContext } from 'react';

export const FormContext = createContext({});

export type Inputs = z.infer<typeof FormDataSchema>

export const useFormlet = () => {
    const  {
        register,
        handleSubmit,
        watch,
        reset,
        trigger,
        formState: { errors }
      } = useForm<Inputs>({
        resolver: zodResolver(FormDataSchema)
      })

      return { register, handleSubmit, watch, reset, trigger, errors };
}


