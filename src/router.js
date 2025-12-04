import { createRouter, createWebHistory } from "vue-router";
import GuidesPage from "./components/GuidesPage/GuidesPage.vue";
import HomePage from "./components/LandingPages/HomePage.vue";
import MentorsPage from "./components/MentorPages/MentorsPage.vue";
import ScholarshipsPage from "./components/ScholarshipsPages/ScholarshipsPage.vue";
import SchoolsPage from "./components/SchoolsPages/SchoolsPage.vue";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import NotFoundPage from "./Pages/NotFoundPage.vue";
import LoginFormPage from "./layouts/LoginFormPage.vue";
import RegisterPage from "./layouts/RegisterPage.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "", component: HomePage },
      { path: "schools", component: SchoolsPage },
      { path: "mentors", component: MentorsPage },
      { path: "scholarships", component: ScholarshipsPage },
      { path: "guides", component: GuidesPage },
    ],
  },
  { path: "/login", component: LoginFormPage },
  { path: "/register", component: RegisterPage },
  { path: "/:pathMatch(.*)*", component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
