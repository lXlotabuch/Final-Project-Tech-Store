import React, {
  useCallback, useEffect, useRef, useState
} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Input, SearchInputBlock, SearchOutlinedStyled, FormContainer
} from '../HeaderStyled'
import { getSearchProducts } from '../../../store/catalog/middleware';
import { CloseList, SearchList } from './StyledSearchProducts';
import { Product} from './Product/Product';
import { clearSearchProducts} from '../../../store/catalog/actionCreator';
import { selectSearchProducts } from '../../../store/catalog/reducer';

const mapStateToProps = (state) => ({
  searchProducts: selectSearchProducts(state)
})

const SearchProducts = connect(mapStateToProps, {clearSearchProducts, getSearchProducts})(({
  searchProducts,
  hideInput,
  setHideInput,
  getSearchProducts,
  clearSearchProducts
}) => {
  const [search, setSearch] = useState('')
  const checkProductsLength = Boolean(searchProducts.length)

  const onChange = (e) => {
    const {value} = e.target
    setSearch(value)
    if (value.length > 2) {
      getSearchProducts({query: value})
    } else clearSearchProducts()
  }

  const reset = useCallback(() => {
    clearSearchProducts()
    setSearch('')
    setHideInput()
  }, [clearSearchProducts, setHideInput])

  const windowListener = useCallback(() => {
    if (checkProductsLength) {
      reset()
    }
  }, [checkProductsLength, reset])

  const listener = useRef(windowListener)

  useEffect(() => { listener.current = windowListener })

  useEffect(() => {
    const refListener = (e) => listener.current(e)
    window.addEventListener('click', refListener)
    return () => { window.removeEventListener('click', refListener) }
  }, [reset])

  return (
    <FormContainer
      id="search-form"
      onKeyUp={(e) => ((e.code === 'Escape') && reset())}
      hideInput={hideInput}
      onSubmit={(e) => e.preventDefault()}
    >
      <SearchInputBlock>
        <SearchOutlinedStyled />
        <Input
          value={search}
          onChange={onChange}
          name="search"
          type="text"
          placeholder="Search..."
        />
        {checkProductsLength && (
        <CloseList onClick={reset}>
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="far" data-icon="times-circle" className="svg-inline--fa fa-times-circle fa-w-16" role="img" viewBox="0 0 512 512"><path fill="gray" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" /></svg>
        </CloseList>
        )}
      </SearchInputBlock>
      <SearchList>
        {searchProducts.map((product, index) => (
          index < 5 && (
          <Product
            reset={reset}
            key={product.itemNo}
            product={product}
          />
          )
        ))}

        {checkProductsLength
        && (
        <Link
          style={{display: 'inline-block', padding: '10px 0', width: '100%'}}
          onClick={reset}
          to="/catalog"
        >
          All Products...
        </Link>
        )}
      </SearchList>
    </FormContainer>
  )
})

SearchProducts.propTypes = {
  hideInput: PropTypes.bool.isRequired,
  setHideInput: PropTypes.func.isRequired
}

export default React.memo(SearchProducts)