import {mainRequestService} from './request.service'

const getService = q => {
  const url = config.urls.adress.replace('{query}', q).replace('{language}', config.translations.language)
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  return mainRequestService(url, options)
}
export default getService
