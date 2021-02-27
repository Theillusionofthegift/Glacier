import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

const SearchInput = () => {
  const [query, setQuery] = useState("")
  const history = useHistory()

  function onChange(e) {
    setQuery(e.target.value)
  }

  useEffect(() => {
    const params = new URLSearchParams()
    if (query) {
      params.append("search", query)
    } else {
      params.delete("search")
    }
    history.push({search: params.toString()})
  }, [query, history])

  return <input type="text" value={query} onChange={onChange} />
}

export default SearchInput