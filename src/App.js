import AppRouter from './components/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

export const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    CHOOSE_OPERATION: 'choose-operation',
    CLEAR: 'clear',
    DELETE_DIGIT: 'delete-digit',
    EVALUATE: 'evaluate',
}

const App = () => {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
}

export default App
