import { createBrowserRouter } from 'react-router-dom'
import App from '../App.jsx'
import Home from '../pages/Home/Home.jsx'
import Cadastro from '../pages/Cadastro-Trilhas/Cadastro.jsx'
import Listagem from '../pages/Listagem-Trilhas/Listagem.jsx'
import ErroPage from '../pages/Erro/ErroPage.jsx'

const routers = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErroPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/cadastro-trilhas",
                element: <Cadastro />,

            },
            {
                path: "/lista-trilhas",
                element: <Listagem />
            }
        ]
    }
])

export default routers;
