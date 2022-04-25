import React from 'react'

import { useEffect, useContext, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'

export default function Users() {

  const { getUser, user } = useContext(GithubContext)

  const params = useParams()

  useEffect(() => {
    getUser(params.login)
  }, [])

  return (
    <div>
      {params.login}
    </div>
  )
}
