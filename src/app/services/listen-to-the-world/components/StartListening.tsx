'use client'
import Button from '../../ui/Button'
export default function StartListening() {
    const call =() =>{
        console.log("called")
    }
  return (
    <div className="mt-0 flex flex-col items-center text-center space-y-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Start Listening Now
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={call} >Download Now</Button>
            <Button onClick={call} >Listen Live</Button>
          </div>
        </div>
  )
}
