import { createStore, Store } from 'redux';
import { CalendarState } from './calendar/types';
import rootReducer from './rootReducer';

export interface ApplicationState {
    calendar: CalendarState
}
/* eslint-disable no-underscore-dangle */
const store: Store<ApplicationState> = createStore(
    
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
/* eslint-enable */
export default store
