const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


// Get search results
export const searchUsers = async (text) => {
  // define search params for query
  const params = new URLSearchParams({
    q: text
  })
  const res = await fetch(
    `${GITHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    }
  })
  const { items } = await res.json()

  return items
}