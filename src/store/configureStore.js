import { createStore } from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState) {


    /* eslint-disable no-underscore-dangle */
    const store = createStore(rootReducer, initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    /* eslint-enable */

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }


    return store
}