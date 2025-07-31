import { useEffect } from "react";

export default function Footer2() {
	useEffect(() => {
		const svg = document.getElementById("interactive-text-svg");
		const maskGradient = document.getElementById("revealMaskGradient");

		function updateMask(event: MouseEvent) {
			if (!svg || !maskGradient) return;
			const rect = svg.getBoundingClientRect();
			const x = event.clientX - rect.left;
			const y = event.clientY - rect.top;
			const percentX = (x / rect.width) * 100;
			const percentY = (y / rect.height) * 100;
			maskGradient.setAttribute("cx", `${percentX}%`);
			maskGradient.setAttribute("cy", `${percentY}%`);
		}

		function resetMask() {
			if (maskGradient) {
				maskGradient.setAttribute("cx", "50%");
				maskGradient.setAttribute("cy", "-50%");
			}
		}

		if (svg) {
			svg.addEventListener("pointermove", updateMask);
			svg.addEventListener("mouseleave", resetMask);
			resetMask();
		}

		return () => {
			if (svg) {
				svg.removeEventListener("pointermove", updateMask);
				svg.removeEventListener("mouseleave", resetMask);
			}
		};
	}, []);

	return (
		<>
			<style jsx>{`
				.footer-text {
					color: #ffffff !important;
					text-decoration: none !important;
				}
				.footer-text:hover {
					color: #6e4ef2 !important;
				}
				.footer-icon {
					color: #ffffff !important;
				}
				.footer-icon:hover {
					color: #6e4ef2 !important;
				}
				.main-logo {
					color: #ffffff !important;
					text-decoration: none !important;
					padding-top: 0.2rem !important;
					padding-bottom: 0.2rem !important;
				}
				.main-logo:hover {
					color: #ffffff !important;
					text-decoration: none !important;
				}
				.main-logo span {
					font-family: var(--dmMono) !important;
					font-size: 24px !important;
					font-style: normal !important;
					font-weight: 500 !important;
					line-height: normal !important;
					background: linear-gradient(270deg, rgba(255, 255, 255, 0.32) 0%, #fff 100%) !important;
					background-clip: text !important;
					-webkit-background-clip: text !important;
					-webkit-text-fill-color: transparent !important;
					margin-left: 0.5rem !important;
				}
			`}</style>
			<footer className="bg-[#1f1f25] text-white w-full">
				<div className="w-full px-4 md:px-8 lg:px-12 xl:px-24 pt-16 pb-6">
				<div className="max-w-7xl mx-auto flex flex-col items-center">
					<svg
						id="interactive-text-svg"
						width="100%"
						height="100%"
						viewBox="0 0 400 100"
						xmlns="http://www.w3.org/2000/svg"
						className="select-none cursor-pointer max-w-5xl w-full h-[8rem] md:h-[12rem]"
					>
						<defs>
							<linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
								<stop offset="0%" stopColor="#3b82f6" />
								<stop offset="25%" stopColor="#8b5cf6" />
								<stop offset="50%" stopColor="#ec4899" />
								<stop offset="75%" stopColor="#f59e0b" />
								<stop offset="100%" stopColor="#10b981" />
							</linearGradient>

							<radialGradient id="revealMaskGradient" r="18%" cx="50%" cy="50%">
								<stop offset="0%" stopColor="white" />
								<stop offset="100%" stopColor="black" />
							</radialGradient>

							<mask id="textMask">
								<rect x="0" y="0" width="100%" height="100%" fill="url(#revealMaskGradient)" />
							</mask>
						</defs>

						<text
							x="50%"
							y="55%"
							textAnchor="middle"
							dominantBaseline="middle"
							fill="transparent"
							stroke="#888"
							strokeWidth="0.2"
							style={{ fontSize: "3rem", fontWeight: "bold" }}
						>
							Erfan Alin
						</text>

						<text
							x="50%"
							y="55%"
							textAnchor="middle"
							dominantBaseline="middle"
							fill="transparent"
							stroke="url(#textGradient)"
							strokeWidth="0.3"
							mask="url(#textMask)"
							style={{ fontSize: "3rem", fontWeight: "bold" }}
						>
							Erfan Alin
						</text>
					</svg>

					<hr className="border-gray-600 opacity-50 w-full mt-6 border-t-[0.5px]" />
				</div>
			</div>

			<div className="container position-relative z-1 border-top border-1 pb-2 pt-4">
				<div className="text-center">
					<a className="navbar-brand d-flex main-logo align-items-center justify-content-center mb-3" href="/">
						<img src="assets/imgs/home-page-2/template/favicon.svg" alt="Erfan Alin" />
						<span className="fs-4 ms-2">Erfan Alin</span>
					</a>

					<div className="d-flex justify-content-center gap-3">
						<a href="http://facebook.com/erfanverse" target="_blank" rel="noopener noreferrer" className="footer-icon">
							<i className="ri-facebook-circle-fill fs-18" />
						</a>
						<a href="https://www.instagram.com/__you_know_whoo__" target="_blank" rel="noopener noreferrer" className="footer-icon">
							<i className="ri-instagram-fill fs-18" />
						</a>
						<a href="https://www.linkedin.com/in/md-erfanul-haque-311042332/" target="_blank" rel="noopener noreferrer" className="footer-icon">
							<i className="ri-linkedin-fill fs-18" />
						</a>
						<a href="http://github.com/erfanal1n" target="_blank" rel="noopener noreferrer" className="footer-icon">
							<i className="ri-github-fill fs-18" />
						</a>
					</div>

					<div className="navigation d-flex align-items-center justify-content-center flex-wrap gap-4 my-4">
						<a href="#about" className="fs-6 footer-text">About me</a>
						<a href="#resume" className="fs-6 footer-text">Resume</a>
						<a href="#services" className="fs-6 footer-text">Services</a>
						<a href="#portfolio" className="fs-6 footer-text">Portfolio</a>
						<a href="#blog" className="fs-6 footer-text">Blogs</a>
						<a href="#contact" className="fs-6 footer-text">Contact</a>
					</div>
				</div>
			</div>
			</footer>
		</>
	);
}
