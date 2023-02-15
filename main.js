import HomePage from "./src/client";
import { render, router } from "./src/lib";

const app = document.querySelector("#app");
router.on("/", ()=>render(HomePage, app))
router.resolve();
