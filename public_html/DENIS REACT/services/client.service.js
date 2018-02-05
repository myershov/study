import {mainRequestService} from './request.service'

export const postService = body => {
  const url = config.urls.main + config.urls.add_client
  const options = {
    mode: 'cors',
    method: 'POST',
    body
  }
  return mainRequestService(url, options)
}

export const getService = q => {
  const url = config.urls.main + config.urls.add_client_url.replace('{query}', q)
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  return mainRequestService(url, options)
}
