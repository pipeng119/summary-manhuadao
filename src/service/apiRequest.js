import HttpRequest from './httpRequest'

import {
    API_BASE_URL
} from '@/config/httpConfig'

const ApiHttpRequest = new HttpRequest(API_BASE_URL)

export default ApiHttpRequest