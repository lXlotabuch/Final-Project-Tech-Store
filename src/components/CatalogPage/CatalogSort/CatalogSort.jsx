import React from 'react'
import PropTypes from 'prop-types';
import 'antd/dist/antd.css'
import { Select } from 'antd'
import { useHistory, useLocation } from 'react-router-dom';
import {
  FilterBtn, SelectWrapper, StyledSelect, Wrapper
} from './StyledCatalogSort';
import makeConfigFromUrl from '../../../utils/makeConfigFromUrl';
import makeUrlFromConfig from '../../../utils/makeUrlFromConfig';

const CatalogSort = ({setShowFilter}) => {
  const {search} = useLocation()
  const history = useHistory()
  const config = search ? makeConfigFromUrl(search) : {}
  
  const onChange = (value, key) => {
    if (value !== 'default') {
      config[key] = value
      history.push(`/catalog?${makeUrlFromConfig(config)}`)
    } else {
      const {sort, ...rest} = config
      history.push(`/catalog?${makeUrlFromConfig(rest)}`)
    }
  }

  return (
    <Wrapper>
      <FilterBtn type="submit" onClick={() => setShowFilter((prev) => !prev)}>Filter</FilterBtn>
      <SelectWrapper>
        <span className="title-select">Sort By:</span>
        <StyledSelect bordered={false} onChange={(value) => onChange(value, 'sort')} value={config.sort || 'default'}>
          <Select.Option value="default">Position</Select.Option>
          <Select.Option value="+currentPrice">From min price</Select.Option>
          <Select.Option value="-currentPrice">From max price</Select.Option>
        </StyledSelect>
      </SelectWrapper>
      <SelectWrapper>
        <span className="title-select">Show:</span>
        <StyledSelect bordered={false} onChange={(value) => onChange(value, 'perPage')} value={config.perPage || '16'}>
          <Select.Option value="16">16 per page</Select.Option>
          <Select.Option value="32">32 per page</Select.Option>
          <Select.Option value="48">48 per page</Select.Option>
          <Select.Option value="64">64 per page</Select.Option>
        </StyledSelect>
      </SelectWrapper>
    </Wrapper>
  )
}

CatalogSort.propTypes = {
  setShowFilter: PropTypes.func.isRequired,
}

export default CatalogSort