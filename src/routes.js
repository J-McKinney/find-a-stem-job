// import Login from "views/Login.js";
import Dashboard from "views/Dashboard.js";
import Email from "views/Email.js";
import Maps from "views/Maps.js";
import UserPage from "views/UserPage.js";
import UserDash from "views/UserDash.js";
import Gigs from "views/Gigs";
import AdminPage from "views/AdminPage";
import AllClusters from "views/Mapping/AllClusters";
import GreenClusters from "views/Mapping/GreenClusters";
import HospitalityClusters from "views/Mapping/HospitalityClusters";
import CommunityAllHybridClusters from "views/Mapping/CommunityAllHybridClusters";
import CommunityAllOnsiteClusters from "views/Mapping/CommunityAllOnsiteClusters";
import CommunityAllRemoteClusters from "views/Mapping/CommunityAllRemoteClusters";
import TechClusters from "views/Mapping/TechClusters";
import ApprenticeClusters from "views/Mapping/ApprenticeClusters";
import DodAllHybridClusters from "views/Mapping/DodAllHybridClusters";
import InternClusters from "views/Mapping/InternClusters";
import DodAllOnsiteClusters from "views/Mapping/DodAllOnsiteClusters";
import PreapprenticeClusters from "views/Mapping/PreapprenticeClusters";
import DodAllRemoteClusters from "views/Mapping/DodAllRemoteClusters";
import CommunityCollegeClusters from "views/Mapping/CommunityCollegeClusters";
import StemAllHybridClusters from "views/Mapping/StemAllHybridClusters";
import KClusters from "views/Mapping/KClusters";
import StemAllOnsiteClusters from "views/Mapping/StemAllOnsiteClusters";
import PostGradClusters from "views/Mapping/PostGradClusters";
import StemAllRemoteClusters from "views/Mapping/StemAllRemoteClusters";
import AllRemoteClusters from "views/Mapping/AllRemoteClusters";
import AllOnsiteClusters from "views/Mapping/AllOnsiteClusters";
import AllHybridClusters from "views/Mapping/AllHybridClusters";

// import Notifications from "views/Notifications.js";

