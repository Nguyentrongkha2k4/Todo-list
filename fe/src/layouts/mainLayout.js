import { Outlet } from "react-router-dom";

export const MainLayout = ()=>{
    return (
        <div>
            <h1>TODO LIST APPLICATION</h1>
            <Outlet />
        </div>
    );
}