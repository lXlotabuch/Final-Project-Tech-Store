/* eslint-disable react/jsx-props-no-spreading */
import {
  Checkbox, Form, Menu, Slider
} from 'antd'
import React, { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { brands as defBrands, categories as defCategories, checkFilterConfig } from '../../filterConfig'
import { StyledCheckbox } from '../StylesCatalogfilter'
import makeConfigFromUrl from '../../../../utils/makeConfigFromUrl';
import { selectMinMaxPrice } from '../../../../store/catalog/reducer';

const layout = {
  wrapperCol: { span: 24 }
}

const mapStateToProps = (state) => ({
  minMaxPrice: selectMinMaxPrice(state)
})

export const FormMenu = connect(mapStateToProps)(({minMaxPrice}) => {
  const {search} = useLocation()
  const config = useMemo(() => (search ? makeConfigFromUrl(search) : {}), [search])
  const [{brand, categories}, setConfig] = useState({brand: defBrands, categories: defCategories})

  const checkConfig = async (search = {}) => {
    const newConfig = search.categories ? await checkFilterConfig(search) : {}
    if (Object.keys(newConfig).length) {
      setConfig((prev) => ({
        ...prev,
        ...newConfig
      }))
    } else setConfig({brand: defBrands, categories: defCategories})
  }

  useEffect(() => {
    checkConfig(config)
  }, [config])

  return (
    <Menu defaultOpenKeys={['сategories', 'brands', 'price']} mode="inline">
      <Menu.SubMenu key="сategories" title="Сategories">
        <Form.Item name="categories" noStyle>
          <Checkbox.Group style={{width: '100%'}}>
            {categories?.map(({value, title}) => (
              <StyledCheckbox
                key={value}
                value={value}
              >
                {title}
              </StyledCheckbox>
            ))}
          </Checkbox.Group>
        </Form.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="brands" title="Brand">
        <Form.Item name="brand" noStyle>
          <Checkbox.Group style={{width: '100%'}}>
            {brand?.map(({value, title}) => (
              <StyledCheckbox
                key={value}
                value={value}
              >
                {title}
              </StyledCheckbox>
            ))}
          </Checkbox.Group>
        </Form.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="price" title="Price">
        <div style={{padding: '20px 20px 0'}}>
          <Form.Item name="price" {...layout}>
            <StyledSlider
              step={100}
              range
              min={minMaxPrice[0]}
              max={minMaxPrice[1]}
            />
          </Form.Item>
        </div>
      </Menu.SubMenu>
    </Menu>
  )
})

const StyledSlider = styled(Slider)`
`

export default FormMenu