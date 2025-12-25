import { MainLayout } from "../layouts/mainLayout"
import { TodoList } from "../components/Todo/TodoList"
import { Login } from "../components/Login/Login"

export const routers = [
    {
        element: <MainLayout />,
        children: [
            {path: '/', element: <TodoList />},
            {path: '/login', element: <Login />}
        ]
        
    }
]