import { Layout } from 'antd';
import {
    Outlet,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Coder from './pages/Coder';
import Time from './pages/Time';
import CalendarView from './pages/todo/CalendarView';
import ListView from "./pages/todo/ListView.jsx";

const { Sider, Content } = Layout;

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "todos",
                children: [
                    {
                        path: "calendar",
                        element: <CalendarView />,
                    },
                    {
                        path: "list",
                        element: <ListView />,
                    },
                ]
            },
            {
                path: "coder",
                element: <Coder />,        
            },
            {
                path: "time",
                element: <Time />,
            },
            {
                path: "about",
                element: <About />,        
            }
        ]
    }
]);

function AppLayout() {
    return (
        <Layout className="h-screen">
            <Sider collapsible>
                <Sidebar />
            </Sider>
            <Content className="h-screen" style={{ overflow: "auto" }}>
                <Outlet />
            </Content>
        </Layout>
    );
}

export default function App() {
    return <RouterProvider router={router} />;
}