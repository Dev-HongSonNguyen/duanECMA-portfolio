import aboutAddAdmin from "./src/admin/aboutAddAdmin";
import aboutEditAdmin from "./src/admin/aboutEditAdmin";
import aboutListAdmin from "./src/admin/aboutListAdmin";
import categoryAddAdmin from "./src/admin/categoryAddAdmin";
import categoryEditAdmin from "./src/admin/categoryEditAdmin";
import categoryListAdmin from "./src/admin/categoryListAdmin";
import projectAddAdmin from "./src/admin/projectAddAdmin";
import projectEditAdmin from "./src/admin/projectEditAdmin";
import projectListAdmin from "./src/admin/projectListAdmin";
import userAdd from "./src/admin/userAdd";
import userAdmin from "./src/admin/userAdmin";
import userEdit from "./src/admin/userEdit";
import userListAdmin from "./src/admin/userListAdmin";
import HomePage from "./src/client";
import { render, router } from "./src/lib";

const app = document.querySelector("#app");
router.on("/", ()=>render(HomePage, app))
router.on("/admin/projectAdmin", ()=>render(projectListAdmin, app))
router.on("/admin/projectAddAdmin", ()=>render(projectAddAdmin, app))
router.on("/admin/projectEditAdmin/:id", ({data})=> render(()=>projectEditAdmin(data),app));
router.on("/admin/userListAdmin",()=>render(userListAdmin, app))
router.on("/admin/aboutAdmin",()=>render(aboutListAdmin, app))
router.on("/admin/addAboutAdmin",()=>render(aboutAddAdmin,app))
router.on("/admin/editAboutAdmin/:id",({data})=>render(()=> aboutEditAdmin(data),app))
router.on("/admin/userAdmin", ()=>render(userAdmin,app))
router.on("/admin/userEdit/:id",({data})=>render(()=>userEdit(data),app))
router.on("/admin/userAdd",()=>render(userAdd,app))
router.on("/admin/categoryListAdmin", ()=>render(categoryListAdmin,app))
router.on("/admin/categoryAddAdmin", ()=>render(categoryAddAdmin,app))
router.on("/admin/categoryEditAdmin/:id", ({data})=>render(()=>categoryEditAdmin(data),app))
router.resolve();
