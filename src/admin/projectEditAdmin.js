import axios from "axios";
import { useEffect, useState } from "../lib"

const projectEditAdmin= ()=>{
    return `
    <div class="max-w-6xl m-auto">
        <form action="">
            <h1 class="text-center text-[#f75023] font-bold">EDIT PROJECT</h1>
            <div>
                <label for="" class="block text-[#ffff]">Name Project</label>
                <input type="text" class="border w-full outline-none p-2" value="">
            </div>
            <div class="">
                <label for="" class="block text-[#ffff]">Date</label>
                <input type=" text" class="border w-full outline-none p-2" value="">
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