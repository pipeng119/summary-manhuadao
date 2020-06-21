import request from '@/service/apiRequest';
export const fetchList = data => request.get('/list', data)