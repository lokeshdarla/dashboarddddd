// components/FormInterface.js
"use client"
import { useState, useEffect } from 'react';

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
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-md shadow-md">
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
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Submit Form
        </button>
      </form>

      <hr className="my-8" />

      {/* List of submitted forms */}
      <h3 className="text-xl font-semibold mb-4">Submitted Forms</h3>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Message</th>
          </tr>
        </thead>
        <tbody>
          {submittedForms.map((form) => (
            <tr key={form.id} className="mb-4">
              <td className="border-t border-gray-200 py-2">{form.id}</td>
              <td className="border-t border-gray-200 py-2">{form.name}</td>
              <td className="border-t border-gray-200 py-2">{form.email}</td>
              <td className="border-t border-gray-200 py-2">{form.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormInterface;
