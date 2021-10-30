
import * as request from "./requester.js"

let baseUrl = 'https://api.spacex.land/rest/launches-past'

export const getAllData = () => request.get(baseUrl)
