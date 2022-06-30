
import { useRoutes } from 'react-router-dom';
import AuthIndex from "./component-slices/auth";
import Layout from "./component-slices/generalComponent/layout";
import {EvaluteRoutes} from "./component-slices/routes";
export function Routes() {
    return useRoutes([
        {
            path: 'login',
            element: <AuthIndex />,
        },
        {
            path: 'evalute',
            element: <Layout />,
            children: EvaluteRoutes,
        },

    ]);
}
