import { createBrowserRouter } from "react-router-dom"
import PaginaInicial from "../paginas/PaginaInicial"
import SelecaoCliente from "../paginas/cadastro/SelecaoCliente";
import LayoutBaseCadastro from "../paginas/cadastro/LayoutBaseCadastro";
import LayoutBase from "../paginas/LayoutBase";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<LayoutBase/>,
        children: [
            {
                path: 'cadastro',
                element:<LayoutBaseCadastro/>,
                children: [
                    {
                        path: '',
                        element:<SelecaoCliente/>
                    },
                    {
                        path: 'cliente',
                        element: <h1> Interesse</h1>
                    },
                    {
                        path: 'dados-pessoais',
                        element: <h1> Dados Pessoais</h1>
                    },
                    {
                        path: 'concluido',
                        element: <h1> Concluido</h1>
                    }
                ]
            }
        ],
    },
]);