import { ref } from 'vue'
import axios from 'axios'

const data = ref([])
const error = ref(null)
const url = 'https://analisi.transparenciacatalunya.cat/resource/rsgi-8ymj.json'

export function useFetch(filter) {
  const getData = async () => {
    try {
      let res
      if (!filter) res = await axios.get(url)
      else res = await axios.get(url + filter)
      if (res.status !== 200) throw new Error(`Could not fetch data`)
      const resData = res.data
      data.value = resData
    } catch (err) {
      error.value = err.message
    }
  }

  return { data, error, getData }
}
