import {call, put, takeEvery} from 'redux-saga/effects';
import {USER_LOGIN} from "../types";
import {addErrorAC} from "../actions/error.actions";
import {LOGIN_URL} from "../../utils/urls";

async function RequestLogin(payload) {
    const response = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: {'Content-type': 'Application/json'},
        body: JSON.stringify({payload})
    })
    const resJSON = await response.json();
    return resJSON

}

function* loginWorker({payload}) {
    const response = yield call(RequestLogin, payload);
    if (response.success) localStorage.setItem('jwt', response.token)
    yield put(addErrorAC(response.message));
}

export function* loginWatcher() {
    yield takeEvery(USER_LOGIN, loginWorker);
}