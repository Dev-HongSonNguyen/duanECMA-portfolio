import axios from "axios";
import headerAdmin from "../../components/headerAdmin";
import { router, useEffect } from "../lib"

const projectAddAdmin = ()=>{
  useEffect(function(){
    const form = document.querySelector("#form");
    const nameProject = document.querySelector("#name_project");
    const dateProject = document.querySelector("#date");
    const image = document.querySelector("#image_project");
    const language = document.querySelector("#language");
    form.addEventListener("submit",async function(e){
      e.preventDefault();

      const urls = await uploadFiles(image.files)


      const projectAdd = {
        name: nameProject.value, 
        date: dateProject.value,
        language: language.value,
        gallery: urls,
      }
      axios.post("https://s2qbne-8080.preview.csb.app/api/APIproject", projectAdd)
      .then(()=> router.navigate("/admin/projectListAdmin"))
      .catch(()=> alert("Add to Fail !"))
    })
  });

  const uploadFiles = async (files)=>{
    if(files){
      const cloud_name = "dwzh9i6xf";
      const preset_name ="duanECMA";
      const folder_name = "duanECMA_portforlio";
      const urls= [];
      const api = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;


      const formData = new FormData();


      formData.append("upload_preset", preset_name);
      formData.append("folder", folder_name);

      for(const file of files){
        formData.append('file', file);
        const response = await axios.post(api, formData, {
          headers:{
            "Content-Type": "multipart/form-data"
          },
        })
        urls.push(response.data.secure_url) 
      }
      return urls;
      }
  };
    return `
    ${headerAdmin()}
    <div class="max-w-6xl m-auto">
      <form action="" id="form">
          <h1 class="text-center text-[#f75023] font-bold">ADD PROJECT</h1>
          <div>
              <label for="" class="block text-[#ffff]">Name Project</label>
              <input id="name_project" "type="text" class="border w-full outline-none p-2">
          </div>
          <div class="">
              <label for="" class="block text-[#ffff]">Date</label>
              <input id="date" type="date" class="border w-full outline-none p-2">
          </div>
          <div class="">
              <label for="" class="block text-[#ffff]">Language Use</label>
              <input id="language" type="text" class="border w-full outline-none p-2">
          </div>
          <div>
              <label for="" class="block text-[#ffff]">Image</label>
              <input id="image_project" type="file" class="border w-full outline-none p-2 text-[#ffff]" multiple>
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