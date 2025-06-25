'use client';

import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function BlogDetails() {
    
    const blogPostUrl = "https://yourwebsite.com/blog/mastering-wordpress-speed-security"; // IMPORTANT
    const blogPostTitle = "MASTERING WORDPRESS: SPEED AND SECURITY TIPS";

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <section className="section-details pt-130 pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-lg-auto mb-8">
                                    <div className="text-center">
                                        <Link href="/#" className="btn btn-gradient d-inline-block text-uppercase"> WordPress </Link>
                                        <h3 className="ds-3 mt-3 mb-4 text-dark">MASTERING WORDPRESS: SPEED AND SECURITY TIPS</h3>
                                        <p className="text-300 fs-5 mb-0">
                                            Discover essential strategies to optimize your WordPress site for performance and protect it from common vulnerabilities.
                                        </p>
                                    </div>
                                </div>
                                <img src="\assets\imgs\home-page-2\blog\wordpress.png" alt="WordPress" /> 
                                <div className="col-lg-10 mx-lg-auto mt-8">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <h5>Mastering WordPress: Tips for Speed and Security</h5>
                                            <p className="text-300">WordPress is a powerful and flexible platform, but its performance and security can be significantly enhanced with the right strategies. This guide will walk you through essential tips to make your WordPress site faster and more secure.</p>

                                            <h5 className="mt-6">Speed Optimization</h5>
                                            <h5 className="fs-5 fw-medium">Choose a Reliable Hosting Provider</h5>
                                            <p className="text-300">The foundation of a fast WordPress site is a good hosting provider. Look for hosts that offer specialized WordPress hosting, SSD storage, and sufficient resources to handle your site's traffic.</p>

                                            <h5 className="fs-5 fw-medium">Implement Caching</h5>
                                            <p className="text-300">Caching stores static versions of your pages, reducing the load on your server and speeding up delivery to visitors. Use popular caching plugins like WP Super Cache or W3 Total Cache.</p>

                                            <h5 className="fs-5 fw-medium">Optimize Images</h5>
                                            <p className="text-300">Large image files are a common cause of slow loading times. Compress and optimize your images before uploading them, or use plugins that automate this process.</p>

                                            <h5 className="fs-5 fw-medium">Minify CSS and JavaScript</h5>
                                            <p className="text-300">Minifying your code removes unnecessary characters (like spaces and comments ) without affecting functionality, resulting in smaller file sizes and faster loading.</p>

                                            <h5 className="mt-6">Security Tips</h5>
                                            <h5 className="fs-5 fw-medium">Keep WordPress, Themes, and Plugins Updated</h5>
                                            <p className="text-300">Outdated software is a major security vulnerability. Always keep your WordPress core, themes, and plugins updated to the latest versions to patch known security flaws.</p>

                                            <h5 className="fs-5 fw-medium">Use Strong Passwords and Unique Usernames</h5>
                                            <p className="text-300">Avoid using common usernames like 'admin' and always use strong, unique passwords for all your WordPress accounts. Consider using a password manager.</p>

                                            <h5 className="fs-5 fw-medium">Install a Security Plugin</h5>
                                            <p className="text-300">Security plugins like Wordfence or Sucuri provide a firewall, malware scanning, and other features to protect your site from various threats.</p>

                                            <h5 className="fs-5 fw-medium">Regular Backups</h5>
                                            <p className="text-300">Regularly back up your entire WordPress site (files and database). This ensures that you can restore your site quickly in case of a security breach or data loss.</p>

                                            <div className="border-linear-3 rounded-4 p-lg-6 p-md-4 p-3 mt-6">
                                                <h4>Conclusion</h4>
                                                <p className="text-300 mt-4">By implementing these speed and security tips, you can significantly enhance your WordPress site's performance and protect it from potential threats. A fast and secure website not only improves user experience but also contributes to better search engine rankings.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-8">
                                            <div className="border-linear-3 rounded-4 p-lg-6 p-md-4 p-3 mt-lg-0 mt-4">
                                                <div className="d-flex align-items-center mb-3">
                                                    <i className="ri-time-line fs-6" />
                                                    <span className="ms-2 fs-6">6 min read</span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <i className="ri-calendar-schedule-line fs-6" />
                                                    <span className="ms-2 fs-6">February 15, 2022</span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <i className="ri-user-line fs-6" />
                                                    <span className="ms-2 fs-6">By <Link className="fw-bold" href="/#">Erfan Alin</Link></span>
                                                </div>
                                            </div>
                                            <div className="border-linear-3 rounded-4 p-lg-6 p-md-4 p-3 mt-4">
                                                <span className="text-uppercase fs-7">Share</span> <br />
                                                <div className="d-flex gap-3 pt-3">
                                                    <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogPostUrl )}`} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                                        <i className="ri-facebook-circle-fill fs-18" />
                                                    </Link>
                                                    <Link href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(blogPostUrl )}&text=${encodeURIComponent(blogPostTitle)}`} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                                        <i className="ri-twitter-x-fill fs-18" />
                                                    </Link>
                                                    <Link href="#" className="text-decoration-none" onClick={(e) => { e.preventDefault(); alert("Instagram sharing usually requires direct app integration or manual upload."); }}>
                                                        <i className="ri-instagram-fill fs-5" />
                                                    </Link>
                                                    <Link href="#" className="text-decoration-none" onClick={(e) => { e.preventDefault(); alert("Pinterest sharing usually requires direct image upload."); }}>
                                                        <i className="ri-pinterest-fill fs-5" />
                                                    </Link>
                                                    <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(blogPostUrl )}&title=${encodeURIComponent(blogPostTitle)}`} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                                        <i className="ri-linkedin-fill fs-5" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

        
                    
                    <div className="section-static-1 position-relative overflow-hidden z-0 py-8 bg-6">
                        <div className="container">
                            <div className="inner">
                                <div className="row align-items-center justify-content-between">
                                    <div className="col-lg-auto col-md-6">
                                        <div className="counter-item-cover counter-item">
                                            <div className="content text-center mx-auto d-flex align-items-center">
                                                <span className="ds-3 count text-primary-1 fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">6</span></span>
                                                <div className="text-start ms-2">
                                                    <p className="fs-5 mb-0 text-300">Year of</p>
                                                    <p className="fs-5 mb-0 fw-bold">Experience</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-auto col-md-6">
                                        <div className="counter-item-cover counter-item">
                                            <div className="content text-center mx-auto d-flex align-items-center">
                                                <span className="ds-3 count text-primary-1 fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">70</span></span>
                                                <div className="text-start ms-2">
                                                    <p className="fs-5 mb-0 text-300">Projects</p>
                                                    <p className="fs-5 mb-0 fw-bold">Completed</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-auto col-md-6">
                                        <div className="counter-item-cover counter-item">
                                            <div className="content text-center mx-auto d-flex align-items-center">
                                                <span className="ds-3 count text-primary-1 fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">50</span></span>
                                                <div className="text-start ms-2">
                                                    <p className="fs-5 mb-0 text-300">Satisfied</p>
                                                    <p className="fs-5 mb-0 fw-bold">Happy Clients</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-auto col-md-6">
                                        <div className="counter-item-cover counter-item">
                                            <div className="content text-center mx-auto d-flex align-items-center">
                                                <span className="ds-3 count text-primary-1 fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">15</span></span>
                                                <div className="text-start ms-2">
                                                    <p className="fs-5 mb-0 text-300">Certifications</p>
                                                    <p className="fs-5 mb-0 fw-bold">Achieved</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    
                    <section id="contact" className="section-contact-1 bg-900 position-relative pt-150 pb-lg-250 pb-150 overflow-hidden">
                        <div className="container position-relative z-1">
                            <h3 className="ds-3 mt-3 mb-3 text-primary-1">Get in touch</h3>
                            <span className="fs-5 fw-medium text-200">
                                I\"m always excited to take on new projects and collaborate with innovative minds. If you
                                <br />
                                have a project in mind or just want to chat about design, feel free to reach out!
                            </span>
                            <div className="row mt-8">
                                <div className="col-lg-4 d-flex flex-column">
                                    <div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
                                        <div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
                                            <i className="ri-phone-fill text-primary-1 fs-26" />
                                        </div>
                                        <div className="ps-3">
                                            <span className="text-400 fs-5">Phone Number</span>
                                            <h6 className="mb-0">+8801755944898</h6>
                                        </div>
                                        <Link href="tel:+8801755944898" className="position-absolute top-0 start-0 w-100 h-100" />
                                    </div>
                                    <div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
                                        <div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
                                            <i className="ri-mail-fill text-primary-1 fs-26" />
                                        </div>
                                        <div className="ps-3">
                                            <span className="text-400 fs-5">Email</span>
                                            <h6 className="mb-0">md.erfanul.haque0@gmail.com</h6>
                                        </div>
                                        <Link href="mailto:md.erfanul.haque0@gmail.com" className="position-absolute top-0 start-0 w-100 h-100" />
                                    </div>
                                    <div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
                                        <div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
                                            <i className="ri-instagram-fill text-primary-1 fs-26" /> 
                                        </div>
                                        <div className="ps-3">
                                            <span className="text-400 fs-5">Instagram</span>
                                            <h6 className="mb-0">__you_know_whoo__</h6>
                                        </div>
                                        <Link href="https://www.instagram.com/__you_know_whoo__" target="_blank" rel="noopener noreferrer" className="position-absolute top-0 start-0 w-100 h-100" /> {/* Added Instagram link */}
                                    </div>
                                    <div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
                                        <div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
                                            <i className="ri-map-pin-fill text-primary-1 fs-26" />
                                        </div>
                                        <div className="ps-3">
                                            <span className="text-400 fs-5">Location</span>
                                            <h6 className="mb-0">Dhaka, Bangladesh</h6>
                                        </div>
                                        <Link href="/#" className="position-absolute top-0 start-0 w-100 h-100" />
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="form-contact-1">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group mb-4">
                                                        <input type="text" className="form-control" placeholder="Your Name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mb-4">
                                                        <input type="email" className="form-control" placeholder="Your Email" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group mb-4">
                                                <input type="text" className="form-control" placeholder="Subject" />
                                            </div>
                                            <div className="form-group mb-4">
                                                <textarea className="form-control" rows={5} placeholder="Your Message" defaultValue={''}
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-gradient">Send Message</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
     );
}
