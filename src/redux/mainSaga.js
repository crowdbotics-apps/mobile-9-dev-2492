import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth2112Saga from '../features/EmailAuth2112/redux/sagas';
import EmailAuth2111Saga from '../features/EmailAuth2111/redux/sagas';
import EmailAuth2105Saga from '../features/EmailAuth2105/redux/sagas';
import EmailAuth2104Saga from '../features/EmailAuth2104/redux/sagas';
import EmailAuth2103Saga from '../features/EmailAuth2103/redux/sagas';
import EmailAuth2102Saga from '../features/EmailAuth2102/redux/sagas';
import EmailAuth2101Saga from '../features/EmailAuth2101/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth2112Saga,
EmailAuth2111Saga,
EmailAuth2105Saga,
EmailAuth2104Saga,
EmailAuth2103Saga,
EmailAuth2102Saga,
EmailAuth2101Saga,
EmailAuthSaga,
    
  ]);
}