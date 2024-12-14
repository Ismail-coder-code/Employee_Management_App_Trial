import AttendanceTracker from '../components/attendance-tracker'

export default function AttendancePage() {
  return (
    <main className="min-h-screen bg-[#CAF0F8] p-6">
      <h1 className="text-2xl font-bold text-[#03045E] mb-6">Attendance Tracker</h1>
      <AttendanceTracker />
    </main>
  )
}

