'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Briefcase, Building, Save } from 'lucide-react'

export default function ProfileEditForm() {
  const [name, setName] = useState('John Doe') // This should be fetched from an API in a real app
  const [age, setAge] = useState('30')
  const [designation, setDesignation] = useState('Software Engineer')
  const [companyName, setCompanyName] = useState('Tech Corp')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save the updated profile information to an API
    // For now, we'll just redirect back to the dashboard
    router.push('/dashboard')
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-[#03045E]">Edit Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-[#023E8A]">
              Name
            </label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md border-[#0077B6] focus:outline-none focus:ring-2 focus:ring-[#48CAE4]"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="age" className="text-sm font-medium text-[#023E8A]">
              Age
            </label>
            <Input
              id="age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md border-[#0077B6] focus:outline-none focus:ring-2 focus:ring-[#48CAE4]"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="designation" className="text-sm font-medium text-[#023E8A]">
              Designation
            </label>
            <Input
              id="designation"
              type="text"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md border-[#0077B6] focus:outline-none focus:ring-2 focus:ring-[#48CAE4]"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="companyName" className="text-sm font-medium text-[#023E8A]">
              Company Name
            </label>
            <Input
              id="companyName"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md border-[#0077B6] focus:outline-none focus:ring-2 focus:ring-[#48CAE4]"
            />
          </div>
          <Button type="submit" className="w-full bg-[#0096C7] hover:bg-[#0077B6] text-white">
            <Save className="mr-2 h-4 w-4" /> Save Changes
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

