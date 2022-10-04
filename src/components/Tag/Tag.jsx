import { useContext, useState } from 'react'
import { FiltersContext } from '../../context/FiltersContext'
import './Tag.css'

const Tag = ({tag}) => {
  const [active, setActive] = useState('')
  const { filters, setFilters } = useContext(FiltersContext)

  const handleSelect = () => {
    if (active) {
      setFilters({...filters, tagFilter:filters.tagFilter.filter(tagF => tagF !== tag.value)})
    } else {
      setFilters({...filters, tagFilter:[...filters.tagFilter, tag.value]})
    }
    
    setActive(current => !current)
  }

  return (
    <button className={`tag ${active ? "active" : ""}`} onClick={handleSelect}>{tag.value}</button>
  )
}

export default Tag