"use client"

import Link from "next/link"

export default function Content() {
  return (
    <>
      <main>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" href="/">
              <span>Equal Math</span>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-lg-5 me-lg-auto">
                <li className="nav-item">
                  <Link className="nav-link click-scroll" href="#section_1">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link click-scroll" href="#section_3">
                    How It Works
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link click-scroll" href="#section_2">
                    Tutors
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link click-scroll" href="#section_4">
                    FAQs
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link click-scroll" href="#footer">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section
          className="hero-section d-flex justify-content-center align-items-center"
          id="section_1"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12 mx-auto">
                <h1 className="text-white text-center">Equal Math</h1>

                <h6 className="text-center" style={{ color: "white" }}>
                  free math tutoring for all
                </h6>
              </div>
            </div>
          </div>
        </section>

        <section className="timeline-section section-padding" id="section_2">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="text-black mb-4">How It Works</h2>
              </div>

              <div className="col-lg-10 col-12 mx-auto">
                <div className="timeline-container">
                  <ul
                    className="vertical-scrollable-timeline"
                    id="vertical-scrollable-timeline"
                  >
                    <div className="list-progress">
                      <div className="inner"></div>
                    </div>

                    <li>
                      <h4 className="text-black mb-3">Browse Tutors</h4>

                      <p className="text-black">
                        Look through our list of tutors to find someone
                        you&apos;d like to work with.
                      </p>

                      <div className="icon-holder">
                        <i className="bi-search"></i>
                      </div>
                    </li>

                    <li>
                      <h4 className="text-black mb-3">Book A Meeting</h4>

                      <p className="text-black">
                        Each tutor has a Google Appointments page. Select a time
                        that works for you.
                      </p>

                      <div className="icon-holder">
                        <i className="bi-bookmark"></i>
                      </div>
                    </li>

                    <li>
                      <h4 className="text-black mb-3">Meet Virtually</h4>

                      <p className="text-black">
                        You&apos;ll connect with your tutor via Google Meet.
                      </p>

                      <div className="icon-holder">
                        <i className="bi-book"></i>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="explore-section section-padding" id="section_3">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="mb-4">Tutors</h2>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="design-tab-pane"
                    role="tabpanel"
                    aria-labelledby="design-tab"
                    tabIndex={0}
                  >
                    <div className="row">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        <div className="custom-block bg-white shadow-lg">
                          <div className="d-flex">
                            <h5 className="mb-2">Phi</h5>

                            <a
                              className="badge bg-design rounded-pill ms-auto"
                              style={{ width: "fit-content" }}
                              href="https://calendar.app.google/9ASCNsFnPYc27D5j6"
                            >
                              Book
                            </a>
                          </div>

                          <div className="d-flex">
                            <div>
                              <p className="mb-0">
                                I love math, music, and making! 17 is the best
                                number.
                              </p>
                              <p className="mb-0">
                                <br />I can tutor topics from elementary school
                                math to second-year calculus.
                              </p>
                              <p className="mb-0">
                                <br />
                                11th Grade
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="custom-block bg-white shadow-lg">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Aiden</h5>
                            </div>

                            <a
                              className="badge bg-design rounded-pill ms-auto"
                              style={{ width: "fit-content" }}
                              href="https://calendar.app.google/5ft3Ni3xUE8p97by5"
                            >
                              Book
                            </a>
                          </div>

                          <div className="d-flex">
                            <div>
                              <p className="mb-0">
                                Loves math, programming, and piano!
                              </p>
                              <p className="mb-0">
                                <br />
                                Can tutor topics from middle school math to
                                second-year calculus and linear algebra.
                              </p>
                              <p className="mb-0">
                                <br />
                                11th Grade
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="custom-block bg-white shadow-lg">
                          <div>
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">Sachin</h5>
                              </div>

                              <a
                                className="badge bg-design rounded-pill ms-auto"
                                style={{ width: "fit-content" }}
                                href="https://calendar.app.google/WzzjynznaeVEoPD68"
                              >
                                Book
                              </a>
                            </div>
                            <div className="d-flex">
                              <div>
                                <p className="mb-0">
                                  Loves math, saxophone, and engineering.
                                </p>
                                <p className="mb-0">
                                  <br />
                                  Can tutor topics from middle school math to
                                  second-year calculus.
                                </p>
                                <p className="mb-0">
                                  <br />
                                  11th Grade
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="custom-block bg-white shadow-lg">
                          <div>
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">Anya</h5>
                              </div>

                              <a
                                className="badge bg-design rounded-pill ms-auto"
                                style={{ width: "fit-content" }}
                                href="https://calendar.app.google/nhM3vJE6rDqDoC8K8"
                              >
                                Book
                              </a>
                            </div>

                            <div className="d-flex">
                              <div>
                                <p className="mb-0">
                                  I love math, volleyball, and teaching!
                                </p>
                                <p className="mb-0">
                                  <br />
                                  Can tutor topics from elementary school math
                                  to first-year calculus.
                                </p>
                                <p className="mb-0">
                                  <br />
                                  11th Grade
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="custom-block bg-white shadow-lg">
                          <div>
                            <div className="d-flex">
                              <div>
                                <h5 className="mb-2">Allison</h5>
                              </div>

                              <a
                                className="badge bg-design rounded-pill ms-auto"
                                style={{ width: "fit-content" }}
                                href="https://calendar.app.google/femfu2HCNVc2enfeA"
                              >
                                Book
                              </a>
                            </div>
                            <div className="d-flex">
                              <div>
                                <p className="mb-0">
                                  Hi! I&apos;m Allison, and I love dancing,
                                  gaming, and math :)
                                </p>
                                <p className="mb-0">
                                  <br /> I can tutor topics from elementary
                                  school math to calculus.
                                </p>
                                <p className="mb-0">
                                  <br />
                                  11th Grade
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section section-padding" id="section_4">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="mb-4">Frequently Asked Questions</h2>
              </div>

              <div className="clearfix"></div>

              <div className="col-lg-6 col-12 m-auto">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        How long are sessions?
                      </button>
                    </h2>

                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Sessions typically last 30 minutes. If you&apos;d like,
                        you can book two sessions back-to-back to have an
                        hour-long session. Please do not book more than two
                        sessions in one day.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Which math topics can tutors help with?
                      </button>
                    </h2>

                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Most tutors can cover topics ranging from elementary
                        school math to second-year calculus. Some tutors can
                        cover more advanced topics (check their bios above). We
                        can also help provide fun extra challenge problems.
                        Don&apos;t see a topic you&apos;re interested in? Reach
                        out (see bottom of page) and we&apos;ll do our best to
                        connect you with a tutor or other resources.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Who founded Equal Math, and why?
                      </button>
                    </h2>

                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Equal Math was heavily influenced by Equal Math
                        Opportunities Oakland (EMOO), a similar program run by
                        Allie Ackert. After Allie moved away, Aiden, Phi, and
                        Sachin transformed the program into Equal Math. While
                        we&apos;ve made some changes, our mission is the same:
                        to provide free math help to anyone.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12 mb-4 pb-2">
              <Link className="navbar-brand mb-2" href="/">
                <span>Equal Math</span>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-6">
              <h6 className="site-footer-title mb-3">Resources</h6>

              <ul className="site-footer-links">
                <li className="site-footer-link-item">
                  <Link href="#section_1" className="site-footer-link">
                    Home
                  </Link>
                </li>

                <li className="site-footer-link-item">
                  <Link href="#section_2" className="site-footer-link">
                    How it works
                  </Link>
                </li>

                <li className="site-footer-link-item">
                  <Link href="#section_3" className="site-footer-link">
                    Tutors
                  </Link>
                </li>

                <li className="site-footer-link-item">
                  <Link href="#section_4" className="site-footer-link">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
              <h6 className="site-footer-title mb-3">Contact</h6>

              <p className="text-white d-flex">
                <a
                  href="mailto:contact@equalmath.org"
                  className="site-footer-link"
                >
                  contact@equalmath.org
                </a>
              </p>
            </div>

            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-lg-0 ms-auto">
              <h6 className="site-footer-title mb-3">Site Information</h6>
              <p className="copyright-text">
                Copyright © 2026 Equal Math. All rights reserved.
                <br />
                <br />
                Design:{" "}
                <a rel="nofollow" href="https://templatemo.com" target="_blank">
                  TemplateMo
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
