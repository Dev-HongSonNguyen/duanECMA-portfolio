import projectListAdmin from "./src/admin/projectListAdmin";
import HomePage from "./src/client";
import { render, router } from "./src/lib";

const app = document.querySelector("#app");
router.on("/", ()=>render(HomePage, app))
router.on("/admin/projectListAdmin", ()=>render(projectListAdmin, app))
router.resolve();
