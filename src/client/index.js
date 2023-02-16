import axios from "axios";
import { useEffect, useState } from "../lib"
const HomePage = ()=>{
    const [project, setProject] = useState([]);
    useEffect(()=>{
        axios.get("https://xi7f7j-8080.preview.csb.app/api/APIproject").then(({data})=>setProject(data))
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
                    <li><a href="/admin/projectListAdmin"
                            class="text-[16px] text-[#f75023] tra font-bold tracking-[1px] border px-10 py-2 border-[#f75023] hover:bg-[#f75023] hover:text-[#ffff] rounded-md">ADMIN</a>
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
                <div class="flex justify-center">
                    <img src="https://res.cloudinary.com/freelencer/image/upload/v1676456958/img-portfolio/1_tokc8m.png"
                        alt="" class="">
                </div>
                <div class="">
                    <h2 class="text-[#ffff] text-center py-5">Pixel Perfect</h2>
                    <p class="text-[#ffff] text-center text-[12px]">Most common methods for designing websites that work
                        well on
                        desktop is responsive and adaptive
                        design.
                    </p>
                </div>
            </div>
            <div class="">
                <div class="flex justify-center">
                    <img src="https://res.cloudinary.com/freelencer/image/upload/v1676456958/img-portfolio/2_epmzqf.png"
                        alt="">
                </div>
                <div class="">
                    <h2 class="text-[#ffff] text-center py-5">High Quality</h2>
                    <p class="text-[#ffff] text-center text-[12px]">Most common methods for designing websites that work
                        well on desktop is responsive and adaptive design.
                    </p>
                </div>
            </div>
            <div class="">
                <div class="flex justify-center">
                    <img src="https://res.cloudinary.com/freelencer/image/upload/v1676456960/img-portfolio/3_urqzxy.png"
                        alt="">
                </div>
                <div class="">
                    <h2 class="text-[#ffff] text-center py-5">Awesome Idea</h2>
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
    <div class="w-full bg-[#2b2d33]">
        <div class="max-w-6xl m-auto grid grid-cols-2 gap-4 py-[70px]" id="about">
            <div class="relative">
                <img class="w-[500px]"
                    src="https://res.cloudinary.com/freelencer/image/upload/v1676456962/img-portfolio/image2_xafstp.png"
                    alt="">
                <div class="absolute top-0 left-[-50px]">
                    <img src="https://res.cloudinary.com/freelencer/image/upload/v1676456960/img-portfolio/img-6_o74yok.png"
                        alt="">
                </div>
                <div class="absolute bottom-0 right-[50px]">
                    <img src="https://res.cloudinary.com/freelencer/image/upload/v1676456961/img-portfolio/img-8_xk0f1p.png"
                        alt="">
                </div>
            </div>
            <div class="pt-[100px] relative">
                <h2 class="text-[#f75023] text-[30px]">What about me ?</h2>
                <p class="text-[16px] text-[#ffff] leading-[30px] py-5 text-justify">Hello! <span
                        class="text-[#1cbe59]">I'm a front-end developer</span>.
                    I am
                    currently a
                    4th-semester
                    student at FPT
                    Polytechnic. I am
                    very passionate and dedicated to my field of study. During my time at school, I have acquired skills
                    and background knowledge in programming languages ​​& frameworks <span class="text-[#f75023]">
                        [ Html, Css, Javascript, Tailwind
                        CSS, React JS, Node JS, Bootstrap ]
                    </span>. I am a responsible person at work and love new things. Thank
                    you for reading !
                </p>
                <a class="bg-[#f75023] text-[#ffff] tra font-bold tracking-[1px] border px-10 py-2 border-[#f75023] hover:bg-[#2b2d33] rounded-md inline-block"
                    href="#contact"><span>Contact Me</span></a>
                <div class="absolute top-[100px] right-[-150px]">
                    <img src="https://res.cloudinary.com/freelencer/image/upload/v1676456960/img-portfolio/img-7_k32cbc.png"
                        alt="">
                </div>
            </div>
        </div>
    </div>
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
    <!-- CONTACT -->
    <div class="w-full bg-[#2b2d33]">
        <div class="max-w-6xl m-auto py-[50px] relative" id="contact">
            <div class="pb-[100px]">
                <div class="text-center">
                    <p class="text-[22px] text-[#f75023]">Contact me</p>
                    <h4 class="text-[40px] text-[#ffff] py-5">I Want To Hear From You</h4>
                    <p class="text-[#b9b5c9] text-[12px] w-[500px] m-auto">Please fill out the form on this section
                        to
                        contact
                        with me. Or call between 9:00 a.m.
                        and 8:00
                        p.m. VN, Monday through Friday</p>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div class="">
                    <div class="flex items-center">
                        <div class="bg-[#f75023] p-[40px] rounded-[50%]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="text-[#ffff] w-[50px]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </div>
                        <div class="pl-[20px]">
                            <h4 class="text-[#ffff] text-[32px]">Address</h4>
                            <span class="text-[#b9b5c9] text-[16px]">VietNam</span>
                        </div>
                    </div>
                    <div class="flex items-center my-[30px]">
                        <div class="bg-[#f75023] p-[40px] rounded-[50%]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="text-[#ffff] w-[50px]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div class="pl-[20px]">
                            <h4 class="text-[#ffff] text-[32px]">Email</h4>
                            <span class="text-[#b9b5c9] text-[16px]">nguyenhongson20433@gmail.com</span>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div class="bg-[#f75023] p-[40px] rounded-[50%]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="text-[#ffff] w-[50px]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </div>
                        <div class="pl-[20px]">
                            <h4 class="text-[#ffff] text-[32px]">Phone</h4>
                            <span class="text-[#b9b5c9] text-[16px]">+84 0384707136</span>
                        </div>
                    </div>
                </div>
                <div class="">
                    <form action="">
                        <div class="grid grid-cols-2 gap-4">
                            <input type="text"
                                class="text-[#ffff] bg-transparent border border-[#6f6b80] rounded-md py-3 px-7 outline-none "
                                placeholder="Your name">
                            <input type="text"
                                class="text-[#ffff] bg-transparent border border-[#6f6b80] rounded-md py-3 px-7 outline-none "
                                placeholder="Your email">
                            <input type="text"
                                class="text-[#ffff] bg-transparent border border-[#6f6b80] rounded-md py-3 px-7 outline-none "
                                placeholder="Your phone">
                            <input type="text"
                                class="text-[#ffff] bg-transparent border border-[#6f6b80] rounded-md py-3 px-7 outline-none "
                                placeholder="Subject">
                        </div>
                        <div class="">
                            <textarea
                                class="w-full text-[#ffff] bg-transparent border border-[#6f6b80] rounded-md py-3 px-7 outline-none mt-[16px]"
                                name="" id="" cols="30" rows="10" placeholder="Write your message here"></textarea>
                        </div>
                        <button
                            class="text-[16px] text-[#f75023] tra font-bold tracking-[1px] border px-10 py-2 border-[#f75023] hover:bg-[#f75023] hover:text-[#ffff] rounded-md mt-[10px]">Submit</button>
                    </form>
                </div>
            </div>
            <div class="absolute right-0 bottom-[30px]">
                <img src="https://res.cloudinary.com/freelencer/image/upload/v1676456957/img-portfolio/img-13_fssqox.png"
                    alt="">
            </div>
            <div class="absolute left-0 top-[30px]">
                <img src="https://res.cloudinary.com/freelencer/image/upload/v1676456958/img-portfolio/img-15_wnasup.png"
                    alt="">
            </div>
        </div>
    </div>
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