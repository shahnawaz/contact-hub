import DashboardPage from "./pages/DashboardPage";
import OutreachCampaignsPage from "./pages/OutreachCampaignsPage";
import ProspectingCampaignsPage from "./pages/ProspectingCampaignsPage";
import ContactsPage from "./pages/ContactsPage";

export const routesMap = {
    dashboard: 0,
    outreachCampaign: 1,
    prosCampaign: 2,
    contacts: 3
};

export const routes = [
    {
        path: "/",
        exact: true,
        component: DashboardPage
    },
    {
        path: "/outreach-campaigns",
        exact: true,
        component: OutreachCampaignsPage
    },
    {
        path: "/prospecting-campaigns",
        exact: true,
        component: ProspectingCampaignsPage
    },
    {
        path: "/contacts",
        exact: true,
        component: ContactsPage
    }
];