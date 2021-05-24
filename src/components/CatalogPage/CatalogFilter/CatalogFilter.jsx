/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useCallback, useEffect, useMemo, useState
} from 'react'
import {
  Form
} from 'antd';
import { useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import close from '../../../images/filter/close.svg';
import {
  StyledForm, Wrapper, FilterTitle,
  CloseBtn, AlignBtn, ContainerImage, GlobalStyle
} from './StylesCatalogfilter';
import {checkFormValues} from '../../../utils/checkFormValues';
import styl from '../../../images/filter/styl.svg';
import StyledButton from '../../common/Buttons/StyledButton'
import {FormMenu} from './FormMenu/FormMenu';
import makeConfigFromUrl from '../../../utils/makeConfigFromUrl';
import makeUrlFromConfig from '../../../utils/makeUrlFromConfig';
import { selectMinMaxPrice } from '../../../store/catalog/reducer';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const mapStateToProps = (state) => ({
  minMaxPrice: selectMinMaxPrice(state)
})

const CatalogFilter = connect(mapStateToProps)(({
  showFilter,
  setShowFilter,
  minMaxPrice
}) => {
  const {search} = useLocation()
  const history = useHistory()
  const config = search ? makeConfigFromUrl(search) : {}

  const onFinish = (values) => {
    const refValue = checkFormValues(values)
    if (values.price[0] !== minMaxPrice[0] || values.price[1] !== minMaxPrice[1]) {
      refValue.minPrice = values.price[0]
      refValue.maxPrice = values.price[1]
    }
    delete refValue.price
    if (!Object.keys(refValue)) return
    const filterParts = ['brand', 'categories', 'minPrice', 'maxPrice']
    const refConfig = {
      ...config, ...refValue
    }
    Object.keys(refConfig).forEach((key) => {
      if (filterParts.includes(key) && (refValue[key] === undefined || refValue[key] === null)) {
        delete refConfig[key]
      }
    })
    history.push(`/catalog?${makeUrlFromConfig(refConfig)}`)
    setShowFilter(false)
  };

  const clearForm = () => {
    const {
      brand, categories, minPrice, maxPrice, ...refConfig
    } = config
    history.push(`/catalog?${makeUrlFromConfig(refConfig)}`)
  }

  const fields = useMemo(() => ([
    {
      name: 'brand',
      value: config?.brand || null
    },
    {
      name: 'categories',
      value: config?.categories || null
    },
    {
      name: 'price',
      value: [config.minPrice || minMaxPrice[0], config.maxPrice || minMaxPrice[1]]
    }
  ]), [config.brand, config.categories, config.maxPrice, config.minPrice, minMaxPrice])

  return (
    <StyledForm fields={fields} {...layout} onFinish={onFinish}>
      <GlobalStyle showFilter={showFilter} />
      <Wrapper showFilter={showFilter}>
        <FilterTitle>
          <h3>Filter By</h3>
          <CloseBtn onClick={() => setShowFilter(false)}>
            <img src={close} alt="close" />
          </CloseBtn>
        </FilterTitle>
        <FormMenu filter={config} />
        <AlignBtn>
          <StyledButton
            size="sm"
            shape="round"
            htmlType="submit"
            style={{margin: 10, padding: 7}}
          >
            Apply Filter
          </StyledButton>
          <StyledButton
            size="sm"
            shape="round"
            color="borderGrey"
            onClick={clearForm}
            style={{margin: 10, padding: 7}}
          >
            Clear Filter
          </StyledButton>
        </AlignBtn>
        <ContainerImage>
          <img src={styl} alt="styl" />
        </ContainerImage>
      </Wrapper>
    </StyledForm>
  );
})

export default CatalogFilter