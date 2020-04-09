import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth2114Reducer from '../features/EmailAuth2114/redux/reducers';
import EmailAuth2113Reducer from '../features/EmailAuth2113/redux/reducers';
import EmailAuth2112Reducer from '../features/EmailAuth2112/redux/reducers';
import EmailAuth2111Reducer from '../features/EmailAuth2111/redux/reducers';
import EmailAuth2105Reducer from '../features/EmailAuth2105/redux/reducers';
import EmailAuth2104Reducer from '../features/EmailAuth2104/redux/reducers';
import EmailAuth2103Reducer from '../features/EmailAuth2103/redux/reducers';
import EmailAuth2102Reducer from '../features/EmailAuth2102/redux/reducers';
import EmailAuth2101Reducer from '../features/EmailAuth2101/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth2114: EmailAuth2114Reducer,
EmailAuth2113: EmailAuth2113Reducer,
EmailAuth2112: EmailAuth2112Reducer,
EmailAuth2111: EmailAuth2111Reducer,
EmailAuth2105: EmailAuth2105Reducer,
EmailAuth2104: EmailAuth2104Reducer,
EmailAuth2103: EmailAuth2103Reducer,
EmailAuth2102: EmailAuth2102Reducer,
EmailAuth2101: EmailAuth2101Reducer,
EmailAuth: EmailAuthReducer,

});