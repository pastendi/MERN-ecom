import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { useFilterContext } from '../../context/FilterContext'
import { Wrapper } from '../../style/Filter'
import { formatPrice } from '../utils/formatPrice'
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
          <div className='form-control'>
            <h5>Category</h5>
            {categories.map((c, index) => {
              return (
                <button
                  key={index}
                  className={`${category === c ? 'active' : null}`}
                  onClick={changeFilters}
                  type='button'
                  name='category'
                >
                  {c}
                </button>
              )
            })}
          </div>
          <div className='form-control'>
            <h5>Companies</h5>
            <select
              name='company'
              value={company}
              onChange={changeFilters}
              className='company'
            >
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                )
              })}
            </select>
          </div>
          <div className='form-control'>
            <h5>Colors</h5>
            <div className='colors'>
              {colors.map((c, index) => {
                if (c === 'all') {
                  return (
                    <button
                      key={index}
                      name='color'
                      onClick={changeFilters}
                      data-color='all'
                      className={`${
                        color === 'all' ? 'all-btn active' : 'all-btn'
                      }`}
                    >
                      all
                    </button>
                  )
                }
                return (
                  <button
                    key={index}
                    name='color'
                    style={{ background: c }}
                    className={`${
                      color === c ? 'color-btn active' : 'color-btn'
                    }`}
                    data-color={c}
                    onClick={changeFilters}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                )
              })}
            </div>
          </div>
          <div className='form-control'>
            <h5>Price</h5>
            <p className='price'>{formatPrice(price)}</p>
            <input
              type='range'
              name='price'
              onChange={changeFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          <div className='form-control shipping'>
            <label htmlFor='shipping'>Free shipping</label>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              onChange={changeFilters}
              checked={shipping}
            />
          </div>
        </form>
        <button type='button' className='clear-btn' onClick={clearFilters}>
          Clear filters
        </button>
      </div>
    </Wrapper>
  )
}

export default Filter
