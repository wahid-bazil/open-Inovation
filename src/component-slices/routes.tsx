import EvaluteStartupIndex from "./EvaluteStartup";
import FinalResult from "./finalResult";
import HomeIndex from "./home";

export const EvaluteRoutes = [
    {path: '', element: <HomeIndex/>},
    {path: 'evaluteProject', element: <EvaluteStartupIndex/>},
    {path: 'result', element: <FinalResult/>}


];
