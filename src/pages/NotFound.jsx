import { FaTimesCircle, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='hero'>
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <FaTimesCircle className='text-6xl hero mb-5'/>
          <h1 className="text-3xl font-bold mb-8 mb-20">
            Page not found
          </h1>
         
          <Link to = '/' className='btn btn-secondary'>
            <FaHome className='mr-2'/>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
