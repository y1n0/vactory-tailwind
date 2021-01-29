import React from "react";
// https://tailwindui.com/components/marketing/sections/testimonials#component-457ad469e750400bb907272fd68b4561

export default (props) => {
	return (
		<section className="bg-indigo-800">
			<div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
				<div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:ltr:pl-0 md:ltr:pr-0 md:rtl:pr-10 md:rtl:pl-10 md:ltr:border-r md:rtl:border-l md:border-indigo-900 lg:ltr:pr-16 lg:ltr:pl-16">
					<div className="md:flex-shrink-0">
						<img
							className="h-12"
							referrerPolicy="no-referrer"
							src="https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg"
							alt="Tuple"
						/>
					</div>
					<blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
						<div className="relative text-lg font-medium text-white md:flex-grow">
							<svg
								className="absolute top-0 ltr:left-0 rtl:right-0 transform ltr:-translate-x-3 rtl:translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600 rtl:-scale-x-100"
								fill="currentColor"
								viewBox="0 0 32 32"
								aria-hidden="true"
							>
								<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
							</svg>
							<p className="relative">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Nemo expedita voluptas culpa
								sapiente alias molestiae. Numquam corrupti in
								laborum sed rerum et corporis.
							</p>
						</div>
						<footer className="mt-8">
							<div className="flex">
								<div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
									<img
										className="h-12 w-12 rounded-full"
										src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										alt=""
									/>
								</div>
								<div className="ltr:ml-4 rtl:mr-4">
									<div className="text-base font-medium text-white">
										Judith Black
									</div>
									<div className="text-base font-medium text-indigo-200">
										CEO, Tuple
									</div>
								</div>
							</div>
						</footer>
					</blockquote>
				</div>
				<div className="py-12 px-4 border-t-2 border-indigo-900 sm:px-6 md:py-16 md:ltr:pr-0 md:rtl:pl-0 md:ltr:pl-10 md:rtl:pr-10 md:border-t-0 md:ltr:border-l md:rtl:border-r lg:ltr:pl-16 lg:rtl:pr-16">
					<div className="md:flex-shrink-0">
						<img
							referrerPolicy="no-referrer"
							className="h-12"
							src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"
							alt="Workcation"
						/>
					</div>
					<blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
						<div className="relative text-lg font-medium text-white md:flex-grow">
							<svg
								className="absolute top-0 ltr:left-0 rtl:right-0 transform ltr:-translate-x-3 rtl:translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600 rtl:-scale-x-100"
								fill="currentColor"
								viewBox="0 0 32 32"
							>
								<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
							</svg>
							<p className="relative">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Nemo expedita voluptas culpa
								sapiente alias molestiae. Numquam corrupti in
								laborum sed rerum et corporis. Nemo expedita
								voluptas culpa sapiente alias molestiae.
							</p>
						</div>
						<footer className="mt-8">
							<div className="flex">
								<div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
									<img
										className="h-12 w-12 rounded-full"
										src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										alt=""
									/>
								</div>
								<div className="ltr:ml-4 rtl:mr-4">
									<div className="text-base font-medium text-white">
										Joseph Rodriguez
									</div>
									<div className="text-base font-medium text-indigo-200">
										CEO, Workcation
									</div>
								</div>
							</div>
						</footer>
					</blockquote>
				</div>
			</div>
		</section>
	);
}