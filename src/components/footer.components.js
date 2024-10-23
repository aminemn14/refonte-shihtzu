const footer = document.querySelector("#footer");

footer.innerHTML = `
<footer class="w-full">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!--Grid-->
		<div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
			<div class="col-span-full mb-10 lg:col-span-2 lg:mb-0">
				<a href="/"  class="flex justify-center lg:justify-start"><img src="src/img/logo-black.svg" class="h-10 w-auto" /></a>
				<p class="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
					Lorem ipsum dolor sit amet consectetur 
				</p>
				<a href="/contact.html" class="inline-flex items-center border border-accent  rounded-lg py-2 px-4 bg-accent hover:bg-accentHover text-bgColor  text-sm mb-5 transition duration-300 ease-in-out ">
					Nous contacter
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 ml-2">
						<!-- Réduction de la taille -->
						<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
					</svg>
				</a>
			</div>
			<!--End Col-->
			<div class="lg:mx-auto text-left ">
				<h4 class="text-lg text-gray-900 font-medium mb-7">Shihtzu</h4>
				<ul class="text-sm  transition-all duration-500">
					<li class="mb-6"><a href="/" class="text-gray-600 hover:text-gray-900">Accueil</a></li>
					<li class="mb-6"><a href="/pension.html"  class=" text-gray-600 hover:text-gray-900">Pension</a></li>
					<li class="mb-6"><a href="/blog.html"  class=" text-gray-600 hover:text-gray-900">Blog</a></li>
					<li><a href="/contact.html" class=" text-gray-600 hover:text-gray-900">Contact</a></li>
				</ul>
			</div>
			<!--End Col-->
			<div class="lg:mx-auto text-left ">
				<h4 class="text-lg text-gray-900 font-medium mb-7">Pension</h4>
				<ul class="text-sm  transition-all duration-500">
					<li class="mb-6"><a href="javascript:;"  class="text-gray-600 hover:text-gray-900">Figma UI System</a></li>
					<li class="mb-6"><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">Icons Assets</a></li>
					<li class="mb-6"><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">Responsive Blocks</a></li>
					<li><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">Components Library</a></li>
				</ul>
			</div>
			<!--End Col-->
			<div class="lg:mx-auto text-left">
				<h4 class="text-lg text-gray-900 font-medium mb-7">Blog</h4>
				<ul class="text-sm  transition-all duration-500">
					<li class="mb-6"><a href="javascript:;"  class="text-gray-600 hover:text-gray-900">FAQs</a></li>
					<li class="mb-6"><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">Quick Start</a></li>
					<li class="mb-6"><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">Documentation</a></li>
					<li><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">User Guide</a></li>
				</ul>
			</div>
			<!--End Col-->
			<div class="lg:mx-auto text-left">
				<h4 class="text-lg text-gray-900 font-medium mb-7">Contact</h4>
				<ul class="text-sm  transition-all duration-500">
					<li class="mb-6"><a href="javascript:;"  class="text-gray-600 hover:text-gray-900">News</a></li>
					<li class="mb-6"><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">Tips & Tricks</a></li>
					<li class="mb-6"><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">New Updates</a></li>
					<li><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">Events</a></li>
				</ul>
			</div>
		</div>
		<!--Grid-->
		<div class="py-7 border-t border-bgColorHover">
			<div class="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
				<span class="text-sm text-bodyGray hover:text-body transition duration-300 ">©&nbsp;<a href="/">Shihtzu</a> 2024</span>
				<div class="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
					<a href="javascript:;"  class="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
							<g id="Social Media">
								<path id="Vector" d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z" fill="white"/>
							</g>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>                                      
`;
