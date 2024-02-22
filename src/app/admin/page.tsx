// components/FormInterface.js
"use client"
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { DataTableDemo } from '@/components/EmailTable/EmailTable';

interface FormData {
  name: string;
  email: string;
  subject:string;
  message: string;
}

interface SubmittedForm {
  id: number;
  name: string;
  email: string;
  subject:string;
  message: string;
}

const FormInterface = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' ,subject: ''});
  const [submittedForms, setSubmittedForms] = useState<SubmittedForm[]>([]);
  useEffect(() => {
    getForms();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Submit form data to the API
      const response = await fetch('/api/post_email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        getForms();
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const getForms = async () => {
    try {
      const response = await fetch('/api/get_email');

      if (response.ok) {
        const formsData: SubmittedForm[] = await response.json();
        setSubmittedForms(formsData);
      } else {
        console.error('Failed to get forms');
      }
    } catch (error) {
      console.error('Error getting forms:', error);
    }
  };

  return (
    <div className=" mx-auto my-8 p-6 ">
      <h2 className="text-2xl font-semibold mb-4">Form Interface</h2>

      {/* Form for submitting */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          ></textarea>
        </div>
      <Button>Click me</Button>
      </form>

      <hr className="my-8" />

      {/* List of submitted forms */}
      <DataTableDemo/>
    </div>
  );
};

export default FormInterface;
