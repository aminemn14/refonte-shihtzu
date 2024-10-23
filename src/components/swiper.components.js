const swiper = document.querySelector("#swiper");

swiper.innerHTML = `
<section id="swiper" class="p-4 md:p-8 lg:p-12 lg:mt-24">
	<div class="overflow-hidden">
		<div class="flex flex-wrap justify-center text-center mb-16">
			<div class="w-full lg:w-6/12 px-4">
				<h1 class="text-gray-900 text-4xl font-bold mb-8">Nos fidèles amis à quatre pattes</h1>
				<p class="text-gray-700 text-lg font-light">
					La caniche Myrtille, la Chihuahua Ombline et les quatre Shih tzus des webmasters vous souhaitent une bonne navigation dans ce site.
				</p>
			</div>
		</div>
		<!--Slider Wrapper-->
		<div class="mx-auto w-auto relative">
			<button id="slider-button-left" class="absolute left-0 top-1/2 -translate-y-1/2 swiper-button-prev w-11 h-11 p-3 xl:flex hidden shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] items-center justify-center border border-primary rounded-xl group hover:bg-primaryHover transition-all duration-300 ease-in-out">
				<svg class="text-primary group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
					<path d="M12.5002 14.9999L7.50005 9.99973L12.5032 4.99658" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</button>
			<div class="swiper-container gallery-top w-full md:w-[1028px] mx-auto xl:overflow-hidden pt-6">
				<div class="swiper-wrapper w-max mx-auto mb-5 flex gap-3">
					<div class="swiper-slide max-w-[319px] grid">
						<div class="relative w-full pt-[100%]">
							<img class="absolute top-0 left-0 w-full h-full rounded-xl object-cover" src="src/img/ombline.jpg" />
						</div>
					</div>
					<div class="swiper-slide max-w-[319px] grid">
						<div class="relative w-full pt-[100%]">
							<img class="absolute top-0 left-0 w-full h-full rounded-xl object-cover" src="src/img/myrtille.jpg" />
						</div>
					</div>
					<div class="swiper-slide max-w-[319px] grid">
						<div class="relative w-full pt-[100%]">
							<img class="absolute top-0 left-0 w-full h-full rounded-xl object-cover" src="src/img/4dogs.jpg" />
						</div>
					</div>
					<div class="swiper-slide max-w-[319px] grid">
						<div class="relative w-full pt-[100%]">
							<img class="absolute top-0 left-0 w-full h-full rounded-xl object-cover" src="src/img/ondine.jpg" />
						</div>
					</div>
				</div>
				<button id="slider-button-right" class="absolute right-0 top-1/2 -translate-y-1/2 swiper-button-next w-11 h-11 p-3 xl:flex hidden shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] items-center justify-center border border-primary rounded-xl group transition-all duration-300 ease-in-out hover:bg-primaryHover">
					<svg class="text-primary group-hover:text-bgColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
						<path d="M7.50301 4.99637L12.5032 9.99657L7.50006 14.9997" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</button>
				</div>
			</div>
		</div>
	</section>
    `;
