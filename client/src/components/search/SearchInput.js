import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import {Form,
        FormControl,
        Button} from 'react-bootstrap'

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
    history.push({ search: params.toString() })
  }, [])

  return (<Form inline className="mx-auto">
           <FormControl type="text" placeholder="Search" className="mr-sm-2" value={query} onChange={onChange} />
           <Button variant="outline-light">Search</Button>
          </Form>)
}

export default SearchInput