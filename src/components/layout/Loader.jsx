import Spinner from './assets/loader.gif'

export default function Loader() {
  return (
    <div className='w-20 mt-10'>
      <img src={Spinner} alt="Loading..." />
      <h3 className="text-2xl hero mt-5">Loading...</h3>
    </div>
  )
}
