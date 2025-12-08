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
import FrequentlyAskedQuestion from "./components/LandingPages/FrequentlyAskedQuestion.vue";
import SupportPage from "./layouts/SupportPage.vue";
import Form from "./layouts/Form.vue";

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
      { path: "faq", component: FrequentlyAskedQuestion },
      { path: "/form", component: Form },
      { path: "/:pathMatch(.*)*", component: NotFoundPage },
    ],
  },
  { path: "/login", component: LoginFormPage },
  { path: "/register", component: RegisterPage },
  { path: "/support", component: SupportPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
