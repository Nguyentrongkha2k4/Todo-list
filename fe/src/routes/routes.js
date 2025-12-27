import { MainLayout } from "../layouts/mainLayout"
import { TodoList } from "../components/Todo/TodoList"
import { LoginPage } from "../components/Login/index"

export const routers = [
    {
        element: <MainLayout />,
        children: [
            {path: '/', element: <TodoList />},
            {path: '/login', element: <LoginPage />}
        ]
        
    }
]