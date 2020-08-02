import { all, call, put, takeLatest } from 'redux-saga/effects'
import * as Constant from '../constant/constant'

const fetch_data = async (url) => {
    const response = await fetch(url);
    const data = await response.json()
    return {
        data: data,
        status: response.status
    }
}

function* get_img_data(val) {
    console.log(val)
    try {
        const getApiData = yield call(fetch_data, 'https://api.unsplash.com/search/photos?query=' + val.payload + '&&page=1&&per_page=30&&client_id=-by3S4IDwnWpWoJlnOX6eVD90qLdPtpzvkmaUHrRkU8')
        console.log(getApiData.data.results)
        yield put({ type: 'LOAD_API_DATA', payload: getApiData.data.results })
    } catch (error) {
        console.log('error')
    }
}

function* RootSaga() {
    yield takeLatest(Constant.GET_ALL_IMG, get_img_data)
}
export default RootSaga