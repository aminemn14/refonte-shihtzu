const navbar = document.querySelector("#navbar");

navbar.innerHTML = `

  <nav class="p-4 md:p-8 lg:px-12 flex justify-between items-center z-89 bg-bgColor transition-shadow duration-300">
    <a href="index.html"><div class="logo flex items-center">
      <img src="src/img/icon-shihtzu.svg" alt="logo" class="h-10 w-auto mr-2" />
      <h1 class="text-2xl sm:text-3xl text-body font-alinsa">SHIHTZU</h1>
    </div></a>
    <ul class="hidden md:flex list-none items-center">
      <li class="ml-6">
        <a href="index.html" class="text-body text-[95%] font-normal py-1 px-2 rounded hover:text-primary transition duration-300">Accueil</a>
      </li>
       <li class="ml-6">
        <a href="about.html" class="text-body text-[95%] font-normal py-1 px-2 rounded hover:text-primary transition duration-300">À propos</a>
      </li>
      <li class="ml-6">
        <a href="pension.html" class="text-body text-[95%] font-normal py-1 px-2 rounded hover:text-primary transition duration-300">Pension</a>
      </li>
      <li class="ml-6">
        <a href="blog.html" class="text-body text-[95%] font-normal py-1 px-2 rounded hover:text-primary transition duration-300">Blog</a>
      </li>
      <li class="ml-6">
        <a href="contact.html" class="text-body text-[95%] font-normal py-1 px-2 rounded hover:text-primary transition duration-300">Contact</a>
      </li>
    </ul>
    <div class="hamburger block md:hidden cursor-pointer">
      <span class="line w-6 h-[2px] bg-body block my-1.5  transition-all"></span>
      <span class="line w-6 h-[2px] bg-body block my-1.5  transition-all"></span>
      <span class="line w-6 h-[2px] bg-body block my-1.5 transition-all"></span>
    </div>
  </nav>
  
  <div class="menubar absolute top-0 left-[-60%] flex justify-center items-start w-[40%] h-screen pt-[20%] bg-bgColor transition-all z-90 shadow-md">
    <ul class="list-none">
      <li class="mb-8">
        <a href="index.html" class="text-black text-[95%] font-normal py-1 px-2 rounded hover:text-primary transition duration-300">Accueil</a>
      </li>
      <li class="mb-8">
        <a href="about.html" class="text-black text-[95%] font-normal py-1 px-2 rounded hover:text-primary transition duration-300">À propos</a>
      </li>
      <li class="mb-8">
        <a href="pension.html" class="text-black text-[95%] font-normal py-1 px-2 rounded hover:text-primary transition duration-300">Pension</a>
      </li>
      <li class="mb-8">
        <a href="blog.html" class="text-black text-[95%] font-normal py-1 px-2 rounded hover:text-primary transition duration-300">Blog</a>
      </li>
      <li class="mb-8">
        <a href="contact.html" class="text-black text-[95%] font-normal py-1 px-2 rounded hover:text-primary transition duration-300">Contact</a>
      </li>
    </ul>
  </div>
  
`;

const handleScroll = () => {
  if (window.scrollY > 0) {
    navbar.querySelector("nav").classList.add("shadow-lg");
  } else {
    navbar.querySelector("nav").classList.remove("shadow-lg");
  }
};

window.addEventListener("scroll", handleScroll);

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
