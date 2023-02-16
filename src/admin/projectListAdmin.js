import axios from "axios";
import { useEffect, useState } from "../lib"

const projectListAdmin = ()=>{
    const [projects, setProject] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/APIproject").then(({data})=>setProject(data))
    },[])
    useEffect(()=>{
        const btn_delete = document.querySelectorAll(".btn_delete");
        for(let btn of btn_delete){
            btn.addEventListener("click", function(){
                const idOr = this.dataset.id;
                console.log(idOr);
                axios.delete(`http://localhost:3000/APIproject/${idOr}`)
                .then(()=> {
                    const newProject = projects.filter((item)=> item.id != idOr);
                    setProject(newProject)
                })
            })
        }
    })
    return `
    <div class="max-w-6xl m-auto">
    <h1 class="text-center text-[#f75023] font-bold">MY PROJECT</h1>
    <a class="text-[#ffff]" href="/admin/projectAddAdmin">ADD</a>
    <table class="w-full border">
        <thead class="border">
            <th class="border text-[#ffff]">STT</th>
            <th class="border text-[#ffff]">NAME PROJECT</th>
            <th class="border text-[#ffff]">DATE</th>
            <th class="border text-[#ffff]">ACTION</th>
        </thead>
        ${projects.map(function(item, index){
            return `
            <tbody>
                <tr class="text-center">
                    <td class="border text-[#ffff]">${index+1}</td>
                    <td class="border text-[#ffff]">${item.name}</td>
                    
                    <td class="border text-[#ffff]">${item.date}</td>
                    <td class="border text-[#ffff]">
                        <button data-id=${item.id} class="bg-red-600 p-5 py-2 text-[#ffff] btn_delete">DELETE</button>
                        <a href="/admin/projectEditAdmin/${item.id}" class="bg-blue-900 p-5 py-2 text-[#ffff]">SETTING</a>
                    </td>
                </tr>
        </tbody>
            `
        }).join("")}
    </table>
</div>`
}
export default projectListAdmin