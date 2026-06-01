import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
} from "react-router-dom";
import { NavigationHistoryLinks, NavigationHistoryProvider } from '../../../packages/_template/src/Base/Helpers/NavigationHistoryProvider';

import { BaseRouterSegments } from "../../../packages/_template/src/Base/Pages/RouterSegment";

// import { GroupRouterSegments } from "../../../packages/_template/src/GroupGQLModel/Pages/RouterSegment";
// import { RoleTypeRouterSegments } from "../../../packages/_template/src/RoleTypeGQLModel/Pages";
// import { GroupTypeRouterSegments } from "../../../packages/_template/src/GroupTypeGQLModel/Pages/RouterSegment";
// import { RoleRouterSegments } from "../../../packages/_template/src/RoleGQLModel/Pages";
// import { Page } from "../../../packages/_template/src/Base/Pages/Page";
// import { EvaluationRouterSegments } from "../../../packages/student/src/EvaluationGQLModel/Pages/RouterSegment";
import { AppNavbar } from "./AppNavbar";
import { StateRouterSegments } from "../../../packages/student/src/StateGQLModel/Pages/RouterSegment";
import { UserRouterSegments } from "../../../packages/student/src/UserGQLModel/Pages/RouterSegment";
import { ProgramRouterSegments } from "../../../packages/student/src/ProgramGQLModel/Pages/RouterSegment";
import { StudentRouterSegments } from "../../../packages/student/src/StudentGQLModel/Pages/RouterSegment";
import { SubjectRouterSegments } from "../../../packages/student/src/SubjectGQLModel/Pages/RouterSegment";



const AppLayout = () => (
    <NavigationHistoryProvider>
        <AppNavbar />
        <NavigationHistoryLinks />
        <Outlet />
    </NavigationHistoryProvider>
);

const Routes = [
    {
        path: "/",          // root
        element: <AppLayout />,
        children: [
            ...BaseRouterSegments,
            // ...GroupRouterSegments,
            // ...RoleTypeRouterSegments,
            ...UserRouterSegments,
            // ...GroupTypeRouterSegments,
            // ...RoleRouterSegments,
            ...StateRouterSegments,
            ...StudentRouterSegments,
            ...ProgramRouterSegments,
            ...SubjectRouterSegments
            // ...EvaluationRouterSegments
        ],
    },
];

// console.log("Routes", Routes)
// console.log("Routes", GroupRouterSegments)

const router = createBrowserRouter(Routes);

export const AppRouter = () => <RouterProvider router={router} />;
