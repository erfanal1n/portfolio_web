'use client';
import Link from 'next/link'


export default function Experience2() {
	return (
		<>

			<section id="experince" className="section-experience pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="p-lg-8 p-md-6 p-3 position-relative z-1">
								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Expericence </span>
								</div>
								<h3>
									+6
									<span className="text-300">years of </span>
									passionate coding
									<span className="text-300">
										 experience across <br />
										  multiple programming languages and frameworks.
									</span>
								</h3>
								<div className="row mt-5">
									<div className="col-lg-4">
										<div className="d-flex flex-column gap-2">
											<Link href="#" 
											onClick={(e) => e.preventDefault()} 
											className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<img src="assets/imgs/home-page-2/experience/web_application.svg" alt="erfanalin" />
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1">Dynamic Web Application</h5>
														<span className="text-300">2024 - Present</span>
													</div>
												</div>
											</Link>
											<Link href="#" 
											onClick={(e) => e.preventDefault()} 
											className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<img src="assets/imgs/home-page-2/experience/chatbot.svg" alt="erfanalin" />
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1">Dynamic Chatbots </h5>
														<span className="text-300">2023 - Present</span>
													</div>
												</div>
											</Link>
											<Link href="#"
											onClick={(e) => e.preventDefault()}
											 className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<img src="assets/imgs/home-page-2/experience/dashboard.svg" alt="erfanalin" />
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1">Interactive Websites</h5>
														<span className="text-300">2022 - Present</span>
													</div>
												</div>
											</Link>
											<Link href="#" 
											onClick={(e) => e.preventDefault()} 
											className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<img src="assets/imgs/home-page-2/experience/wordpress.svg" alt="erfanalin" />
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1">Custom WordPress Theme</h5>
														<span className="text-300">2019 - Present</span>
													</div>
												</div>
											</Link>
										</div>
									</div>
									<div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
										<h6 className="text-linear-4">Full-Stack Developer (Freelance)</h6>
										<ul className="mt-4">
											<li className="text-dark mb-3">Developed <span className="text-secondary-2"> end-to-end responsive </span> web solutions, from database design to user interfaces.</li>
											<li className="text-dark mb-3">Managed project lifecycles independently, including the integration of AI-powered chatbots for enhanced user interaction.</li>
											<li className="text-dark mb-3">Implemented robust backend APIs and integrated third-party services for enhanced functionality.</li>
										</ul>
										<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
											<Link href="#" 
											onClick={(e) => e.preventDefault()} 
											className="text-300 border border-1 px-3 py-1">Python</Link>
											<Link href="#"
											onClick={(e) => e.preventDefault()} 
											className="text-300 border border-1 px-3 py-1">Javascript</Link>
											<Link href="#"
											onClick={(e) => e.preventDefault()} 
											className="text-300 border border-1 px-3 py-1">Mysql</Link>
											<Link href="#"
											onClick={(e) => e.preventDefault()} 
											className="text-300 border border-1 px-3 py-1">Html</Link>
											<Link href="#"
											onClick={(e) => e.preventDefault()} 
											className="text-300 border border-1 px-3 py-1">Php</Link>
										</div>
									</div>
								</div>
							</div>
							<img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/services/bg.png" alt="erfanalin" />
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
