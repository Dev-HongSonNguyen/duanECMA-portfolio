import axios from "axios";
import headerAdmin from "../../components/headerAdmin";
import { router, useEffect, useState } from "../lib"

const projectEditAdmin= ({id})=>{
    const [project, setProject] = useState({});
    useEffect(function(){
        axios.get(`https://s2qbne-8080.preview.csb.app/api/APIproject/${id}`).then(({data})=>setProject(data))
    },[])
    useEffect(function(){
        const formEdit = document.querySelector("#form-edit");
        const nameProject = document.querySelector("#nameProject");
        const date = document.querySelector("#date");
        const language = document.querySelector("#language");
        const image = document.querySelector("#image");
        formEdit.addEventListener("submit", function(e){
            e.preventDefault();
            const formData = {
                name: nameProject.value,
                date: date.value,
                language: language.value,
            };
            axios.put(`https://s2qbne-8080.preview.csb.app/api/APIproject/${id}`, formData)
            .then(()=> router.navigate("/admin/projectListAdmin"))
            .catch(()=> alert("Edit to fail !"))
        })
    })
    return `
    ${headerAdmin()}
    <div class="max-w-6xl m-auto">
        <form action="" id="form-edit">
            <h1 class="text-center text-[#f75023] font-bold">EDIT PROJECT</h1>
            <div>
                <label for="" class="block text-[#ffff]">Name Project</label>
                <input id="nameProject" type="text" class="border w-full outline-none p-2" value="${project.name}">
            </div>
            <div class="">
                <label for="" class="block text-[#ffff]">Date</label>
                <input id="date" type="date" class="border w-full outline-none p-2" value="${project.date}">
            </div>
            <div class="">
                <label for="" class="block text-[#ffff]">Date</label>
                <input id="language" type=" text" class="border w-full outline-none p-2" value="${project.language}">
            </div>
            <div class="">
                <input type="submit"
                    class="cursor-pointer border px-5 py-2 border border-[#f75023] hover:bg-[#f75023] text-[#f75023] hover:text-[#ffff] uppercase text-[12px] mt-[10px]">
            </div>
        </form>
    </div>
    `
}
export default projectEditAdmin