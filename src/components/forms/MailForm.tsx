import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Label } from '../ui/label'

type Email = {
  id: string
  name: string
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
  message: string
}

export function MailForm() {
  const [formValues, setFormValues] = useState<Email>({
    id: 'Uniqueid',
    name: '',
    status: 'pending',
    email: '',
    message: '',
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }))
  }

  const handleUpload = async () => {
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      })

      if (response.ok) {
        const data = await response.json()
        console.log('Upload successful:', data)
      } else {
        console.error('Error uploading form values:', response.statusText)
      }
    } catch (error) {
      console.error('Error uploading form values:', error)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Send Email</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="mb-2">Send Email</DialogTitle>
          <DialogDescription>Email your issue, and our team will reach out to you to resolve it quickly.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="flex items-center justify-center"></div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" value={formValues.name} onChange={handleInputChange} placeholder="Name" />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" value={formValues.email} onChange={handleInputChange} placeholder="Email" />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" value={formValues.message} onChange={handleInputChange} placeholder="Message" />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleUpload}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
