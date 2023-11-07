import {takeEvery, call, put} from 'redux-saga/effects'


function* catsWorker(){
    console.log('working')
    // yield put(fetchCats)
    const cats = yield call(()=>fetch('https://api.thecatapi.com/v1/breeds'))
    const catsData = yield cats.json()
    console.log(catsData)
}

export default function* catSaga(){
    yield takeEvery('cats/fetchCats', catsWorker)
}