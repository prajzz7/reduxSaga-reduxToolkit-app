import {takeEvery, call, put} from 'redux-saga/effects'
import { fetchCats, fetchCatsSuccess } from './catState'


function* catsWorker(){
    const cats = yield call(()=>fetch('https://api.thecatapi.com/v1/breeds'))
    const catsData = yield cats.json()
    console.log(catsData)
    yield put(fetchCatsSuccess(catsData))
}

export default function* catSaga(){
    yield takeEvery('cats/fetchCats', catsWorker)
}