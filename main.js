import projectAddAdmin from "./src/admin/projectAddAdmin";
import projectEditAdmin from "./src/admin/projectEditAdmin";
import projectListAdmin from "./src/admin/projectListAdmin";
import HomePage from "./src/client";
import { render, router } from "./src/lib";

const app = document.querySelector("#app");
router.on("/", ()=>render(HomePage, app))
router.on("/admin/projectListAdmin", ()=>render(projectListAdmin, app))
router.on("/admin/projectAddAdmin", ()=>render(projectAddAdmin, app))
router.on("/admin/projectEditAdmin", ()=>render(projectEditAdmin, app))
router.resolve();
