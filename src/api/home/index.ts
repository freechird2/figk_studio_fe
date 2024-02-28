import { apiHeader } from 'api/constant'
import { GenericResponse } from 'model/common'

const Home = {
    getHomeList: async () => {
        const response = await apiHeader(true, 'b').get<GenericResponse>(`figk/home`)
        return response.data
    },
}

export default Home
