import { createRouter, createWebHistory } from "vue-router";
import CourseList from "../views/courses/CourseList.vue";
import CourseDetail from "../views/courses/CourseDetail.vue";
import CourseRegister from "../views/courses/CourseRegister.vue";
import ContactInstructor from "../views/requests/ContactInstructor.vue";
import RequestRecieved from "../views/requests/RequestRecieved.vue";

const routes = [
  {
    path: "/",
    redirect: "/courses",
  },
  {
    path: "/courses",
    name: "Courses",
    component: CourseList,
  },
  {
    path: "/courses/:id",
    name: "Course",
    component: CourseDetail,
    children: [
      {
        path: "contact",
        name: "Contact",
        componenet: ContactInstructor,
      },
    ],
  },
  {
    path: "/register",
    name: "Register",
    component: CourseRegister,
  },
  {
    path: "/requests",
    name: "Requests",
    component: RequestRecieved,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
