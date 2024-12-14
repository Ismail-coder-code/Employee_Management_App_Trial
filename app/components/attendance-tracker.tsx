'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock } from 'lucide-react'

export default function AttendanceTracker() {
  const [isClockedIn, setIsClockedIn] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null)

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const handleClockInOut = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(position.coords)
          setIsClockedIn(!isClockedIn)
        },
        (error) => {
          console.error("Error getting location:", error)
          alert("Unable to get your location. Please enable location services and try again.")
        }
      )
    } else {
      alert("Geolocation is not supported by your browser.")
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-[#03045E] flex items-center">
          <MapPin className="mr-2" /> Current Location
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-[#023E8A]">
          {location ? (
            <>
              <p>Latitude: {location.latitude.toFixed(6)}</p>
              <p>Longitude: {location.longitude.toFixed(6)}</p>
            </>
          ) : (
            <p>Location not available</p>
          )}
        </div>
        <div className="text-[#023E8A] flex items-center">
          <Clock className="mr-2" />
          {currentTime.toLocaleTimeString()}
        </div>
        <Button 
          onClick={handleClockInOut} 
          className={`w-full ${isClockedIn ? 'bg-[#0077B6]' : 'bg-[#0096C7]'} hover:bg-[#00B4D8] text-white`}
        >
          {isClockedIn ? 'Clock Out' : 'Clock In'}
        </Button>
      </CardContent>
    </Card>
  )
}

