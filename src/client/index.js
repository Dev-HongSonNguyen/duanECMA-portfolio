import axios from "axios";
import { useEffect, useState } from "../lib"
import about from "./about";
import contact from "./contact";
const HomePage = ()=>{
    const [project, setProject] = useState([]);
    useEffect(()=>{
        axios.get("https://s2qbne-8080.preview.csb.app/api/APIproject").then(({data})=>setProject(data))
    },[])

    return `
    <div class="w-full bg-[#232529] py-[10px] fixed top-0 left-0 z-20">
        <div class="max-w-6xl m-auto flex justify-between items-center py-3">
            <!-- //logo -->
            <div class="">
                <a href="#home">
                    <!-- <img class="w-[120px]" src="./img/logo-1.png" alt=""> -->
                    <h1 class="text-[#ffff] text-[18px]">DEV <span class="text-[#f75023]">HONG SON NGUYEN</span></h1>
                </a>
            </div>
            <!-- //menu -->
            <div class="">
                <ul class="flex items-center gap-[50px]">
                    <li><a class="text-[16px] text-[#f75023] font-bold tracking-[1px]" href="#home">Home</a></li>
                    <li><a class="text-[16px] text-[#ffff] hover:text-[#f75023] tra font-bold tracking-[1px]"
                            href="#about">About</a>
                    </li>
                    <li><a class="text-[16px] text-[#ffff] hover:text-[#f75023] tra font-bold tracking-[1px]"
                            href="#project">Project</a>
                    </li>
                    <li><a id="#contact"
                            class="text-[16px] text-[#ffff] hover:text-[#f75023] tra font-bold tracking-[1px]"
                            href="#contact">Contact</a>
                    </li>
                    <li><a id=""
                            class="text-[16px] text-[#ffff] hover:text-[#f75023] tra font-bold tracking-[1px]"
                            href="#skill">Skill</a>
                    </li>
                    <li><a href="https://drive.google.com/file/d/1gIOs38muFP1DrZCHIoGzN027C6-RRqll/view?usp=share_link"
                            class="text-[16px] text-[#f75023] tra font-bold tracking-[1px] border px-10 py-2 border-[#f75023] hover:bg-[#f75023] hover:text-[#ffff] rounded-md">DOWNLOAD CV</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- DETAIL -->
    <div class="w-full bg-[#2b2d33] py-[100px] mt-[70px]" id="home">
        <div class="max-w-6xl m-auto flex justify-between items-center w-full">
            <div class="w-[50%]">
                <div class="text-[40px] text-[#f75023] font-bold ">
                    <h3 class="">Hello, I'm</h3>
                </div>
                <div class="text-6xl text-[#ffff]">
                    <h3>Hong Son Nguyen</h3>
                </div>
                <div class="mt-10">
                    <p class="text-[20px] text-[#ffff]">A
                        <span class="text-[#1cbe59]">Front-end Developer</span>
                        <span class="text-[#ffff]">From</span>
                        <span class="text-[#f75023]">VietNam</span>
                    </p>
                    <div class="text-[#ffff] py-5 text-[20px]">
                        <p>I'm programmer in VietNam, I am very passionate and dedicated to my work.</p>
                    </div>
                    <div class="flex items-center">
                        <div class="mr-[10px]">
                            <a class="bg-[#f75023] text-[#ffff] tra font-bold tracking-[1px] border px-10 py-2 border-[#f75023] hover:bg-[#2b2d33] rounded-md inline-block"
                                href="#about"><span>About Me</span></a>
                        </div>
                        <div class="">
                            <ul class="flex items-center">
                                <li class="px-3"><a href="#" class="text-[#ffff]"><i
                                            class="fab fa-facebook-f hover:text-[#f75023]"></i></a>
                                </li>
                                <li class="px-3"><a href="#" class="text-[#ffff] hover:text-[#f75023]"><i
                                            class="fab fa-twitter"></i></a>
                                </li>
                                <li class="px-3"><a href="#" class="text-[#ffff] hover:text-[#f75023]"><i
                                            class="fab fa-telegram-plane"></i></a></li>
                                <li class="px-3"><a href="#" class="text-[#ffff] hover:text-[#f75023]"><i
                                            class="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-[50%] pl-[150px] relative z-10">
                <img class="w-[70%]"
                    src="https://res.cloudinary.com/freelencer/image/upload/v1676456968/img-portfolio/img-1_cmf5v5.png"
                    alt="">
                <div class="absolute top-0">
                    <img class="w-[100px]"
                        src="https://res.cloudinary.com/freelencer/image/upload/v1676456961/img-portfolio/img-2_dkxgcs.webp"
                        alt="">
                </div>
                <div class="absolute right-[30px] top-[120px]">
                    <img class="w-[100px]"
                        src="https://res.cloudinary.com/freelencer/image/upload/v1676456963/img-portfolio/img-3_gsjhv3.png"
                        alt="">
                </div>
                <div class="absolute bottom-[-50px]">
                    <img class="w-[100px]"
                        src="https://res.cloudinary.com/freelencer/image/upload/v1676456964/img-portfolio/img-5_kdykym.png"
                        alt="">
                </div>
                <div class="absolute right-[70px] top-[400px]">
                    <img class="w-[100px]"
                        src="https://res.cloudinary.com/freelencer/image/upload/v1676456964/img-portfolio/img-4_rronle.png"
                        alt="">
                </div>
            </div>
        </div>
    </div>
    <!-- MARK -->
    <div class="w-full bg-[#232529] py-[100px]">
        <div class="max-w-6xl m-auto grid grid-cols-3 gap-4">
            <div class="">
                <div class="flex justify-center relative items-center">
                    <img src="https://res.cloudinary.com/freelencer/image/upload/v1676456958/img-portfolio/1_tokc8m.png"
                        alt="" class="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="absolute w-[45px] text-[#eeee]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                    </svg>

                </div>
                <div class="">
                    <h2 class="text-[#ffff] text-center py-5">
                        Hard-working</h2>
                    <p class="text-[#ffff] text-center text-[12px]">
                        Most common methods for designing websites that work
                        well on desktop is responsive and adaptive design.
                    </p>
                </div>
            </div>
            <div class="">
                <div class="flex justify-center items-center relative">
                    <img src="https://res.cloudinary.com/freelencer/image/upload/v1676456958/img-portfolio/2_epmzqf.png"
                        alt="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="absolute w-[45px] text-[#eeee]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>

                </div>
                <div class="">
                    <h2 class="text-[#ffff] text-center py-5">Sociable</h2>
                    <p class="text-[#ffff] text-center text-[12px]">Most common methods for designing websites that work
                        well on desktop is responsive and adaptive design.
                    </p>
                </div>
            </div>
            <div class="">
                <div class="flex justify-center items-center relative">
                    <img src="https://res.cloudinary.com/freelencer/image/upload/v1676456960/img-portfolio/3_urqzxy.png"
                        alt="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="absolute w-[45px] text-[#eeee]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                </div>
                <div class="">
                    <h2 class="text-[#ffff] text-center py-5">Ambitious</h2>
                    <p class="text-[#ffff] text-center text-[12px]">Most common methods for designing websites
                        that work
                        well on
                        desktop is responsive and adaptive
                        design.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- ABOUT ME -->
    ${about()}
    <!-- PROJECT -->
    <div id="project" class="w-full bg-[#232529]">
        <div class="max-w-6xl m-auto py-[50px]">
            <div class="text-center">
                <p class="text-[22px] text-[#f75023]">Project</p>
                <h4 class="text-[40px] text-[#ffff]">My Amazing Works</h4>
            </div>
            <div class="">
                <div class="">
                    <ul class="flex items-center justify-center py-[20px]">
                        <li class=""><a class=" bg-[#F75023] mx-2 px-7 py-[3px] rounded-md text-[#ffff] text-[16px]"
                                href="#">ALL</a></li>
                        <li class="">
                            <a class="mx-2 px-7 py-[3px] hover:bg-[#f75023] border border-[#F75023] rounded-md text-[#ffff] text-[16px]"
                                href="#">HTML/CSS</a>
                        </li>
                        <li class="">
                            <a class="mx-2 px-7 py-[3px] hover:bg-[#f75023] border border-[#F75023] rounded-md text-[#ffff] text-[16px]"
                                href="#">PHP</a>
                        </li>
                        <li class="">
                            <a class="mx-2 px-7 py-[3px] hover:bg-[#f75023] border border-[#F75023] rounded-md text-[#ffff] text-[16px]"
                                href="#">JS</a>
                        </li>
                    </ul>
                </div>
                <div class="grid grid-cols-3 gap-4 py-[30px]">
                ${project.map(function(item){
                    return `
                    <div class="item">
                    <div class="rounded-xl overflow-hidden">
                        <a href="">
                            <img class="hover:scale-110 transition w-full rounded-md"
                                src="${item.gallery}"
                                alt="">
                        </a>
                    </div>
                    <div class="py-3">
                        <a href="">
                            <h2 class="text-[#ffff]">${item.name}</h2>
                        </a>
                        <div class="flex items-center py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="w-[14px] text-[#f75023]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                            </svg>
                            <span class="text-[#ffff] text-[10px] pl-[10px] pt-[2px]">${item.date}</span>
                        </div>
                        <ul class="">
                            <li class="">
                                <a class="px-2 py-[1px] hover:bg-[#f75023] border border-[#F75023] rounded-md text-[#ffff] text-[12px]"
                                    href="">${item.language}</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <a href="https://github.com/Dev-HongSonNguyen"
                            class="text-[10px] text-[#ffff] font-bold tracking-[1px] border px-10 py-2 border-[#f75023] hover:bg-[#f75023] hover:text-[#ffff] rounded-md">View
                            source code git </a>
                    </div>
                </div>
                    `
                }).join("")}
                </div>
            </div>
        </div>
    </div>
    <!-- SKILL -->
    <div class="bg-[#2b2d33] w-full" style="border-bottom: 1px solid #f8f8ff">
        <div class="max-w-6xl m-auto pt-[50px] pb-[100px]" id="skill">
            <div class="">
                <h3 class="text-center text-[40px] text-[#ffff]">MY SKILLS</h3>
                <p class="text-center text-[#f75023] pb-[80px] text-[22px]">I Develop Skills Regularly to Keep Me
                    Update</p>
                <div class="grid grid-cols-4 gap-4">
                    <div class="flex justify-center">
                        <div class="">
                            <div class="bg-[#232529] w-[150px] p-10 rounded-[50%] hover:scale-110"
                                style="transition: all 0.5s ease-in-out">
                                <img class=" w-[150px]" src="https://res.cloudinary.com/dwzh9i6xf/image/upload/v1676632402/duanECMA_portforlio/download_dchfop.png" alt="">
                            </div>
                            <div class="flex justify-center">
                                <span class="text-[#ffff] text-[24px] pt-5">HTML</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="">
                            <div class="bg-[#232529] w-[150px] p-10 rounded-[50%] hover:scale-110"
                                style="transition: all 0.5s ease-in-out">
                                <img class=" w-[150px]" src="https://res.cloudinary.com/dwzh9i6xf/image/upload/v1676632402/duanECMA_portforlio/download_1_gtp8qq.png" alt="">
                            </div>
                            <div class="flex justify-center">
                                <span class="text-[#ffff] text-[24px] pt-5">CSS</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="">
                            <div class="bg-[#232529] w-[150px] p-10 rounded-[50%] hover:scale-110"
                                style="transition: all 0.5s ease-in-out">
                                <img class=" w-[150px]" src="https://res.cloudinary.com/dwzh9i6xf/image/upload/v1676634692/duanECMA_portforlio/download_2_n57xgv.png" alt="">
                            </div>
                            <div class="flex justify-center">
                                <span class="text-[#ffff] text-[24px] pt-5">JAVACRIPT</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="">
                            <div class="bg-[#232529] w-[150px] p-10 rounded-[50%] hover:scale-110"
                                style="transition: all 0.5s ease-in-out">
                                <img class=" w-[150px]" src="https://res.cloudinary.com/dwzh9i6xf/image/upload/v1676632403/duanECMA_portforlio/java.e67de2f7f6d0601a499a_vwh9dd.png" alt="">
                            </div>
                            <div class="flex justify-center">
                                <span class="text-[#ffff] text-[24px] pt-5">JAVA</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="">
                            <div class="bg-[#232529] w-[150px] p-10 rounded-[50%] hover:scale-110"
                                style="transition: all 0.5s ease-in-out">
                                <img class=" w-[150px]" src="https://res.cloudinary.com/dwzh9i6xf/image/upload/v1676632402/duanECMA_portforlio/bootstrap.4bdf973467a3db0c433f_aslzwl.png" alt="">
                            </div>
                            <div class="flex justify-center">
                                <span class="text-[#ffff] text-[24px] pt-5">BOOTSTRAP</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="">
                            <div class="bg-[#232529] w-[150px] p-10 rounded-[50%] hover:scale-110"
                                style="transition: all 0.5s ease-in-out">
                                <img class=" w-[150px]" src="https://res.cloudinary.com/dwzh9i6xf/image/upload/v1676632403/duanECMA_portforlio/react.6db2265afd7a1041c977_e6zhun.png" alt="">
                            </div>
                            <div class="flex justify-center">
                                <span class="text-[#ffff] text-[24px] pt-5">REACTJS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- CONTACT -->
    ${contact()}
    <!-- MAP -->
    <div class="bg-[#2b2d33] w-full pb-[100px]">
        <div class="pt-[100px] max-w-6xl m-auto">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9333644911353!2d105.73999421484174!3d21.035352092929212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134548c1eecba2b%3A0x45bf0bfbb337613e!2zNjkgTmcuIDE0MyDEkC4gWHXDom4gUGjGsMahbmcsIFh1w6JuIFBoxrDGoW5nLCBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1676453222493!5m2!1svi!2s"
                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" class="w-full rounded-md"></iframe>
        </div>
    </div>
    <!-- FOOTER -->
    <div class="bg-[#232529]" style="border-top: 1px solid #ffff">
        <div class="py-7">
            <div class="">
                <ul class="flex items-center justify-center">
                    <li class="px-3"><a href="#" class="text-[#ffff]"><i
                                class="fab fa-facebook-f hover:text-[#f75023]"></i></a>
                    </li>
                    <li class="px-3"><a href="#" class="text-[#ffff] hover:text-[#f75023]"><i
                                class="fab fa-twitter"></i></a>
                    </li>
                    <li class="px-3"><a href="#" class="text-[#ffff] hover:text-[#f75023]"><i
                                class="fab fa-telegram-plane"></i></a></li>
                    <li class="px-3"><a href="#" class="text-[#ffff] hover:text-[#f75023]"><i
                                class="fab fa-instagram"></i></a>
                    </li>
                </ul>
            </div>
            <div class="text-center pt-5">
                <span class="text-[#ffff]">© 2023 Hong Son Nguyen. All Rights Reserved</span>
            </div>
        </div>
    </div>
    `
}
export default HomePage