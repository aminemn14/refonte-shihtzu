export default function HomePage() {
  return `
      <section id="hero" class="px-4 md:px-8 lg:px-12">
        <div class="flex flex-1 w-full flex-col items-center justify-center text-center px-4 py-20 bg-bgColorHover rounded-xl h-[80vh]">
  <a href="/contact"
    class="flex items-center border border-accent rounded-lg py-2 px-4 hover:bg-accent text-accent hover:text-bgColor text-sm mb-5 transition duration-300 ease-in-out ">
    Nous contacter 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 ml-2"> <!-- Réduction de la taille -->
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  </a>
  <h1
    class="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-body sm:text-7xl">
    Passez le pas, <br />et adoptez
    <span class="relative whitespace-nowrap text-accent">
      <svg aria-hidden="true" viewBox="0 0 418 42" class="absolute top-2/3 left-0 h-[0.58em] w-full fill-secondary" preserveAspectRatio="none">
        <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"></path>
      </svg>
      <span class="relative">un chiot !</span>
    </span>
  </h1>
  <h2 class="mx-auto mt-12 max-w-xl text-lg sm:text-bodyGray text-bodyGray leading-7">
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </h2>
  <a class="bg-accent rounded-xl text-bgColor font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-accentHover transition duration-300 ease-in-out"
    href="">Adopter un chiot !</a>
</div>
      </section>




     <section id="staff" class="p-4 md:p-8 lg:p-12">
	<div class="flex items-center justify-center min-h-screen ">
		<div class="flex flex-col">
			<div class="flex flex-col mt-8">
				<div class="container max-w-7xl px-4">
					<div class="flex flex-wrap justify-center text-center mb-16">
						<div class="w-full lg:w-6/12 px-4">
							<h1 class="text-gray-900 text-4xl font-bold mb-8">Rencontrez l'équipe</h1>
							<p class="text-gray-700 text-lg font-light">
								Mme Monique DURUPT Aurélie et sa fille Mme Aurélie FEUERSTEIN vous attendent à leur élevage.
							</p>
						</div>
					</div>
					<!-- Team Members -->
					<div class="flex flex-wrap justify-center">
						<!-- Member #1 -->
						<div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
							<div class="flex flex-col">
								<!-- Avatar -->
								<a href="#" class="mx-auto"><img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100" src="src/img/monique.jpg"></a>
								<!-- Details -->
								<div class="text-center mt-6">
									<!-- Name -->
									<h1 class="text-gray-900 text-xl font-bold mb-1">Monique DURUPT</h1>
								</div>
							</div>
						</div>
						<!-- Member #2 -->
						<div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
							<div class="flex flex-col">
								<!-- Avatar -->
								<a href="#" class="mx-auto"><img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100" src="src/img/aurelie.jpeg"></a>
								<!-- Details -->
								<div class="text-center mt-6">
									<!-- Name -->
									<h1 class="text-gray-900 text-xl font-bold mb-1">Aurélie FEUERSTEIN</h1>
								</div>
							</div>
						</div>
					</div>
					<div class="flex justify-center mt-24"><p class="text-warning text-2xl">Visites uniquement sur Rendez-Vous du Lundi au Samedi</p></div>
				</div>
			</div>
		</div>
	</div>
</section>

      
    `;
}
