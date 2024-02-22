import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function UploadText() {
  const [newGreeting, setNewGreeting] = useState<string>('')

  const handleUpload = async () => {
    const data = { text: newGreeting }

    try {
      const response = await fetch('api/update_text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const responseData = await response.json()
        console.log('Upload response:', responseData)
      } else {
        console.error('Error uploading file:', response.status, response.statusText)
      }
    } catch (error) {
      console.error('Error uploading file:', error)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Update Greetings Line</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload Greetings</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="greetings" className="mb-2">
              Tagline
            </Label>
            <Input
              id="greetings"
              placeholder="Name of your project"
              onChange={(e) => {
                setNewGreeting(e.target.value)
              }}
            />
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
