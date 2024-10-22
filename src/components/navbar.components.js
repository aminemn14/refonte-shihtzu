const navbar = document.querySelector("#navbar");

navbar.innerHTML = `
  <nav class="p-4 md:p-8 lg:px-12 flex justify-between items-center shadow-md z-50 bg-bgColor">
    <div class="logo flex items-center">
      <img src="src/img/icon-shihtzu.svg" alt="logo" class="h-10 w-auto mr-2" />
      <h1 class="text-[1.9rem] text-body font-alinsa hidden md:block">SHIHTZU</h1>
    </div>
    <ul class="hidden md:flex list-none items-center">
      <li class="ml-6">
        <a href="/" class="text-body text-[95%] font-normal py-1 px-2 rounded hover:bg-gray-100 transition-all">Home</a>
      </li>
      <li class="ml-6">
        <a href="/services" class="text-body text-[95%] font-normal py-1 px-2 rounded hover:bg-gray-100 transition-all">Services</a>
      </li>
      <li class="ml-6">
        <a href="/blog" class="text-body text-[95%] font-normal py-1 px-2 rounded hover:bg-gray-100 transition-all">Blog</a>
      </li>
      <li class="ml-6">
        <a href="/contact" class="text-body text-[95%] font-normal py-1 px-2 rounded hover:bg-gray-100 transition-all">Contact Us</a>
      </li>
    </ul>
    <div class="hamburger block md:hidden cursor-pointer">
      <span class="line w-6 h-[2px] bg-body block my-1.5 transition-all"></span>
      <span class="line w-6 h-[2px] bg-body block my-1.5 transition-all"></span>
      <span class="line w-6 h-[2px] bg-body block my-1.5 transition-all"></span>
    </div>
  </nav>
  <div class="menubar absolute top-0 left-[-60%] flex justify-center items-start w-[60%] h-screen pt-[20%] bg-bgColor transition-all z-20 shadow-md">
    <ul class="list-none">
      <li class="mb-8">
        <a href="/" class="text-black text-[95%] font-normal py-1 px-2 rounded hover:bg-gray-100 transition-all">Home</a>
      </li>
      <li class="mb-8">
        <a href="/services" class="text-black text-[95%] font-normal py-1 px-2 rounded hover:bg-gray-100 transition-all">Services</a>
      </li>
      <li class="mb-8">
        <a href="/blog" class="text-black text-[95%] font-normal py-1 px-2 rounded hover:bg-gray-100 transition-all">Blog</a>
      </li>
      <li class="mb-8">
        <a href="/contact" class="text-black text-[95%] font-normal py-1 px-2 rounded hover:bg-gray-100 transition-all">Contact Us</a>
      </li>
    </ul>
  </div>
`;

const mobileNav = document.querySelector(".hamburger");
const menubar = document.querySelector(".menubar");
const lines = document.querySelectorAll(".line");

const toggleNav = () => {
  menubar.classList.toggle("left-0");
  mobileNav.classList.toggle("hamburger-active");

  lines[0].classList.toggle("rotate-45");
  lines[0].classList.toggle("translate-y-2");
  lines[1].classList.toggle("opacity-0");
  lines[2].classList.toggle("-rotate-45");
  lines[2].classList.toggle("-translate-y-2");
};

mobileNav.addEventListener("click", toggleNav);
