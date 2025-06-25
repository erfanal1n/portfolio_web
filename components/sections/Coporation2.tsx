'use client';
import Link from 'next/link'
import Marquee from "react-fast-marquee";

export default function Coporation2() {
	return (
		<>

			<section className="section-coporation">
				<div className="container pt-5">
					<div className="row">
						<div className="col-lg-8">
							<div className="rounded-3 border border-1 position-relative overflow-hidden">
								<div className="box-linear-animation">
									<div className="p-lg-8 p-md-6 p-3">
										<div className="d-flex align-items-center">
											<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
												<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
											</svg>
											<span className="text-linear-4 d-flex align-items-center"> Cooperation </span>
										</div>
										<h3 className="fw-medium">
											More than +50 <span className="text-300">clients <br /></span> trusted <span className="text-300">worldwide_</span>
										</h3>
										<div className="my-5 border border-1 rounded-2 p-3">
											{/* Carausel Scroll */}
											<Marquee className="carouselTicker carouselTicker-left position-relative z-1">
												<ul className="carouselTicker__list m-0">
													<li className="carouselTicker__item">
														<img src="/assets/imgs/coporation/icon-1.svg" alt="Client Logo 1" style={{ height: '30px' }} />
													</li>
													<li className="carouselTicker__item">
														<img src="/assets/imgs/coporation/icon-2.svg" alt="Client Logo 2" style={{ height: '30px' }} />
													</li>
													<li className="carouselTicker__item">
														<img src="/assets/imgs/coporation/icon-3.svg" alt="Client Logo 3" style={{ height: '30px' }} />
													</li>
													<li className="carouselTicker__item">
														<img src="/assets/imgs/coporation/icon-4.svg" alt="Client Logo 4" style={{ height: '30px' }} />
													</li>
													<li className="carouselTicker__item">
														<img src="/assets/imgs/coporation/icon-5.svg" alt="Client Logo 5" style={{ height: '30px' }} />
													</li>
													<li className="carouselTicker__item">
														<img src="/assets/imgs/coporation/icon-6.svg" alt="Client Logo 6" style={{ height: '30px' }} />
													</li>
												</ul>
											</Marquee>
											<Marquee className="carouselTicker carouselTicker-right position-relative z-1" direction="right">
												<ul className="carouselTicker__list m-0">
													<li className="carouselTicker__item">
														<img src="/assets/imgs/coporation/icon-1.svg" alt="Client Logo 1" style={{ height: '30px' }} />
													</li>
													<li className="carouselTicker__item">
														<img src="/assets/imgs/coporation/icon-2.svg" alt="Client Logo 2" style={{ height: '30px' }} />
													</li>
													<li className="carouselTicker__item">
														<img src="/assets/imgs/coporation/icon-3.svg" alt="Client Logo 3" style={{ height: '30px' }} />
													</li>
													<li className="carouselTicker__item">
														<img src="/assets/imgs/coporation/icon-4.svg" alt="Client Logo 4" style={{ height: '30px' }} />
													</li>
													<li className="carouselTicker__item">
														<img src="/assets/imgs/coporation/icon-5.svg" alt="Client Logo 5" style={{ height: '30px' }} />
													</li>
													<li className="carouselTicker__item">
														<img src="/assets/imgs/coporation/icon-6.svg" alt="Client Logo 6" style={{ height: '30px' }} />
													</li>
												</ul>
											</Marquee>

										</div>
										<div className="d-flex flex-column flex-md-row align-items-center gap-3">
											<div>
												<div className="circle-1 position-relative z-0">
													<div className="circle-2 position-absolute top-50 start-50 translate-middle z-1">
														<div className="position-absolute top-50 start-50 translate-middle z-2">
															<img className="w-100 h-100 rounded-circle" src="assets/imgs/coporation/avatar.png" alt="erfanalin" />
															<svg className="text-primary-2 position-absolute bottom-0 end-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 5 6" fill="none">
																<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
															</svg>
														</div>
													</div>
												</div>
											</div>
											<div className="d-flex flex-column gap-2">
												<Link href="#" onClick={(e) => e.preventDefault()}>
													<i className="ri-instagram-fill" />
													<span className="text-300">[instagram] <span className="text-secondary-2">__you_know_whoo__</span></span>
												</Link>
												<Link href="#" onClick={(e) => e.preventDefault()}>
													<i className="ri-phone-fill" />
													<span className="text-300">[phone] <span className="text-secondary-2">+8801755944898</span></span>
												</Link>
												<Link href="#" onClick={(e) => e.preventDefault()}>
													<i className="ri-mail-fill" />
													<span className="text-300">[email] <span className="text-secondary-2">md.erfanul.haque0@gmail.com</span></span>
												</Link>
											</div>
										</div>
									</div>
									<div className="position-absolute d-none d-md-block decorate">
										<div className="rotateme">
											<div className="circle-1-1" />
											<div className="circle-1-2 position-absolute top-50 start-50 translate-middle">
												<svg className="mb-5 position-absolute bottom-0 start-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
													<circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
												</svg>
											</div>
											<div className="circle-1-3 position-absolute top-50 start-50 translate-middle ">
												<svg className="mb-3 position-absolute bottom-0 end-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
													<circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
												</svg>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 pt-lg-0 pt-5">
							<div className="bg-3 rounded-3 border border-1 p-md-6 p-3 position-relative h-100 overflow-hidden">
								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Project Impact & Milestones </span>
								</div>
								<div className="h-100 position-relative">
									<ul className="ps-3 d-flex flex-column justify-content-around h-100 position-relative">
										<li className="position-relative z-1">
											<div className="d-flex align-items-center gap-2">
												<p className="text-300 text-nowrap">May 2025:</p>
												<span className="text-dark">Launched a  <b style={{ color: 'Tomato' }}>Web Application</b>  for real-time data analytics, improving client reporting efficiency by 35%</span>
											</div>
										</li>
										<li className="position-relative z-1">
											<div className="d-flex align-items-center gap-2">
												<p className="text-300 text-nowrap">Nov 2024:</p>
												<span className="text-dark">Developed <b style={{ color: 'Tomato' }}>AI- Chatbot</b> for BRACU, reducing customer inquiry time by 50%.</span>
											</div>
										</li>
										<li className="position-relative z-1">
											<div className="d-flex align-items-center gap-2">
												<p className="text-300 text-nowrap">Aug 2023:</p>
												<span className="text-dark">Implemented <b style={{ color: 'tomato' }}>Admin Dashboard</b> for SaaS, centralizing management.</span>
											</div>
										</li>
										<li className="position-relative z-1">
											<div className="d-flex align-items-center gap-2">
												<p className="text-300 text-nowrap">Apr 2022:</p>
												<span className="text-dark">Built <b style={{ color: 'tomato' }}>E-Commerce</b> platform, increasing online sales by 25%</span>
											</div>
										</li>
										<li className="position-relative z-1">
											<div className="d-flex align-items-center gap-2">
												<p className="text-300 text-nowrap">Jan 2021:</p>
												<span className="text-dark">Revamped <b style={{ color: 'tomato' }}>WordPress Website</b>, boosting organic traffic by 40%.</span>
											</div>
										</li>
									</ul>
									<div className="line-left position-absolute border-start z-0" />
								</div>
								<div className="bg-overlay position-absolute bottom-0 start-0 z-1" />
							</div>
						</div>
					</div>
				</div>
			</section>

		</>

	)
}
