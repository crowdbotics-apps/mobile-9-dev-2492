import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth2101Saga from '../features/EmailAuth2101/redux/sagas';
import EmailAuth2100Saga from '../features/EmailAuth2100/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth2101Saga,
EmailAuth2100Saga,
EmailAuthSaga,
    
  ]);
}