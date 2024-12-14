'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Briefcase, Building } from 'lucide-react'

export default function ProfileSetupForm() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [designation, setDesignation] = useState('')
  const [companyName, setCompanyName] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  
    router.push('/dashboard')
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-[#03045E]">Profile Setup</CardTitle>
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
              placeholder="Enter your name"
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
              placeholder="Enter your age"
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
              placeholder="Enter your designation"
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
              placeholder="Enter your company name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md border-[#0077B6] focus:outline-none focus:ring-2 focus:ring-[#48CAE4]"
            />
          </div>
          <Button type="submit" className="w-full bg-[#0096C7] hover:bg-[#0077B6] text-white">
            <User className="mr-2 h-4 w-4" /> Set Up Profile
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