var dashRoutes = [
  {
    key: 0,
    path: "/dashboard",
    // name: "Dashboard",
    name: "EDA Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin",
  },
  {
    key: 1,
    path: "/user-dash",
    name: "User Dashboard",
    icon: "now-ui-icons users_single-02",
    component: UserDash,
    layout: "/admin",
  },
  {
    key: 2,
    path: "/admin-profile",
    name: "Admin Profile",
    icon: "location_compass-05",
    component: AdminPage,
    layout: "/admin",
  },
  {
    key: 3,
    path: "/active-gig-assignments",
    name: "Active Gig Assignments",
    icon: "ui-1_zoom-bold",
    component: Gigs,
    layout: "/admin",
  },
  {
    key: 4,
    path: "/maps",
    name: "Maps",
    icon: "location_map-big",
    component: Maps,
    layout: "/admin",
  },
  // All Below Not Shown on Side Nav Bar
  {
    key: 5,
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    key: 6,
    path: "/email",
    name: "Email",
    icon: "ui-1_email-85",
    component: Email,
    layout: "/admin",
  },
  // {
  //   key: 7,
  //   path: "/login",
  //   name: "Login",
  //   icon: "location_map-big",
  //   component: Login,
  //   layout: "/admin",
  // },
  ///////// All Clusters ///////////////////////////////////////////////
  {
    key: 8,
    path: "/allClusters",
    name: "AllClusters",
    icon: "location_map-big",
    component: AllClusters,
    layout: "/admin",
  },
  // Community GCluster
  {
    key: 9,
    path: "/greenClusters",
    name: "GreenClusters",
    icon: "location_map-big",
    component: GreenClusters,
    layout: "/admin",
  },
  // Community HCluster
  {
    key: 10,
    path: "/hospitalityClusters",
    name: "HospitalityClusters",
    icon: "location_map-big",
    component: HospitalityClusters,
    layout: "/admin",
  },
  // Community All Hybrid Cluster
  {
    key: 11,
    path: "/communityAllHybridClusters",
    name: "CommunityAllHybridClusters",
    icon: "location_map-big",
    component: CommunityAllHybridClusters,
    layout: "/admin",
  },
  // Community All Onsite Cluster
  {
    key: 12,
    path: "/communityAllOnsiteClusters",
    name: "CommunityAllOnsiteClusters",
    icon: "location_map-big",
    component: CommunityAllOnsiteClusters,
    layout: "/admin",
  },
  // Community All Remote Cluster
  {
    key: 13,
    path: "/communityAllRemoteClusters",
    name: "CommunityAllRemoteClusters",
    icon: "location_map-big",
    component: CommunityAllRemoteClusters,
    layout: "/admin",
  },
  // Community TCluster
  {
    key: 14,
    path: "/techClusters",
    name: "TechClusters",
    icon: "location_map-big",
    component: TechClusters,
    layout: "/admin",
  },
  // DOD ACluster
  {
    key: 15,
    path: "/apprenticeClusters",
    name: "ApprenticeClusters",
    icon: "location_map-big",
    component: ApprenticeClusters,
    layout: "/admin",
  },
  // DOD All Hybrid Cluster
  {
    key: 16,
    path: "/dodAllHybridClusters",
    name: "DodAllHybridClusters",
    icon: "location_map-big",
    component: DodAllHybridClusters,
    layout: "/admin",
  },
  // DOD ICluster
  {
    key: 17,
    path: "/internClusters",
    name: "InternClusters",
    icon: "location_map-big",
    component: InternClusters,
    layout: "/admin",
  },
  // DOD All Onsite Cluster
  {
    key: 18,
    path: "/dodAllOnsiteClusters",
    name: "DodAllOnsiteClusters",
    icon: "location_map-big",
    component: DodAllOnsiteClusters,
    layout: "/admin",
  },
  // DOD PCluster
  {
    key: 19,
    path: "/preapprenticeClusters",
    name: "PreapprenticeClusters",
    icon: "location_map-big",
    component: PreapprenticeClusters,
    layout: "/admin",
  },
  // DOD All Remote Cluster
  {
    key: 20,
    path: "/dodAllRemoteClusters",
    name: "DodAllRemoteClusters",
    icon: "location_map-big",
    component: DodAllRemoteClusters,
    layout: "/admin",
  },
  // STEM CCluster
  {
    key: 21,
    path: "/communityCollegeClusters",
    name: "CommunityCollegeClusters",
    icon: "location_map-big",
    component: CommunityCollegeClusters,
    layout: "/admin",
  },
  // STEM All Hybrid Cluster
  {
    key: 22,
    path: "/stemAllHybridClusters",
    name: "StemAllHybridClusters",
    icon: "location_map-big",
    component: StemAllHybridClusters,
    layout: "/admin",
  },
  // STEM KCluster
  {
    key: 23,
    path: "/kClusters",
    name: "KClusters",
    icon: "location_map-big",
    component: KClusters,
    layout: "/admin",
  },
  // STEM All Onsite Cluster
  {
    key: 24,
    path: "/stemAllOnsiteClusters",
    name: "StemAllOnsiteClusters",
    icon: "location_map-big",
    component: StemAllOnsiteClusters,
    layout: "/admin",
  },
  // STEM PGCluster
  {
    key: 25,
    path: "/postGradClusters",
    name: "PostGradClusters",
    icon: "location_map-big",
    component: PostGradClusters,
    layout: "/admin",
  },
  // STEM All Remote Cluster
  {
    key: 26,
    path: "/stemAllRemoteClusters",
    name: "StemAllRemoteClusters",
    icon: "location_map-big",
    component: StemAllRemoteClusters,
    layout: "/admin",
  },
  // All Remote
  {
    key: 27,
    path: "/allRemoteClusters",
    name: "AllRemoteClusters",
    icon: "location_map-big",
    component: AllRemoteClusters,
    layout: "/admin",
  },
  // All Onsite
  {
    key: 28,
    path: "/allOnsiteClusters",
    name: "AllOnsiteClusters",
    icon: "location_map-big",
    component: AllOnsiteClusters,
    layout: "/admin",
  },
  // All Hybrid
  {
    key: 29,
    path: "/allHybridClusters",
    name: "AllHybridClusters",
    icon: "location_map-big",
    component: AllHybridClusters,
    layout: "/admin",
  },
];
export default dashRoutes;
