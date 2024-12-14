'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Calendar, DollarSign, TrendingUp, Bell, Edit } from 'lucide-react'
import Link from 'next/link'

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [userName, setUserName] = useState('John Doe') // This should be fetched from an API in a real app

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="p-6 space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#03045E]">Welcome, {userName}</h1>
        <div className="flex items-center space-x-4">
          <div className="text-[#023E8A]">
            <Clock className="inline-block mr-2" />
            {currentTime.toLocaleTimeString()}
          </div>
          <Link href="/profile-edit">
            <Button className="bg-[#0096C7] hover:bg-[#0077B6] text-white">
              <Edit className="mr-2 h-4 w-4" /> Edit Profile
            </Button>
          </Link>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-[#03045E] flex items-center">
              <MapPin className="mr-2" /> Attendance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-[#0096C7] hover:bg-[#0077B6] text-white">
              Clock In/Out
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-[#03045E] flex items-center">
              <Calendar className="mr-2" /> Leave Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-[#0096C7] hover:bg-[#0077B6] text-white">
              Request Leave
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-[#03045E] flex items-center">
              <DollarSign className="mr-2" /> Payroll
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-[#0096C7] hover:bg-[#0077B6] text-white">
              View Payslip
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-[#03045E] flex items-center">
              <TrendingUp className="mr-2" /> Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-[#0096C7] hover:bg-[#0077B6] text-white">
              View Feedback
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-[#03045E] flex items-center">
              <Bell className="mr-2" /> Announcements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[#023E8A]">New company policy update available.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

