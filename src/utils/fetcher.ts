import axios from 'axios'

export const fetcher = (url: string): Promise<any> => {
  return axios.get(url).then((res) => res.data)
}
