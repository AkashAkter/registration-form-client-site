import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Complete from "../../Pages/Registration/Complete/Complete";
import Registration from "../../Pages/Registration/Registration";
import StudentList from "../../Pages/StudentList/StudentList";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/students',
                element: <StudentList></StudentList>
            },
            {
                path: '/complete',
                element: <Complete></Complete>
            },

        ]
    }
])