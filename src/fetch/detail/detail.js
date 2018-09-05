import { get } from '../get'

export function getInfoData() {
   const result = get('http://localhost:3000/mock/fetchNeed/index.json')
   return result
}

export function getCommentData(page, id) {
    const result = get('/api/detail/comment/' + page + '/' + id)
    return result
}