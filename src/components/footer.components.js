const footer = document.querySelector("#footer");

footer.innerHTML = `
<footer class="w-full">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col lg:flex-row py-10">
			<div class="flex-1 mb-10 lg:mb-0">
				<a href="/" class="flex justify-center lg:justify-start">
					<img src="src/img/logo-black.svg" class="h-10 w-auto" />
				</a>
				<p class="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
					Lorem ipsum dolor sit amet consectetur 
				</p>
				<a href="/contact.html" class="inline-flex items-center border border-accent rounded-lg py-2 px-4 bg-accent hover:bg-accentHover text-bgColor text-sm mb-5 transition duration-300 ease-in-out">
					Nous contacter
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 ml-2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
					</svg>
				</a>
			</div>
			<div class="flex-1 lg:ml-auto">
				<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8">
					<div class="mb-10 lg:mb-0">
						<a href="/"><h4 class="text-lg text-gray-900 font-medium mb-7">Shihtzu</h4></a>
						<ul class="text-sm transition-all duration-500">
							<li class="mb-6"><a href="/pension.html" class="text-gray-600 hover:text-gray-900">Pension</a></li>
							<li class="mb-6"><a href="/blog.html" class="text-gray-600 hover:text-gray-900">Blog</a></li>
							<li><a href="/contact.html" class="text-gray-600 hover:text-gray-900">Contact</a></li>
						</ul>
					</div>
					<div class="mb-10 lg:mb-0">
						<h4 class="text-lg text-gray-900 font-medium mb-7">Blog</h4>
						<ul class="text-sm transition-all duration-500">
							<li class="mb-6"><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Article 1</a></li>
							<li class="mb-6"><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Article 2</a></li>
							<li><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Article 3</a></li>
						</ul>
					</div>
					<div class="mb-10 lg:mb-0">
						<h4 class="text-lg text-gray-900 font-medium mb-7">Contact</h4>
						<ul class="text-sm transition-all duration-500">
							<li class="mb-6"><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Lorem Ipsum</a></li>
							<li class="mb-6"><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Lorem Ipsum</a></li>
							<li><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Lorem Ipsum</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="py-7 border-t border-bgColorHover">
			<div class="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
				<span class="text-sm text-bodyGray hover:text-body transition duration-300">©&nbsp;<a href="/">Shihtzu</a> 2024</span>
				<div class="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
					<a href="https://www.facebook.com/p/Les-Poupons-Fris%C3%A9s-100046874123441/" target="_blank" class="w-9 h-9 rounded-full flex justify-center items-center">
						<svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect x="0.0683594" width="30" height="30" rx="15" fill="#CB7F36"></rect>
							<path d="M18.5094 15.937L18.9369 13.2236H16.3038V11.4599C16.3038 10.7179 16.6714 9.99293 17.8469 9.99293H19.0608V7.68231C18.3539 7.56968 17.6396 7.50874 16.9236 7.5C14.7565 7.5 13.3417 8.80158 13.3417 11.1546V13.2236H10.9395V15.937H13.3417V22.5H16.3038V15.937H18.5094Z" fill="white"></path>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>
`;
