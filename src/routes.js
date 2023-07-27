import { createWebHistory, createRouter } from "vue-router";
import TableData from "./components/TableData.vue";
import AddData from "./components/Adddata.vue";
import Singledata from "./components/Singledata.vue";
import Editdata from "./components/Editdata.vue";

const routes = [
  {
    name: "TableData",
    path: "/",
    component: TableData,
  },
  {
    name: "AddData",
    path: "/add",
    component: AddData,
  },
  {
    name: "Singledata",
    path: "/single",
    component: Singledata,
  },
  {
    name: "Editdata",
    path: "/edit",
    component: Editdata,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
