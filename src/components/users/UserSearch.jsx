import { useState, useContext } from "react"
import GithubContext from "../../context/github/GithubContext"
import AlertContext from "../../context/alert/AlertContext"

export default function UserSearch() {
  const [text, setText] = useState('')

  const { users, searchUsers, clearList } = useContext(GithubContext)

  const { setAlert } = useContext(AlertContext)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(text === '') {
      setAlert('You should enter some text', 'error')
    } else {
      searchUsers(text)
      setText('')
    }
  }
  
  const clearTarget = () => {
    if(text.length) {
      setText('')
    } else {
      clearList(users)
    }
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2
    lg:grid-cols-2 md:grid-cols-1 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input 
                type="text" 
                className="
                  w-full pr-40 bg-gray-200 
                  input input-lg text-black"
                  placeholder="Search"
                  value={text}
                  onChange={handleChange}
              />
              <button
                type="submit"
                className="
                  absolute top-0 right-0 
                  rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {text.length || users.length ? (
              <div>
              <button 
                className="btn btn-ghost btn-lg"
                onClick={() => clearTarget()}
                >
                Clear
              </button>
            </div>
      ): null}
    </div> 
  )
}
