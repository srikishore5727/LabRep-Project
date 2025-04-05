
import MainLayout from '../layouts/MainLayout/MainLayout';
import HomePage from '../pages/Home/Home';
import ReportsPage from '../pages/Reports/Reports';
import VisualizeReportPage from '../pages/VisualizeReport/VisualizeReport';
import AboutPage from '../pages/About/About';
import NotFound from '../pages/NotFound/NotFound';

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        index: true,
        component: HomePage,
      },
      {
        path: "reports",
        component: ReportsPage,
      },
      {
        path: "visualize/:patientId",
        component: VisualizeReportPage,
      },
      {
        path: "about",
        component: AboutPage,
      },
      {
        path: "*",
        component: NotFound,
      }
    ]
  }
];

export default routes;
