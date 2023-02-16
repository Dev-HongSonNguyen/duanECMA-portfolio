import axios from "axios";
import { router, useEffect } from "../lib"

const projectAddAdmin = ()=>{
  useEffect(function(){
    const form = document.querySelector("#form");
    const nameProject = document.querySelector("#name_project");
    const dateProject = document.querySelector("#date");
    form.addEventListener("submit", function(e){
      e.preventDefault();
      const projectAdd = {name: nameProject.value, date: dateProject.value}
      axios.post("http://localhost:3000/APIproject", projectAdd)
      .then(()=> router.navigate("/admin/projectListAdmin"))
      .catch(()=> alert("Add to Fail !"))
    })
  })
    return `
    <div class="max-w-6xl m-auto">
      <form action="" id="form">
          <h1 class="text-center text-[#f75023] font-bold">ADD PROJECT</h1>
          <div>
              <label for="" class="block text-[#ffff]">Name Project</label>
              <input id="name_project" "type="text" class="border w-full outline-none p-2">
          </div>
          <div class="">
              <label for="" class="block text-[#ffff]">Date</label>
              <input id="date" type="text" class="border w-full outline-none p-2">
          </div>
          <div class="">
              <input type="submit"
                  class="cursor-pointer border px-5 py-2 border border-[#f75023] hover:bg-[#f75023] text-[#f75023] hover:text-[#ffff] uppercase text-[12px] mt-[10px]">
          </div>
    </form>
  </div>
  `
}
export default projectAddAdmin