// components/FormInterface.js
'use client'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { DataTableDemo } from '@/components/EmailTable/EmailTable'
import { UploadLogo } from '@/components/forms/UpdateLogo/UpdateLogo'
import { UploadText } from '@/components/forms/UpdateText/UpdateText'
import { MailForm } from '@/components/forms/MailForm'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface SubmittedForm {
  id: number
  name: string
  email: string
  subject: string
  message: string
}

const FormInterface = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '', subject: '' })
  const [submittedForms, setSubmittedForms] = useState<SubmittedForm[]>([])
  useEffect(() => {
    getForms()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      // Submit form data to the API
      const response = await fetch('/api/post_email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      })

      if (response.ok) {
        console.log('Form submitted successfully')
        getForms()
      } else {
        console.error('Failed to submit form')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const getForms = async () => {
    try {
      const response = await fetch('/api/get_email')

      if (response.ok) {
        const formsData: SubmittedForm[] = await response.json()
        setSubmittedForms(formsData)
      } else {
        console.error('Failed to get forms')
      }
    } catch (error) {
      console.error('Error getting forms:', error)
    }
  }

  return (
    <div className=" mx-auto my-8 p-6">
      <div className="flex flex-col gap-2 items-start">
        <Button className="mb-4">Back to Dashboard</Button>
        <h2 className="text-2xl font-semibold mb-4">Admin Panel</h2>
        <div className="flex flex-col lg:flex-row lg:items-center items-start justify-start gap-5">
          <UploadLogo />
          <UploadText />
          <MailForm />
        </div>
      </div>

      <hr className="my-8 mx-20 bg-black border-0.5 border-gray-300" />
      <h2>Check out the emails here</h2>
      {/* List of submitted forms */}
      <DataTableDemo />
    </div>
  )
}

export default FormInterface
