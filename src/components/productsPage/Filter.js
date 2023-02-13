import React from 'react'
import { useFilterContext } from '../../context/FilterContext'
import { Wrapper } from '../../style/Filter'
import { getUniqueValues } from '../utils/uniqueValues'

const Filter = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    changeFilters,
    clearFilters,
    allProducts,
  } = useFilterContext()
  const categories = getUniqueValues(allProducts, 'category')
  const companies = getUniqueValues(allProducts, 'company')
  const colors = getUniqueValues(allProducts, 'colors')
  console.log(categories, companies, colors)
  return (
    <Wrapper>
      <div className='content'>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='form-control'>
            <input
              type='text'
              name='text'
              placeholder='search'
              className='search-input'
              value={text}
              onChange={changeFilters}
            />
          </div>
        </form>
      </div>
    </Wrapper>
  )
}

export default Filter
