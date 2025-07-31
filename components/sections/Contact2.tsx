'use client'
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact2() {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		subject: '',
		message: ''
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus('');

		try {
			// EmailJS service configuration
			const serviceId = 'service_erfanalin'; 
			const templateId = 'template_contact';  
			const publicKey = 'jZfB6n4MTmIrCR5Ku'; 

			const templateParams = {
				from_name: formData.name,
				from_email: formData.email,
				phone: formData.phone,
				subject: formData.subject,
				message: formData.message,
				to_email: 'md.erfanul.haque0@gmail.com'
			};

			await emailjs.send(serviceId, templateId, templateParams, publicKey);
			
			setSubmitStatus('success');
			setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
		} catch (error) {
			console.error('Email send failed:', error);
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			<section id="contact" className="section-contact-2 position-relative pb-60 overflow-hidden">
				<div className="container position-relative z-1">
					<div className="row align-items-center">
						<div className="col-lg-7 pb-5 pb-lg-0">
							<div className="position-relative">
								<div className="position-relative z-2">
									<h3 className="text-primary-2 mb-3">Let's connect</h3>
									<form onSubmit={handleSubmit}>
										<div className="row g-3">
											<div className="col-md-6 ">
												<input 
													type="text" 
													className="form-control bg-3 border border-1 rounded-3" 
													id="name" 
													name="name" 
													placeholder="Your name" 
													aria-label="username"
													value={formData.name}
													onChange={handleInputChange}
													required
												/>
											</div>
											<div className="col-md-6">
												<input 
													type="tel" 
													className="form-control bg-3 border border-1 rounded-3" 
													id="phone" 
													name="phone" 
													placeholder="Phone" 
													aria-label="phone"
													value={formData.phone}
													onChange={handleInputChange}
												/>
											</div>
											<div className="col-md-6">
												<input 
													type="email" 
													className="form-control bg-3 border border-1 rounded-3" 
													id="email" 
													name="email" 
													placeholder="Email" 
													aria-label="email"
													value={formData.email}
													onChange={handleInputChange}
													required
												/>
											</div>
											<div className="col-md-6">
												<input 
													type="text" 
													className="form-control bg-3 border border-1 rounded-3" 
													id="subject" 
													name="subject" 
													placeholder="Subject" 
													aria-label="subject"
													value={formData.subject}
													onChange={handleInputChange}
													required
												/>
											</div>
											<div className="col-12">
												<textarea 
													className="form-control bg-3 border border-1 rounded-3" 
													id="message" 
													name="message" 
													placeholder="Message" 
													aria-label="With textarea"
													value={formData.message}
													onChange={handleInputChange}
													rows={5}
													required
												/>
											</div>
											
											{submitStatus === 'success' && (
												<div className="col-12">
													<div className="alert alert-success" role="alert">
														Message sent successfully! I'll get back to you soon.
													</div>
												</div>
											)}
											{submitStatus === 'error' && (
												<div className="col-12">
													<div className="alert alert-danger" role="alert">
														Failed to send message. Please try again or email me directly.
													</div>
												</div>
											)}
											
											<div className="col-12">
												<button 
													type="submit" 
													className="btn btn-primary-2 rounded-2"
													disabled={isSubmitting}
												>
													{isSubmitting ? (
														<>
															<span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
															Sending...
														</>
													) : (
														<>
															Send Message
															<i className="ri-arrow-right-up-line" />
														</>
													)}
												</button>
											</div>
										</div>
									</form>
								</div>
								<div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
							</div>
						</div>
						<div className="col-lg-5 d-flex flex-column ps-lg-8">
							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<i className="ri-phone-fill text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">Phone Number</span>
									<h6 className="mb-0">+8801755944898</h6>
								</div>
								<a href="tel:+8801755944898" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<i className="ri-mail-fill text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">Email</span>
									<h6 className="mb-0">md.erfanul.haque0@gmail.com</h6>
								</div>
								<a href="mailto:md.erfanul.haque0@gmail.com" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<i className="ri-linkedin-fill text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">Linkedin</span>
									<h6 className="mb-0">Md. Erfanul Haque</h6>
								</div>
								<a href="https://www.linkedin.com/in/md-erfanul-haque-311042332/"target="_blank" rel="noopener noreferrer" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<i className="ri-map-2-fill text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">Address</span>
									<h6 className="mb-0">Dhaka,Bangladesh</h6>
								</div>
								<a href="https://maps.app.goo.gl/UYkt8uvgQaw5fLLPA"target="_blank" rel="noopener noreferrer" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}