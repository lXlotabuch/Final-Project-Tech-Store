import axios from 'axios';
import { DOMAIN } from '../../utils/constants';
import { getMainCatalogCreater, startLoading, stopLoading } from './actionCreator';

export const getMainCatalogProducts = () => (dispatch) => {
  dispatch(startLoading())
  axios.get(`${DOMAIN}/products`)
    .then((data) => {
      const gamingMonitorList = []
      const desctopsList = []
      const laptopList = []
      const tabletList = []

      data.data.forEach((product) => {
        switch (product.categories) {
          case 'gamingMonitors':
            if (
              gamingMonitorList.length < 4
              && product.quantity > 0
              && product.newProduct === 'no'
            ) gamingMonitorList.push(product)
            break

          case 'desctops':
            if (
              desctopsList.length < 4
              && product.quantity > 0
              && product.newProduct === 'no'
            ) desctopsList.push(product)
            break

          case 'laptops':
            if (
              laptopList.length < 4
              && product.quantity > 0
              && product.newProduct === 'no'
            ) laptopList.push(product)
            break

          case 'tablets':
            if (
              tabletList.length < 4
              && product.quantity > 0
              && product.newProduct === 'no'
            ) tabletList.push(product)
            break

          default:
            return null
        }

        return null
      })

      const combinePayload = {
        gamingMonitorList,
        desctopsList,
        laptopList,
        tabletList
      }

      dispatch(getMainCatalogCreater(combinePayload))
    })
    .catch((error) => error.response)
    .finally(() => {
      dispatch(stopLoading())
    })
}

export default getMainCatalogProducts