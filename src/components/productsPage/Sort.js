import React from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import { Wrapper } from '../../style/Sort'
import { useFilterContext } from '../../context/FilterContext'

const Sort = () => {
  const {
    filteredProducts,
    sort,
    updateSort,
    setGridView,
    setListView,
    isGridView,
  } = useFilterContext()
  return (
    <Wrapper>
      <div className='btn-container'>
        <button
          type='button'
          className={`${isGridView ? 'active' : null}`}
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          type='button'
          className={`${isGridView ? null : 'active'}`}
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>
      <p>{filteredProducts.length} products found</p>
      <hr />
      <form>
        <label htmlFor='sort'>Sort by</label>
        <select
          name='sort'
          id='sort'
          className='sort-input'
          value={sort}
          onChange={updateSort}
        >
          <option value='price-lowest'>price-lowest</option>
          <option value='price-highest'>price-highest</option>
          <option value='name-a'>a-z</option>
          <option value='name-z'>z-a</option>
        </select>
      </form>
    </Wrapper>
  )
}

export default Sort
