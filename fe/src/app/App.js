import { MainLayout } from "../layouts/mainLayout";
import { TodoList } from "../components/TodoList";

export default function App(){
    return (
        <MainLayout>
            <TodoList/>
        </MainLayout>
    );
}