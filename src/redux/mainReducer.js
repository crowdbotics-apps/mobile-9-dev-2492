import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth2105Reducer from '../features/EmailAuth2105/redux/reducers';
import EmailAuth2104Reducer from '../features/EmailAuth2104/redux/reducers';
import EmailAuth2103Reducer from '../features/EmailAuth2103/redux/reducers';
import EmailAuth2102Reducer from '../features/EmailAuth2102/redux/reducers';
import EmailAuth2101Reducer from '../features/EmailAuth2101/redux/reducers';
import EmailAuth2100Reducer from '../features/EmailAuth2100/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth2105: EmailAuth2105Reducer,
EmailAuth2104: EmailAuth2104Reducer,
EmailAuth2103: EmailAuth2103Reducer,
EmailAuth2102: EmailAuth2102Reducer,
EmailAuth2101: EmailAuth2101Reducer,
EmailAuth2100: EmailAuth2100Reducer,
EmailAuth: EmailAuthReducer,

});