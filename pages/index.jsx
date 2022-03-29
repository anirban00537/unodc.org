import React, { useEffect } from "react";
import Image from "next/image";
import Form from "../components/form/form";

const New = () => {
  return (
    <div>
      <nav className="fixed-top navbar navbar-expand-lg" id="brand-bar">
        <div className="container">
          <a className="navbar-brand pr-1 pl-2 m-0 ml-n2 d-flex align-items-center">
            <span>Welcome to the United Nations</span>
          </a>
          <button
            aria-label="Toggle Language Switcher"
            ariaExpanded="false"
            aria-controls="#languageSwitchContent"
            data-target="#languageSwitchContent"
            data-toggle="collapse"
            className="language-switch-mini navbar-toggler"
            type="button"
          >
            <i className="fas fa-globe" />
          </button>
          <div
            id="languageSwitchContent"
            className="collapse navbar-collapse flex-grow-0"
          >
            <ul
              data-sm-skip="true"
              className="language-switcher navbar-nav"
              id="languageSwitch"
            >
              <li className="nav-item px-3 py-2 px-lg-2 py-lg-1 unavailable-language">
                عربي
              </li>
              <li className="nav-item px-3 py-2 px-lg-2 py-lg-1 unavailable-language">
                中文
              </li>
              <li className="nav-item px-3 py-2 px-lg-2 py-lg-1 current-language">
                <a>English</a>
              </li>
              <li className="nav-item px-3 py-2 px-lg-2 py-lg-1 unavailable-language">
                Français
              </li>
              <li className="nav-item px-3 py-2 px-lg-2 py-lg-1 unavailable-language">
                Русский
              </li>
              <li className="nav-item px-3 py-2 px-lg-2 py-lg-1 last-item mr-n2 unavailable-language">
                Español
              </li>
            </ul>
          </div>
          <button
            aria-label="Toggle menu"
            ariaExpanded="false"
            aria-controls="websiteNav"
            data-target="#websiteNav"
            data-toggle="collapse"
            type="button"
            className="topnav-switch-mini navbar-toggler"
          >
            <i className="fa fa-bars" />
          </button>
        </div>
      </nav>
      <div id="header-container" className="container">
        <div className="d-flex justify-content-between flex-lg-nowrap flex-wrap py-lg-4 pt-2">
          <div
            id="site-logo-title-container"
            className="py-lg-0 pt-2 pb-3 mr-lg-auto d-flex flex-nowrap"
          >
            <div className=" " id="site-logo">
              <a className="d-block">
                <Image
                  src={"/img/un-emblem.svg"}
                  alt="Money Laundering Cycle"
                  width={150}
                  height={150}
                />
              </a>
            </div>
            <div lang="en" className="px-3 border-right" id="site-title">
              <h1>
                <a>United Nations</a>
              </h1>
            </div>
            <div className="pl-3" id="site-subtitle">
              <h2>
                <a>Office on Drugs and Crime</a>
              </h2>
            </div>
          </div>
          <div
            className="pt-3 py-lg-0 pl-lg-3 align-self-center d-lg-block d-none"
            id="site-search-container"
          >
            <form className="form-inline site-search-form">
              <div className="form-group d-flex flex-nowrap mb-0">
                {/* <label htmlFor="search-site" className="sr-only">
                  Site Search
                </label> */}
                <input
                  name="q"
                  placeholder="Search the site"
                  id="search-site"
                  className="form-control flex-fill border-right-0"
                  type="text"
                />
                <button
                  className="btn btn-default border-left-0 px-3"
                  type="submit"
                >
                  <i className="fas fa-search" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <nav
        id="navigation-menu-container"
        className="container navbar navbar-expand-lg py-1 py-md-0"
      >
        <div className="collapse navbar-collapse" id="websiteNav">
          <ul
            id="topNavMenu"
            className="nav navbar-nav"
            data-smartmenus-id={16484944188177595}
          >
            <li className="L1 nav-item dropdown exp">
              <a
                href="https://www.unodc.org/unodc/en/index.html"
                className="nav-link exp has-submenu"
                id="sm-16484944188177595-1"
                aria-haspopup="true"
                aria-controls="sm-16484944188177595-2"
                aria-expanded="false"
              >
                Topics
                {/* <span className="sub-arrow" /> */}
              </a>
              <ul
                className="M1 dropdown-menu sm-nowrap"
                id="sm-16484944188177595-2"
                role="group"
                aria-hidden="true"
                aria-labelledby="sm-16484944188177595-1"
                aria-expanded="false"
                style={{
                  width: "auto",
                  minWidth: "10em",
                  display: "none",
                  maxWidth: "20em",
                  top: "auto",
                  left: "0px",
                  marginLeft: "0px",
                  marginTop: "0px",
                }}
              >
                <li className="L2 dropdown ">
                  <a
                    href="https://www.unodc.org/unodc/en/alternative-development/index.html?ref=menuside"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-3"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-4"
                    aria-expanded="false"
                  >
                    Alternative development
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-4"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-3"
                    aria-expanded="false"
                  >
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/alternative-development/overview.html"
                        className=" dropdown-item"
                      >
                        Overview
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/alternative-development/making-a-difference.html"
                        className=" dropdown-item"
                      >
                        Making a Difference
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/alternative-development/resources.html"
                        className=" dropdown-item"
                      >
                        Resources
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/alternative-development/contact-us.html?ref=menuside"
                        className=" dropdown-item"
                      >
                        Contact us
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="L2 dropdown ">
                  <a
                    href="https://www.unodc.org/unodc/en/corruption/index.html?ref=menuside"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-5"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-6"
                    aria-expanded="false"
                  >
                    Corruption
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-6"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-5"
                    aria-expanded="false"
                  >
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/corruption/about.html"
                        className=" dropdown-item"
                      >
                        About us
                      </a>
                    </li>
                    <li className="L3 dropdown ">
                      <a
                        href="https://www.unodc.org/unodc/en/corruption/uncac.html"
                        className="dropdown-item has-submenu"
                        id="sm-16484944188177595-7"
                        aria-haspopup="true"
                        aria-controls="sm-16484944188177595-8"
                        aria-expanded="false"
                      >
                        UN Convention against Corruption
                        {/* <span className="sub-arrow" /> */}
                      </a>
                      <ul
                        className="M3 dropdown-menu"
                        id="sm-16484944188177595-8"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-16484944188177595-7"
                        aria-expanded="false"
                      >
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/corruption/ratification-status.html"
                            className=" dropdown-item"
                          >
                            Ratification Status
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/corruption/implementation-review-mechanism.html"
                            className=" dropdown-item"
                          >
                            Implementation Review Mechanism
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/treaties/CAC/country-profile/index.html"
                            className=" dropdown-item"
                          >
                            Country profiles
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="L3 dropdown ">
                      <a
                        href="https://www.unodc.org/unodc/en/corruption/COSP/conference-of-the-states-parties.html"
                        className="dropdown-item has-submenu"
                        id="sm-16484944188177595-9"
                        aria-haspopup="true"
                        aria-controls="sm-16484944188177595-10"
                        aria-expanded="false"
                      >
                        Conference of the States Parties (COSP)
                        {/* <span className="sub-arrow" /> */}
                      </a>
                      <ul
                        className="M3 dropdown-menu"
                        id="sm-16484944188177595-10"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-16484944188177595-9"
                        aria-expanded="false"
                      >
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/corruption/IRG/implementation-review-group.html"
                            className=" dropdown-item"
                          >
                            Implementation Review Group
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/corruption/WG-Prevention/working-group-on-prevention.html"
                            className=" dropdown-item"
                          >
                            Working Group on Prevention
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/corruption/WG-AssetRecovery/working-group-on-asset-recovery.html"
                            className=" dropdown-item"
                          >
                            Working Group on Asset Recovery
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/corruption/EM-InternationalCooperation/expert-meetings-on-international-cooperation.html"
                            className=" dropdown-item"
                          >
                            Expert Meeting on International Cooperation
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="L3 dropdown ">
                      <a
                        href="https://www.unodc.org/unodc/en/corruption/thematic-areas.html"
                        className="dropdown-item has-submenu"
                        id="sm-16484944188177595-11"
                        aria-haspopup="true"
                        aria-controls="sm-16484944188177595-12"
                        aria-expanded="false"
                      >
                        Thematic areas
                        {/* <span className="sub-arrow" /> */}
                      </a>
                      <ul
                        className="M3 dropdown-menu"
                        id="sm-16484944188177595-12"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-16484944188177595-11"
                        aria-expanded="false"
                      >
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/corruption/prevention.html"
                            className=" dropdown-item"
                          >
                            Prevention
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/corruption/international-cooperation.html"
                            className=" dropdown-item"
                          >
                            International cooperation
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/corruption/asset-recovery.html"
                            className=" dropdown-item"
                          >
                            Asset Recovery
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/corruption/education.html"
                            className=" dropdown-item"
                          >
                            Education
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/corruption/criminal-justice-system.html"
                            className=" dropdown-item"
                          >
                            Integrity in the Criminal Justice System
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/corruption/private-sector.html"
                            className=" dropdown-item"
                          >
                            Private sector
                          </a>
                        </li>
                        <li className="L4 dropdown ">
                          <a
                            href="https://www.unodc.org/unodc/en/corruption/corruption-in-specific-areas.html"
                            className="dropdown-item has-submenu"
                            id="sm-16484944188177595-13"
                            aria-haspopup="true"
                            aria-controls="sm-16484944188177595-14"
                            aria-expanded="false"
                          >
                            Corruption in specific areas
                            {/* <span className="sub-arrow" /> */}
                          </a>
                          <ul
                            className="M4 dropdown-menu"
                            id="sm-16484944188177595-14"
                            role="group"
                            aria-hidden="true"
                            aria-labelledby="sm-16484944188177595-13"
                            aria-expanded="false"
                          >
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/corruption/wildlife-and-forest-crime.html"
                                className=" dropdown-item"
                              >
                                Corruption and wildlife and forest crime
                              </a>
                            </li>
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/corruption/human-rights.html"
                                className=" dropdown-item"
                              >
                                Human rights
                              </a>
                            </li>
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/safeguardingsport/index.html"
                                className=" dropdown-item"
                              >
                                Safeguarding Sport
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/corruption/identity-related-crime.html"
                            className=" dropdown-item"
                          >
                            Economic fraud and ID crime
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/corruption/publications.html"
                        className=" dropdown-item"
                      >
                        Technical tools and publications{" "}
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/ft-uncac/index.html"
                        className=" dropdown-item"
                      >
                        Fast-Tracking UNCAC implementation
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="L2 dropdown ">
                  <a
                    href="https://www.unodc.org/unodc/en/justice-and-prison-reform/cpcj-home.html"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-15"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-16"
                    aria-expanded="false"
                  >
                    Crime Prevention and Criminal Justice
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-16"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-15"
                    aria-expanded="false"
                  >
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/justice-and-prison-reform/cpcj-crimeprevention-home.html"
                        className=" dropdown-item"
                      >
                        Crime Prevention
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/justice-and-prison-reform/cpcj-police-reform.html"
                        className=" dropdown-item"
                      >
                        Police Reform
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/justice-and-prison-reform/legal-aid.html"
                        className=" dropdown-item"
                      >
                        Access to Legal Aid
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/justice-and-prison-reform/cpcj-victims.html"
                        className=" dropdown-item"
                      >
                        Victim Support
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/justice-and-prison-reform/cpcj-tools-gender.html"
                        className=" dropdown-item"
                      >
                        Gender in the Criminal Justice System
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/justice-and-prison-reform/cpcj-tools-justice-for-children.html"
                        className=" dropdown-item"
                      >
                        Justice for Children
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/justice-and-prison-reform/cpcj-restorative-justice.html"
                        className=" dropdown-item"
                      >
                        Restorative Justice
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/justice-and-prison-reform/cpcj-alternatives-to-imprisonment.html"
                        className=" dropdown-item"
                      >
                        Alternatives to Imprisonment
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/justice-and-prison-reform/cpcj-prison-reform.html"
                        className=" dropdown-item"
                      >
                        Prison Reform
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="L2 dropdown ">
                  <a
                    href="https://www.unodc.org/unodc/en/cybercrime/index.html"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-17"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-18"
                    aria-expanded="false"
                  >
                    Cybercrime
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-18"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-17"
                    aria-expanded="false"
                  >
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/cybercrime/ad_hoc_committee/home"
                        className=" dropdown-item"
                      >
                        Ad hoc committee to elaborate an international
                        convention on countering the use of ICTs for criminal
                        purposes
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/cybercrime/cybercrime-repository.html"
                        className=" dropdown-item"
                      >
                        Cybercrime repository
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/cybercrime/global-programme-cybercrime.html"
                        className=" dropdown-item"
                      >
                        Global Programme on Cybercrime
                      </a>
                    </li>
                    <li className="L3 dropdown ">
                      <a
                        href="https://www.unodc.org/unodc/en/cybercrime/egm-on-cybercrime.html"
                        className="dropdown-item has-submenu"
                        id="sm-16484944188177595-19"
                        aria-haspopup="true"
                        aria-controls="sm-16484944188177595-20"
                        aria-expanded="false"
                      >
                        IEG on Cybercrime
                        {/* <span className="sub-arrow" /> */}
                      </a>
                      <ul
                        className="M3 dropdown-menu"
                        id="sm-16484944188177595-20"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-16484944188177595-19"
                        aria-expanded="false"
                      >
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/cybercrime/egm-on-cybercrime/bureau_and_extended_bureau.html"
                            className=" dropdown-item"
                          >
                            Bureau and extended Bureau{" "}
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/cybercrime/egm-on-cybercrime/meetings.html"
                            className=" dropdown-item"
                          >
                            Meetings
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="L2 dropdown ">
                  <a
                    href="https://www.unodc.org/unodc/en/drug-prevention-and-treatment/index.html"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-21"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-22"
                    aria-expanded="false"
                  >
                    Drug prevention, treatment and care
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-22"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-21"
                    aria-expanded="false"
                  >
                    <li className="L3 dropdown ">
                      <a
                        href="https://www.unodc.org/unodc/en/prevention/index.html"
                        className="dropdown-item has-submenu"
                        id="sm-16484944188177595-23"
                        aria-haspopup="true"
                        aria-controls="sm-16484944188177595-24"
                        aria-expanded="false"
                      >
                        Prevention
                        {/* <span className="sub-arrow" /> */}
                      </a>
                      <ul
                        className="M3 dropdown-menu"
                        id="sm-16484944188177595-24"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-16484944188177595-23"
                        aria-expanded="false"
                      >
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/prevention/youth-initiative.html"
                            className=" dropdown-item"
                          >
                            Youth Initiative
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/treatment-and-care/index.html"
                        className=" dropdown-item"
                      >
                        Treatment and Care
                      </a>
                    </li>
                    <li className="L3 dropdown ">
                      <a
                        href="https://www.unodc.org/unodc/en/drug-prevention-and-treatment/children/index.html"
                        className="dropdown-item has-submenu"
                        id="sm-16484944188177595-25"
                        aria-haspopup="true"
                        aria-controls="sm-16484944188177595-26"
                        aria-expanded="false"
                      >
                        Children
                        {/* <span className="sub-arrow" /> */}
                      </a>
                      <ul
                        className="M3 dropdown-menu"
                        id="sm-16484944188177595-26"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-16484944188177595-25"
                        aria-expanded="false"
                      >
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/drug-prevention-and-treatment/children/healthcare-personnel.html"
                            className=" dropdown-item"
                          >
                            Healthcare-Personnel
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/drug-prevention-and-treatment/children/policy-makers.html"
                            className=" dropdown-item"
                          >
                            Policy-Makers
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/drug-prevention-and-treatment/children/public.html"
                            className=" dropdown-item"
                          >
                            Public, Individuals, Families
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/drug-prevention-and-treatment/children/unodc-role.html"
                            className=" dropdown-item"
                          >
                            UNODC Role &amp; Work
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/drug-prevention-and-treatment/children/publications.html"
                            className=" dropdown-item"
                          >
                            Publications
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/drug-prevention-and-treatment/access-to-controlled-medicines/accessibility-medicines-availability-glok67.html"
                        className=" dropdown-item"
                      >
                        Access to controlled medicines
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/drug-prevention-and-treatment/publications.html"
                        className=" dropdown-item"
                      >
                        Publications
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/treatment-and-care/contact-us.html"
                        className=" dropdown-item"
                      >
                        Contact us
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="L2 dropdown ">
                  <a
                    href="https://www.unodc.org/unodc/en/data-and-analysis/drug-production-and-trafficking.html"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-27"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-28"
                    aria-expanded="false"
                  >
                    Drug trafficking
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-28"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-27"
                    aria-expanded="false"
                  >
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/drug-trafficking/central-asia.html"
                        className=" dropdown-item"
                      >
                        Central Asia
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/drug-trafficking/container-control-programme.html"
                        className=" dropdown-item"
                      >
                        Container Control Programme
                      </a>
                    </li>
                    <li className="L3 dropdown ">
                      <a
                        href="https://www.unodc.org/unodc/en/drug-trafficking/crimjust/index.html"
                        className="dropdown-item has-submenu"
                        id="sm-16484944188177595-29"
                        aria-haspopup="true"
                        aria-controls="sm-16484944188177595-30"
                        aria-expanded="false"
                      >
                        CRIMJUST
                        {/* <span className="sub-arrow" /> */}
                      </a>
                      <ul
                        className="M3 dropdown-menu"
                        id="sm-16484944188177595-30"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-16484944188177595-29"
                        aria-expanded="false"
                      >
                        <li className="L4 dropdown ">
                          <a
                            href="https://www.unodc.org/unodc/en/drug-trafficking/crimjust/project_details.html"
                            className="dropdown-item has-submenu"
                            id="sm-16484944188177595-31"
                            aria-haspopup="true"
                            aria-controls="sm-16484944188177595-32"
                            aria-expanded="false"
                          >
                            Project details
                            {/* <span className="sub-arrow" /> */}
                          </a>
                          <ul
                            className="M4 dropdown-menu"
                            id="sm-16484944188177595-32"
                            role="group"
                            aria-hidden="true"
                            aria-labelledby="sm-16484944188177595-31"
                            aria-expanded="false"
                          >
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/drug-trafficking/crimjust/mandates.html"
                                className=" dropdown-item"
                              >
                                Mandates
                              </a>
                            </li>
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/drug-trafficking/crimjust/countries.html"
                                className=" dropdown-item"
                              >
                                Countries
                              </a>
                            </li>
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/drug-trafficking/crimjust/objectives.html"
                                className=" dropdown-item"
                              >
                                Objectives
                              </a>
                            </li>
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/drug-trafficking/crimjust/contact-us.html"
                                className=" dropdown-item"
                              >
                                Contact us
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/drug-trafficking/crimjust/news-and-events.html"
                            className=" dropdown-item"
                          >
                            News and events
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/drug-trafficking/crimjust/partners.html"
                            className=" dropdown-item"
                          >
                            Partners
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/drug-trafficking/crimjust/tools-and-publications.html"
                            className=" dropdown-item"
                          >
                            Tools and publications
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/drug-trafficking/crimjust/contact-us.html"
                            className=" dropdown-item"
                          >
                            Contact us
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/drug-trafficking/legal-framework.html"
                        className=" dropdown-item"
                      >
                        Legal Framework
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.paris-pact.net/"
                        className=" dropdown-item"
                      >
                        Paris Pact Initiative
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="L2 dropdown ">
                  <a
                    href="https://www.unodc.org/unodc/en/firearms-protocol/index.html"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-33"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-34"
                    aria-expanded="false"
                  >
                    Firearms
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-34"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-33"
                    aria-expanded="false"
                  >
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/firearms-protocol/firearms-study.html"
                        className=" dropdown-item"
                      >
                        UNODC Study on Firearms
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/firearms-protocol/international-legal-framework.html"
                        className=" dropdown-item"
                      >
                        International legal framework
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/firearms-protocol/the-firearms-protocol.html"
                        className=" dropdown-item"
                      >
                        The Firearms Protocol
                      </a>
                    </li>
                    <li className="L3 dropdown ">
                      <a
                        href="https://www.unodc.org/unodc/en/firearms-protocol/project-details.html"
                        className="dropdown-item has-submenu"
                        id="sm-16484944188177595-35"
                        aria-haspopup="true"
                        aria-controls="sm-16484944188177595-36"
                        aria-expanded="false"
                      >
                        Project details
                        {/* <span className="sub-arrow" /> */}
                      </a>
                      <ul
                        className="M3 dropdown-menu"
                        id="sm-16484944188177595-36"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-16484944188177595-35"
                        aria-expanded="false"
                      >
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/firearms-protocol/legislative-and-policy-development.html"
                            className=" dropdown-item"
                          >
                            Legislative and policy development
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/firearms-protocol/preventive-and-security-measures.html"
                            className=" dropdown-item"
                          >
                            Preventive and security measures
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/firearms-protocol/criminal-justice-response.html"
                            className=" dropdown-item"
                          >
                            {" "}
                            Criminal justice response{" "}
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/firearms-protocol/international-cooperation-and-information-exchange.html"
                            className=" dropdown-item"
                          >
                            International cooperation and information exchange
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/firearms-protocol/monitoring-illicit-arms-flows-initiative.html"
                            className=" dropdown-item"
                          >
                            The Monitoring Illicit Arms Flows Initiative
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/firearms-protocol/cross-cutting-issues.html"
                            className=" dropdown-item"
                          >
                            {" "}
                            Cross cutting issues
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/firearms-protocol/news-and-events.html"
                        className=" dropdown-item"
                      >
                        News and Events
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/firearms-protocol/publications.html"
                        className=" dropdown-item"
                      >
                        Publications
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/firearms-protocol/contact-us.html"
                        className=" dropdown-item"
                      >
                        Contact us
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/fraudulentmedicines/introduction.html"
                    className=" dropdown-item"
                  >
                    Falsified medical products
                  </a>
                </li>
                <li className="L2 dropdown ">
                  <a
                    href="https://www.unodc.org/unodc/en/hiv-aids/new/index.html"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-37"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-38"
                    aria-expanded="false"
                  >
                    HIV and AIDS
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-38"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-37"
                    aria-expanded="false"
                  >
                    <li className="L3 dropdown ">
                      <a
                        href="https://www.unodc.org/unodc/en/hiv-aids/new/about_us.html"
                        className="dropdown-item has-submenu"
                        id="sm-16484944188177595-39"
                        aria-haspopup="true"
                        aria-controls="sm-16484944188177595-40"
                        aria-expanded="false"
                      >
                        About us
                        {/* <span className="sub-arrow" /> */}
                      </a>
                      <ul
                        className="M3 dropdown-menu"
                        id="sm-16484944188177595-40"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-16484944188177595-39"
                        aria-expanded="false"
                      >
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/hiv-aids/new/addressing_HIV_and_AIDS.html"
                            className=" dropdown-item"
                          >
                            Addressing HIV and AIDS
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/hiv-aids/new/our-mandate.html"
                            className=" dropdown-item"
                          >
                            Our Mandate
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/hiv-aids/new/where-we-work.html"
                            className=" dropdown-item"
                          >
                            Where We Work
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/hiv-aids/new/contact-us.html"
                            className=" dropdown-item"
                          >
                            Contact UNODC HIV
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="L3 dropdown ">
                      <a
                        href="https://www.unodc.org/unodc/en/hiv-aids/new/Our_HIV_work.html"
                        className="dropdown-item has-submenu"
                        id="sm-16484944188177595-41"
                        aria-haspopup="true"
                        aria-controls="sm-16484944188177595-42"
                        aria-expanded="false"
                      >
                        Our HIV Work
                        {/* <span className="sub-arrow" /> */}
                      </a>
                      <ul
                        className="M3 dropdown-menu"
                        id="sm-16484944188177595-42"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-16484944188177595-41"
                        aria-expanded="false"
                      >
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/hiv-aids/new/drug-use_and_HIV.html"
                            className=" dropdown-item"
                          >
                            Drug use and HIV
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/hiv-aids/new/prison_settings_HIV.html"
                            className=" dropdown-item"
                          >
                            Prisons and HIV
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/hiv-aids/new/Sustainable_development.html"
                            className=" dropdown-item"
                          >
                            Sustainable Development Goals
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/hiv-aids/new/Critical_enablers.html"
                            className=" dropdown-item"
                          >
                            Critical Enablers
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/hiv-aids/new/events.html"
                        className=" dropdown-item"
                      >
                        News and Events
                      </a>
                    </li>
                    <li className="L3 dropdown ">
                      <a
                        href="https://www.unodc.org/unodc/en/hiv-aids/new/publications.html"
                        className="dropdown-item has-submenu"
                        id="sm-16484944188177595-43"
                        aria-haspopup="true"
                        aria-controls="sm-16484944188177595-44"
                        aria-expanded="false"
                      >
                        Publications
                        {/* <span className="sub-arrow" /> */}
                      </a>
                      <ul
                        className="M3 dropdown-menu"
                        id="sm-16484944188177595-44"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-16484944188177595-43"
                        aria-expanded="false"
                      >
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/hiv-aids/new/publications_drugs.html"
                            className=" dropdown-item"
                          >
                            Drug use and HIV
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/hiv-aids/new/publications_prisons.html"
                            className=" dropdown-item"
                          >
                            Prisons and HIV
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/hiv-aids/new/publications_other.html"
                            className=" dropdown-item"
                          >
                            Other Publications
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/human-trafficking/index.html"
                    className=" dropdown-item"
                  >
                    Human trafficking and migrant smuggling
                  </a>
                </li>
                <li className="L2 dropdown ">
                  <a
                    href="https://www.unodc.org/unodc/en/piracy/index.html"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-45"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-46"
                    aria-expanded="false"
                  >
                    Maritime crime and piracy
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-46"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-45"
                    aria-expanded="false"
                  >
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/piracy/indian-ocean-east.html"
                        className=" dropdown-item"
                      >
                        Indian Ocean East
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/piracy/Indian-Ocean.html"
                        className=" dropdown-item"
                      >
                        Indian Ocean West
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/piracy/GARS.html"
                        className=" dropdown-item"
                      >
                        Gulf of Aden and the Red Sea
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/piracy/atlantic-ocean.html"
                        className=" dropdown-item"
                      >
                        Atlantic Ocean
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/piracy/pacific-ocean.html"
                        className=" dropdown-item"
                      >
                        Pacific Ocean
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/piracy/latin-america-and-the-caribbean.html"
                        className=" dropdown-item"
                      >
                        Latin America and the Caribbean
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/piracy/manual-and-annexes.html"
                        className=" dropdown-item"
                      >
                        Manual for criminal justice practitioners and its
                        annexes
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="L2 dropdown  exp">
                  <a
                    href="https://www.unodc.org/unodc/en/money-laundering/index.html?ref=menuside"
                    className="dropdown-item exp has-submenu"
                    id="sm-16484944188177595-47"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-48"
                    aria-expanded="false"
                  >
                    Money-laundering
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-48"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-47"
                    aria-expanded="false"
                  >
                    <li className="L3 active">
                      <a
                        href="https://www.unodc.org/unodc/en/money-laundering/overview.html"
                        className=" active dropdown-item"
                      >
                        Overview
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/money-laundering/global-programme-against-money-laundering/.html"
                        className=" dropdown-item"
                      >
                        Global Programme against Money Laundering
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/money-laundering/global-programme-against-money-laundering/activities.html"
                        className=" dropdown-item"
                      >
                        Activities
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/money-laundering/global-programme-against-money-laundering/training-and-tools.html"
                        className=" dropdown-item"
                      >
                        Training and Tools
                      </a>
                    </li>
                    <li className="L3 dropdown ">
                      <a
                        href="https://www.unodc.org/unodc/en/money-laundering/global-programme-against-money-laundering/resources.html"
                        className="dropdown-item has-submenu"
                        id="sm-16484944188177595-49"
                        aria-haspopup="true"
                        aria-controls="sm-16484944188177595-50"
                        aria-expanded="false"
                      >
                        Resources
                        {/* <span className="sub-arrow" /> */}
                      </a>
                      <ul
                        className="M3 dropdown-menu"
                        id="sm-16484944188177595-50"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-16484944188177595-49"
                        aria-expanded="false"
                      >
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/money-laundering/global-programme-against-money-laundering/highlights.html"
                            className=" dropdown-item"
                          >
                            Highlights
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/money-laundering/global-programme-against-money-laundering/publications.html"
                            className=" dropdown-item"
                          >
                            Publications
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/money-laundering/global-programme-against-money-laundering/contact-us.html"
                        className=" dropdown-item"
                      >
                        Contact us
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="L2 dropdown ">
                  <a
                    href="https://www.unodc.org/unodc/en/organized-crime/intro.html"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-51"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-52"
                    aria-expanded="false"
                  >
                    Organized crime
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-52"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-51"
                    aria-expanded="false"
                  >
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/organized-crime/intro/UNTOC.html"
                        className=" dropdown-item"
                      >
                        United Nations Convention against Transnational
                        Organized Crime
                      </a>
                    </li>
                    <li className="L3 dropdown ">
                      <a
                        href="https://www.unodc.org/unodc/en/organized-crime/intro/conference-of-the-parties.html"
                        className="dropdown-item has-submenu"
                        id="sm-16484944188177595-53"
                        aria-haspopup="true"
                        aria-controls="sm-16484944188177595-54"
                        aria-expanded="false"
                      >
                        Conference of the Parties to Organized Crime Convention
                        {/* <span className="sub-arrow" /> */}
                      </a>
                      <ul
                        className="M3 dropdown-menu"
                        id="sm-16484944188177595-54"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-16484944188177595-53"
                        aria-expanded="false"
                      >
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/organized-crime/intro/review-mechanism-untoc/home.html"
                            className=" dropdown-item"
                          >
                            UNTOC Review Mechanism
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/organized-crime/technical-assistance.html"
                        className=" dropdown-item"
                      >
                        Technical Assistance
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/organized-crime/GPTOC/international-cooperation-networks.html"
                        className=" dropdown-item"
                      >
                        International Cooperation
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/organized-crime/intro/emerging-crimes.html"
                        className=" dropdown-item"
                      >
                        Emerging Crimes
                      </a>
                    </li>
                    <li className="L3 dropdown ">
                      <a
                        href="https://www.unodc.org/unodc/en/ccp/index.html"
                        className="dropdown-item has-submenu"
                        id="sm-16484944188177595-55"
                        aria-haspopup="true"
                        aria-controls="sm-16484944188177595-56"
                        aria-expanded="false"
                      >
                        Container Control Programme
                        {/* <span className="sub-arrow" /> */}
                      </a>
                      <ul
                        className="M3 dropdown-menu"
                        id="sm-16484944188177595-56"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-16484944188177595-55"
                        aria-expanded="false"
                      >
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/ccp/Overview.html"
                            className=" dropdown-item"
                          >
                            Overview
                          </a>
                        </li>
                        <li className="L4 dropdown ">
                          <a
                            href="https://www.unodc.org/unodc/en/ccp/ccp-programme-details.html"
                            className="dropdown-item has-submenu"
                            id="sm-16484944188177595-57"
                            aria-haspopup="true"
                            aria-controls="sm-16484944188177595-58"
                            aria-expanded="false"
                          >
                            Programme details
                            {/* <span className="sub-arrow" /> */}
                          </a>
                          <ul
                            className="M4 dropdown-menu"
                            id="sm-16484944188177595-58"
                            role="group"
                            aria-hidden="true"
                            aria-labelledby="sm-16484944188177595-57"
                            aria-expanded="false"
                          >
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/ccp/ccp-key-activities.html"
                                className=" dropdown-item"
                              >
                                - Key activities
                              </a>
                            </li>
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/ccp/ccp-donors-and-partners.html"
                                className=" dropdown-item"
                              >
                                - Donors and partners
                              </a>
                            </li>
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/ccp/ccp-latest-reports.html"
                                className=" dropdown-item"
                              >
                                - Latest reports
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/ccp/the-ccp-womens-network.html"
                            className=" dropdown-item"
                          >
                            The CCP Womens Network
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/ccp/un-instruments.html"
                            className=" dropdown-item"
                          >
                            UN instruments
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/organized-crime/AIRCOP/1-aircop-home.html"
                        className=" dropdown-item"
                      >
                        AIRCOP
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/organized-crime/tools-and-publications.html"
                        className=" dropdown-item"
                      >
                        Tools &amp; Publications
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/organized-crime/intro/contact-us.html"
                        className=" dropdown-item"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li className="L3">
                      <a href="/toc/en/index.html" className=" dropdown-item">
                        Public Service Announcement
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/organized-crime/news/newsandevents.html"
                        className=" dropdown-item"
                      >
                        News and Events
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="L2 dropdown ">
                  <a
                    href="https://www.unodc.org/unodc/en/terrorism/index.html"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-59"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-60"
                    aria-expanded="false"
                  >
                    Terrorism prevention
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-60"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-59"
                    aria-expanded="false"
                  >
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/terrorism/expertise/expertise.html"
                        className=" dropdown-item"
                      >
                        Expertise
                      </a>
                    </li>
                    <li className="L3 dropdown ">
                      <a
                        href="https://www.unodc.org/unodc/en/terrorism/projects/projects.html"
                        className="dropdown-item has-submenu"
                        id="sm-16484944188177595-61"
                        aria-haspopup="true"
                        aria-controls="sm-16484944188177595-62"
                        aria-expanded="false"
                      >
                        Projects
                        {/* <span className="sub-arrow" /> */}
                      </a>
                      <ul
                        className="M3 dropdown-menu"
                        id="sm-16484944188177595-62"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-16484944188177595-61"
                        aria-expanded="false"
                      >
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/terrorism/projects/global-projects.html"
                            className=" dropdown-item"
                          >
                            Global
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/terrorism/projects/cross-regional.html"
                            className=" dropdown-item"
                          >
                            Cross-Regional
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/terrorism/projects/africa.html"
                            className=" dropdown-item"
                          >
                            Africa
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/terrorism/projects/asia.html"
                            className=" dropdown-item"
                          >
                            Asia
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/terrorism/projects/middle-east.html"
                            className=" dropdown-item"
                          >
                            Middle East
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/terrorism/around-the-world.html"
                        className=" dropdown-item"
                      >
                        Around the World
                      </a>
                    </li>
                    <li className="L3 dropdown ">
                      <a
                        href="https://www.unodc.org/unodc/en/terrorism/resources/resources.html"
                        className="dropdown-item has-submenu"
                        id="sm-16484944188177595-63"
                        aria-haspopup="true"
                        aria-controls="sm-16484944188177595-64"
                        aria-expanded="false"
                      >
                        Resources
                        {/* <span className="sub-arrow" /> */}
                      </a>
                      <ul
                        className="M3 dropdown-menu"
                        id="sm-16484944188177595-64"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-16484944188177595-63"
                        aria-expanded="false"
                      >
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/terrorism/resources/legislation.html"
                            className=" dropdown-item"
                          >
                            Legislation
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/terrorism/resources/capacity-building.html"
                            className=" dropdown-item"
                          >
                            Capacity-Building
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/terrorism/resources/policy-and-strategy.html"
                            className=" dropdown-item"
                          >
                            Policy and Strategy
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/terrorism/resources/un-resolutions-and-reports.html"
                            className=" dropdown-item"
                          >
                            UN resolutions and reports
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/terrorism/partners.html"
                        className=" dropdown-item"
                      >
                        Partners
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/terrorism/aboutus.html"
                        className=" dropdown-item"
                      >
                        About Us
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="L2 dropdown ">
                  <a
                    href="https://www.unodc.org/unodc/en/wildlife-and-forest-crime/index.html"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-65"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-66"
                    aria-expanded="false"
                  >
                    Wildlife and forest crime
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-66"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-65"
                    aria-expanded="false"
                  >
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/wildlife-and-forest-crime/overview.html"
                        className=" dropdown-item"
                      >
                        Overview
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/wildlife-and-forest-crime/global-programme.html"
                        className=" dropdown-item"
                      >
                        Global Programme for Combating Wildlife and Forest Crime
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/wildlife-and-forest-crime/iccwc.html"
                        className=" dropdown-item"
                      >
                        International Consortium on Combating Wildlife Crime
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/wildlife-and-forest-crime/resources.html"
                        className=" dropdown-item"
                      >
                        Resources
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/wildlife-and-forest-crime/contact-us.html"
                        className=" dropdown-item"
                      >
                        Contact us
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <span
                className="scroll-up"
                style={{
                  top: "auto",
                  left: "0px",
                  marginLeft: "1px",
                  width: "307.906px",
                  zIndex: 1001,
                  backgroundColor: "rgb(255, 255, 255)",
                  display: "none",
                }}
              >
                <span className="scroll-up-arrow" />
              </span>
              <span
                className="scroll-down"
                style={{
                  display: "none",
                  top: "auto",
                  left: "0px",
                  marginLeft: "1px",
                  width: "307.906px",
                  zIndex: 1001,
                  backgroundColor: "rgb(255, 255, 255)",
                }}
              >
                <span className="scroll-down-arrow" />
              </span>
            </li>
            <li className="L1 nav-item dropdown">
              <a
                href="https://www.unodc.org/unodc/en/index.html"
                className="nav-link has-submenu"
                id="sm-16484944188177595-67"
                aria-haspopup="true"
                aria-controls="sm-16484944188177595-68"
                aria-expanded="false"
              >
                What we do
                {/* <span className="sub-arrow" /> */}
              </a>
              <ul
                className="M1 dropdown-menu sm-nowrap"
                id="sm-16484944188177595-68"
                role="group"
                aria-hidden="true"
                aria-labelledby="sm-16484944188177595-67"
                aria-expanded="false"
                style={{
                  width: "auto",
                  minWidth: "10em",
                  display: "none",
                  maxWidth: "20em",
                  top: "auto",
                  left: "0px",
                  marginLeft: "0px",
                  marginTop: "0px",
                }}
              >
                <li className="L2 dropdown ">
                  <a
                    href="https://www.unodc.org/unodc/en/about-unodc/campaigns.html?ref=menuside"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-69"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-70"
                    aria-expanded="false"
                  >
                    Campaigns
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-70"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-69"
                    aria-expanded="false"
                  >
                    <li className="L3 dropdown ">
                      <a
                        href="http://www.unodc.org/drugs?ref=menuside"
                        className="dropdown-item has-submenu"
                        id="sm-16484944188177595-71"
                        aria-haspopup="true"
                        aria-controls="sm-16484944188177595-72"
                        aria-expanded="false"
                      >
                        World Drug Day
                        {/* <span className="sub-arrow" /> */}
                      </a>
                      <ul
                        className="M3 dropdown-menu"
                        id="sm-16484944188177595-72"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-16484944188177595-71"
                        aria-expanded="false"
                      >
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/drugs/get-social.html"
                            className=" dropdown-item"
                          >
                            Get social
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/drugs/background.html"
                            className=" dropdown-item"
                          >
                            Background
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/drugs/unodc-at-work.html"
                            className=" dropdown-item"
                          >
                            UNODC at Work{" "}
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/drugs/multimedia.html"
                            className=" dropdown-item"
                          >
                            Multimedia
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/drugs/unodc-executive-directors-message.html"
                            className=" dropdown-item"
                          >
                            ED´s Message
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="L3">
                      <a
                        href="http://www.anticorruptionday.org/"
                        className=" dropdown-item"
                      >
                        International Anti-Corruption Day
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="http://www.unodc.org/blueheart/?ref=menuside"
                        className=" dropdown-item"
                      >
                        Blue Heart Campaign against human trafficking
                      </a>
                    </li>
                    <li className="L3">
                      <a href="/endht/en/index.html" className=" dropdown-item">
                        World Day against Trafficking in Persons
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/about-unodc/campaigns/culturalproperty.html"
                        className=" dropdown-item"
                      >
                        Cultural Property
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/untoc20/index.html"
                        className=" dropdown-item"
                      >
                        20th anniversary of the UN Convention against
                        Transnational Organized Crime (UNTOC20)
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="L2 dropdown ">
                  <a
                    href="https://www.unodc.org/unodc/en/commissions/index.html"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-73"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-74"
                    aria-expanded="false"
                  >
                    Commissions
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-74"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-73"
                    aria-expanded="false"
                  >
                    <li className="L3 dropdown ">
                      <a
                        href="https://www.unodc.org/unodc/en/commissions/CND/index.html"
                        className="dropdown-item has-submenu"
                        id="sm-16484944188177595-75"
                        aria-haspopup="true"
                        aria-controls="sm-16484944188177595-76"
                        aria-expanded="false"
                      >
                        Commission on Narcotic Drugs
                        {/* <span className="sub-arrow" /> */}
                      </a>
                      <ul
                        className="M3 dropdown-menu"
                        id="sm-16484944188177595-76"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-16484944188177595-75"
                        aria-expanded="false"
                      >
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/commissions/CND/Mandate_Functions/Mandate-and-Functions_Scheduling.html"
                            className=" dropdown-item"
                          >
                            Drug Conventions
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/commissions/CND/CND_Meetings-Current-Year.html"
                            className=" dropdown-item"
                          >
                            Events
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/commissions/CND/Mandate_Functions/Mandate-and-Functions_index.html"
                            className=" dropdown-item"
                          >
                            Mandate
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/commissions/CND/Membership/Membership.html"
                            className=" dropdown-item"
                          >
                            Membership &amp; Bureau
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/commissions/CND/Mandate_Functions/policy-on-drugs.html"
                            className=" dropdown-item"
                          >
                            Policy on Drugs
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/commissions/Secretariat/Secretariat_Publications.html"
                            className=" dropdown-item"
                          >
                            Publications
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/commissions/CND/Resolutions_Decisions/resolutions-and-decisions-2020-2029.html"
                            className=" dropdown-item"
                          >
                            Resolutions
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/commissions/CND/session/cnd-documents-index.html"
                            className=" dropdown-item"
                          >
                            Sessions
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/commissions/CND/Subsidiary_Bodies/Subsidiary-Bodies_Index.html"
                            className=" dropdown-item"
                          >
                            Subsidiary Bodies
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="L3 dropdown ">
                      <a
                        href="https://www.unodc.org/unodc/en/commissions/CCPCJ/index.html"
                        className="dropdown-item has-submenu"
                        id="sm-16484944188177595-77"
                        aria-haspopup="true"
                        aria-controls="sm-16484944188177595-78"
                        aria-expanded="false"
                      >
                        Commission on Crime Prevention and Criminal Justice
                        {/* <span className="sub-arrow" /> */}
                      </a>
                      <ul
                        className="M3 dropdown-menu"
                        id="sm-16484944188177595-78"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-16484944188177595-77"
                        aria-expanded="false"
                      >
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/commissions/CCPCJ/CCPCJ_Meetings-Current-Year.html"
                            className=" dropdown-item"
                          >
                            Events
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/commissions/CCPCJ/CCPCJ_Mandate-Functions.html"
                            className=" dropdown-item"
                          >
                            Mandate
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/commissions/CCPCJ/CCPCJ_Membership.html"
                            className=" dropdown-item"
                          >
                            Membership &amp; Bureau
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/commissions/CCPCJ/crime-policy.html"
                            className=" dropdown-item"
                          >
                            Policy on Crime
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/commissions/CCPCJ/PNI/institutes.html"
                            className=" dropdown-item"
                          >
                            Programme Network Institutes
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/commissions/CCPCJ/Resolutions_Decisions/resolutions_2020-2029.html"
                            className=" dropdown-item"
                          >
                            Resolutions{" "}
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/commissions/CCPCJ/session/index2.html"
                            className=" dropdown-item"
                          >
                            Sessions
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="L3 dropdown ">
                      <a
                        href="https://www.unodc.org/unodc/en/commissions/Secretariat/vienna-based-commissions.html"
                        className="dropdown-item has-submenu"
                        id="sm-16484944188177595-79"
                        aria-haspopup="true"
                        aria-controls="sm-16484944188177595-80"
                        aria-expanded="false"
                      >
                        Vienna-based Commissions
                        {/* <span className="sub-arrow" /> */}
                      </a>
                      <ul
                        className="M3 dropdown-menu"
                        id="sm-16484944188177595-80"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-16484944188177595-79"
                        aria-expanded="false"
                      >
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/commissions/SDG/commissions-2030.html"
                            className=" dropdown-item"
                          >
                            2030 Agenda
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/commissions/General_Assembly/GA_Index.html"
                            className=" dropdown-item"
                          >
                            General Assembly and ECOSOC
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/commissions/Secretariat/organizational-information.html"
                            className=" dropdown-item"
                          >
                            Organizational information
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/commissions/FINGOV/FINGOV-index.html"
                        className=" dropdown-item"
                      >
                        FINGOV
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/commissions/Secretariat/Secretariat_Index.html"
                        className=" dropdown-item"
                      >
                        Secretariat to the Governing Bodies
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="L2">
                  <a
                    href="http://www.unodc.org/congress/"
                    className=" dropdown-item"
                  >
                    Crime Congress
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://dataunodc.un.org/"
                    className=" dropdown-item"
                  >
                    dataUNODC
                  </a>
                </li>
                <li className="L2">
                  <a href="/elearning/frontpage.jsp" className=" dropdown-item">
                    eLearning
                  </a>
                </li>
                <li className="L2 dropdown ">
                  <a
                    href="https://www.unodc.org/unodc/en/evaluation/index.html"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-81"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-82"
                    aria-expanded="false"
                  >
                    Evaluation
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-82"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-81"
                    aria-expanded="false"
                  >
                    <li className="L3 dropdown ">
                      <a
                        href="https://www.unodc.org/unodc/en/evaluation/reports.html"
                        className="dropdown-item has-submenu"
                        id="sm-16484944188177595-83"
                        aria-haspopup="true"
                        aria-controls="sm-16484944188177595-84"
                        aria-expanded="false"
                      >
                        Evaluation Reports
                        {/* <span className="sub-arrow" /> */}
                      </a>
                      <ul
                        className="M3 dropdown-menu"
                        id="sm-16484944188177595-84"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-16484944188177595-83"
                        aria-expanded="false"
                      >
                        <li className="L4 dropdown ">
                          <a
                            href="https://www.unodc.org/unodc/en/evaluation/reports-by-topic.html"
                            className="dropdown-item has-submenu"
                            id="sm-16484944188177595-85"
                            aria-haspopup="true"
                            aria-controls="sm-16484944188177595-86"
                            aria-expanded="false"
                          >
                            By topic
                            {/* <span className="sub-arrow" /> */}
                          </a>
                          <ul
                            className="M4 dropdown-menu"
                            id="sm-16484944188177595-86"
                            role="group"
                            aria-hidden="true"
                            aria-labelledby="sm-16484944188177595-85"
                            aria-expanded="false"
                          >
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/evaluation/reports_topic_countering-TOC-illicit-trafficking.html"
                                className=" dropdown-item"
                              >
                                Countering transnational organized crime and
                                illicit trafficking/drug trafficking
                              </a>
                            </li>
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/evaluation/reports_topic_prevention-treatment-reintegration-alternative-development.html"
                                className=" dropdown-item"
                              >
                                Prevention, treatment and reintegration, and
                                alternative development
                              </a>
                            </li>
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/evaluation/reports_topic_countering-corruption.html"
                                className=" dropdown-item"
                              >
                                Countering corruption
                              </a>
                            </li>
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/evaluation/reports_topic_terrorism-prevention.html"
                                className=" dropdown-item"
                              >
                                Terrorism prevention
                              </a>
                            </li>
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/evaluation/reports_topic_justice.html"
                                className=" dropdown-item"
                              >
                                Justice
                              </a>
                            </li>
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/evaluation/reports_topic_research-trend-analysis-forensic.html"
                                className=" dropdown-item"
                              >
                                Research and trend analysis and forensic
                              </a>
                            </li>
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/evaluation/reports_topic_policy-support.html"
                                className=" dropdown-item"
                              >
                                Policy support
                              </a>
                            </li>
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/evaluation/reports_topic_country-regional-programmes.html"
                                className=" dropdown-item"
                              >
                                Country/Regional Programmes
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="L4 dropdown ">
                          <a
                            href="https://www.unodc.org/unodc/en/evaluation/reports-by-year.html"
                            className="dropdown-item has-submenu"
                            id="sm-16484944188177595-87"
                            aria-haspopup="true"
                            aria-controls="sm-16484944188177595-88"
                            aria-expanded="false"
                          >
                            By year
                            {/* <span className="sub-arrow" /> */}
                          </a>
                          <ul
                            className="M4 dropdown-menu"
                            id="sm-16484944188177595-88"
                            role="group"
                            aria-hidden="true"
                            aria-labelledby="sm-16484944188177595-87"
                            aria-expanded="false"
                          >
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/evaluation/reports_year_2022.html"
                                className=" dropdown-item"
                              >
                                2022
                              </a>
                            </li>
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/evaluation/reports_year_2021.html"
                                className=" dropdown-item"
                              >
                                2021
                              </a>
                            </li>
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/evaluation/reports_year_2020.html"
                                className=" dropdown-item"
                              >
                                2020
                              </a>
                            </li>
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/evaluation/reports_year_2019.html"
                                className=" dropdown-item"
                              >
                                2019
                              </a>
                            </li>
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/evaluation/reports_year_2018.html"
                                className=" dropdown-item"
                              >
                                2018
                              </a>
                            </li>
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/evaluation/reports_year_archive.html"
                                className=" dropdown-item"
                              >
                                Archive
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="L4 dropdown ">
                          <a
                            href="https://www.unodc.org/unodc/en/evaluation/reports-by-region.html"
                            className="dropdown-item has-submenu"
                            id="sm-16484944188177595-89"
                            aria-haspopup="true"
                            aria-controls="sm-16484944188177595-90"
                            aria-expanded="false"
                          >
                            By region
                            {/* <span className="sub-arrow" /> */}
                          </a>
                          <ul
                            className="M4 dropdown-menu"
                            id="sm-16484944188177595-90"
                            role="group"
                            aria-hidden="true"
                            aria-labelledby="sm-16484944188177595-89"
                            aria-expanded="false"
                          >
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/evaluation/reports_region_africa-and-middle-east.html"
                                className=" dropdown-item"
                              >
                                Africa and Middle East
                              </a>
                            </li>
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/evaluation/reports_region_europe-west-central-asia.html"
                                className=" dropdown-item"
                              >
                                Europe and West/Central Asia
                              </a>
                            </li>
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/evaluation/reports_region_latin-america-caribbean.html"
                                className=" dropdown-item"
                              >
                                Latin America and the Caribbean
                              </a>
                            </li>
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/evaluation/reports_region_south-asia.html"
                                className=" dropdown-item"
                              >
                                South Asia
                              </a>
                            </li>
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/evaluation/reports_region_southeast-asia-pacific.html"
                                className=" dropdown-item"
                              >
                                Southeast Asia and the Pacific
                              </a>
                            </li>
                            <li className="L5">
                              <a
                                href="https://www.unodc.org/unodc/en/evaluation/reports_region_global.html"
                                className=" dropdown-item"
                              >
                                Global
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="L3 dropdown ">
                      <a
                        href="https://www.unodc.org/unodc/en/evaluation/guidelines-and-templates.html"
                        className="dropdown-item has-submenu"
                        id="sm-16484944188177595-91"
                        aria-haspopup="true"
                        aria-controls="sm-16484944188177595-92"
                        aria-expanded="false"
                      >
                        Tools and Guidance
                        {/* <span className="sub-arrow" /> */}
                      </a>
                      <ul
                        className="M3 dropdown-menu"
                        id="sm-16484944188177595-92"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-16484944188177595-91"
                        aria-expanded="false"
                      >
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/evaluation/normative-tools.html"
                            className=" dropdown-item"
                          >
                            Norms, tools, templates, guidelines, etc.
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/evaluation/unite-evaluations.html"
                            className=" dropdown-item"
                          >
                            Unite Evaluations
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/evaluation/evaluation-step-by-step.html"
                            className=" dropdown-item"
                          >
                            Evaluation Step by Step
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/evaluation/Evaluation-based-knowledge-products.html"
                        className=" dropdown-item"
                      >
                        Evaluation-based knowledge products
                      </a>
                    </li>
                    <li className="L3 dropdown ">
                      <a
                        href="https://www.unodc.org/unodc/en/evaluation/nec-and-sdgs.html"
                        className="dropdown-item has-submenu"
                        id="sm-16484944188177595-93"
                        aria-haspopup="true"
                        aria-controls="sm-16484944188177595-94"
                        aria-expanded="false"
                      >
                        Capacity Development and SDGs
                        {/* <span className="sub-arrow" /> */}
                      </a>
                      <ul
                        className="M3 dropdown-menu"
                        id="sm-16484944188177595-94"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-16484944188177595-93"
                        aria-expanded="false"
                      >
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/evaluation/nec.html"
                            className=" dropdown-item"
                          >
                            National Evaluation Capacity Building
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/evaluation/sdgs.html"
                            className=" dropdown-item"
                          >
                            Evaluation and SDGs
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/evaluation/human-rights-and-gender.html"
                        className=" dropdown-item"
                      >
                        Human Rights and Gender Equality
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/evaluation/uneg-and-un-resources.html"
                        className=" dropdown-item"
                      >
                        UNEG and UN resources
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/evaluation/evaluation.html"
                        className=" dropdown-item"
                      >
                        Evaluation News
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/evaluation/the-independent-evaluation-section.html"
                        className=" dropdown-item"
                      >
                        About IES
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="L2 dropdown ">
                  <a
                    href="https://www.unodc.org/unodc/en/gender/index.html"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-95"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-96"
                    aria-expanded="false"
                  >
                    Gender
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-96"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-95"
                    aria-expanded="false"
                  >
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/gender/about-us.html"
                        className=" dropdown-item"
                      >
                        About the Gender Team
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/gender/the-gender-strategy.html"
                        className=" dropdown-item"
                      >
                        Gender Strategy
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/gender/gender-and-thematic-areas-1.html"
                        className=" dropdown-item"
                      >
                        Gender &amp; Thematic Areas
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/gender/news.html"
                        className=" dropdown-item"
                      >
                        News
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/gender/newsletter_-gender-bulletin.html"
                        className=" dropdown-item"
                      >
                        Newsletter
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="L2 dropdown ">
                  <a
                    href="https://www.unodc.org/unodc/en/Human-rights/index.html"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-97"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-98"
                    aria-expanded="false"
                  >
                    Human rights
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-98"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-97"
                    aria-expanded="false"
                  >
                    <li className="L3 dropdown ">
                      <a
                        href="https://www.unodc.org/unodc/en/Human-rights/overview.html"
                        className="dropdown-item has-submenu"
                        id="sm-16484944188177595-99"
                        aria-haspopup="true"
                        aria-controls="sm-16484944188177595-100"
                        aria-expanded="false"
                      >
                        UNODC and Human Rights
                        {/* <span className="sub-arrow" /> */}
                      </a>
                      <ul
                        className="M3 dropdown-menu"
                        id="sm-16484944188177595-100"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-16484944188177595-99"
                        aria-expanded="false"
                      >
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/Human-rights/gender.html"
                            className=" dropdown-item"
                          >
                            Gender equality
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/Human-rights/access-to-justice.html"
                            className=" dropdown-item"
                          >
                            Access to justice
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/Human-rights/making-the-world-safer.html"
                            className=" dropdown-item"
                          >
                            Making the world safer
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/Human-rights/health.html"
                            className=" dropdown-item"
                          >
                            Health
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/Human-rights/increasing-the-knowledge-base.html"
                            className=" dropdown-item"
                          >
                            Knowledge base
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/Human-rights/highlights.html"
                        className=" dropdown-item"
                      >
                        Highlights
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/Human-rights/resources.html"
                        className=" dropdown-item"
                      >
                        Resources
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/Human-rights/statements.html"
                        className=" dropdown-item"
                      >
                        Statements
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/Human-rights/multimedia.html"
                        className=" dropdown-item"
                      >
                        Multimedia
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="L2 dropdown ">
                  <a
                    href="https://www.unodc.org/unodc/en/international-cooperation/index.html"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-101"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-102"
                    aria-expanded="false"
                  >
                    International Cooperation
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-102"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-101"
                    aria-expanded="false"
                  >
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/international-cooperation/inter-governmental-bodies.html"
                        className=" dropdown-item"
                      >
                        Inter-Governmental Bodies
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/international-cooperation/databases.html"
                        className=" dropdown-item"
                      >
                        Databases
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/international-cooperation/directories.html"
                        className=" dropdown-item"
                      >
                        Directories
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/international-cooperation/publications.html"
                        className=" dropdown-item"
                      >
                        Publications and tools
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/international-cooperation/technical-assistance.html"
                        className=" dropdown-item"
                      >
                        Technical assistance
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/international-cooperation/networks.html"
                        className=" dropdown-item"
                      >
                        Networks
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/international-cooperation/e-learning.html"
                        className=" dropdown-item"
                      >
                        E-learning
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/international-cooperation/news-and-events.html"
                        className=" dropdown-item"
                      >
                        News and Events
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="L2 dropdown ">
                  <a
                    href="https://www.unodc.org/unodc/en/scientists/index.html"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-103"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-104"
                    aria-expanded="false"
                  >
                    Laboratory and forensic science services
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-104"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-103"
                    aria-expanded="false"
                  >
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/scientists/resources.html"
                        className=" dropdown-item"
                      >
                        Resources
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/scientists/partnerships.html"
                        className=" dropdown-item"
                      >
                        Partners
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/contact-us.html?to=lab&ref=menuside"
                        className=" dropdown-item"
                      >
                        Contact us
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/scientists/laboratory.html"
                        className=" dropdown-item"
                      >
                        Laboratories
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/scientists/law-enforcement.html"
                        className=" dropdown-item"
                      >
                        Law Enforcement
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/scientists/science-and-policy.html"
                        className=" dropdown-item"
                      >
                        Science and Policy
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="L2 dropdown ">
                  <a
                    href="https://www.unodc.org/unodc/en/legal-tools/index.html?ref=menuside"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-105"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-106"
                    aria-expanded="false"
                  >
                    Legal tools
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-106"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-105"
                    aria-expanded="false"
                  >
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/legal-tools/Model.html"
                        className=" dropdown-item"
                      >
                        Model Legislation
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="L2 dropdown ">
                  <a
                    href="https://www.unodc.org/unodc/en/data-and-analysis/index.html?ref=menuside"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-107"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-108"
                    aria-expanded="false"
                  >
                    Research
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-108"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-107"
                    aria-expanded="false"
                  >
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/data-and-analysis/capacity-building.html"
                        className=" dropdown-item"
                      >
                        Capacity Building{" "}
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/data-and-analysis/corruption.html"
                        className=" dropdown-item"
                      >
                        Corruption
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/data-and-analysis/crime-and-criminal-justice-new.html"
                        className=" dropdown-item"
                      >
                        Research on criminal justice
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/data-and-analysis/drug-cultivation-production-and-manufacture.html"
                        className=" dropdown-item"
                      >
                        Drug cultivation, production and manufacture
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/data-and-analysis/research-on-drug-trafficking.html"
                        className=" dropdown-item"
                      >
                        Drug trafficking
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/data-and-analysis/drug-use-new.html"
                        className=" dropdown-item"
                      >
                        Drug use
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/data-and-analysis/global-study-on-homicide.html"
                        className=" dropdown-item"
                      >
                        Global Study on Homicide
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/data-and-analysis/iff.html"
                        className=" dropdown-item"
                      >
                        Illicit Financial Flows{" "}
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/data-and-analysis/research-on-gender-drugs-and-crime.html"
                        className=" dropdown-item"
                      >
                        Research on Gender
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/data-and-analysis/tip.html"
                        className=" dropdown-item"
                      >
                        Research on Trafficking in Persons
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/data-and-analysis/som-observatory.html"
                        className=" dropdown-item"
                      >
                        Research on Smuggling of Migrants
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/data-and-analysis/statistical-activities.html"
                        className=" dropdown-item"
                      >
                        Statistical activities, surveys and standards
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/data-and-analysis/toc.html"
                        className=" dropdown-item"
                      >
                        Transnational organized crime
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/data-and-analysis/wildlife.html"
                        className=" dropdown-item"
                      >
                        Wildlife
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="L2 dropdown ">
                  <a
                    href="https://www.unodc.org/unodc/en/opioid-crisis/index.html"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-109"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-110"
                    aria-expanded="false"
                  >
                    Response to the Opioid Crisis
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-110"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-109"
                    aria-expanded="false"
                  >
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/opioid-crisis/the-strategy.html"
                        className=" dropdown-item"
                      >
                        The Strategy
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/opioid-crisis/resources.html"
                        className=" dropdown-item"
                      >
                        Resources and tools
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/opioid-crisis/events.html"
                        className=" dropdown-item"
                      >
                        Highlights
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/opioid-crisis/news.html"
                        className=" dropdown-item"
                      >
                        Stories and news
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/opioid-crisis/contact-us.html"
                        className=" dropdown-item"
                      >
                        Contact us
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="L2 dropdown ">
                  <a
                    href="https://www.unodc.org/unodc/en/treaties/index.html?ref=menuside"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-111"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-112"
                    aria-expanded="false"
                  >
                    Treaties
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-112"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-111"
                    aria-expanded="false"
                  >
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/organized-crime/intro/UNTOC.html"
                        className=" dropdown-item"
                      >
                        Convention against Transnational Organized Crime
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/treaties/CAC/index.html?ref=menuside"
                        className=" dropdown-item"
                      >
                        Convention against Corruption
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/treaties/single-convention.html?ref=menuside"
                        className=" dropdown-item"
                      >
                        Single Convention on Narcotic Drugs
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/treaties/psychotropics.html?ref=menuside"
                        className=" dropdown-item"
                      >
                        Convention on Psychotropic Substances
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/treaties/illicit-trafficking.html?ref=menuside"
                        className=" dropdown-item"
                      >
                        Convention against the Illicit Traffic in Narcotic Drugs
                        and Psychotropic Substances
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/terrorism/conventions.html?ref=menuside"
                        className=" dropdown-item"
                      >
                        Counter-terrorism Conventions
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/strategy/index.html"
                    className=" dropdown-item"
                  >
                    UNODC Strategy 2021-2025
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/strategy/africa-vision.html"
                    className=" dropdown-item"
                  >
                    UNODC Strategic Vision for Africa 2030
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://syntheticdrugs.unodc.org/"
                    className=" dropdown-item"
                  >
                    UNODC Synthetic Drug Strategy
                  </a>
                </li>
                <li className="L2 dropdown ">
                  <a
                    href="https://www.unodc.org/unodc/en/urban-safety/index.html"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-113"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-114"
                    aria-expanded="false"
                  >
                    Urban Safety and Good Governance
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-114"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-113"
                    aria-expanded="false"
                  >
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/urban-safety/mexico.html"
                        className=" dropdown-item"
                      >
                        Mexico City
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/urban-safety/kenya.html"
                        className=" dropdown-item"
                      >
                        Nairobi
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/urban-safety/uzbekistan.html"
                        className=" dropdown-item"
                      >
                        Tashkent
                      </a>
                    </li>
                    <li className="L3 dropdown ">
                      <a
                        href="https://www.unodc.org/unodc/en/urban-safety/UNODC-toolsandresources.html"
                        className="dropdown-item has-submenu"
                        id="sm-16484944188177595-115"
                        aria-haspopup="true"
                        aria-controls="sm-16484944188177595-116"
                        aria-expanded="false"
                      >
                        Tools and resources
                        {/* <span className="sub-arrow" /> */}
                      </a>
                      <ul
                        className="M3 dropdown-menu"
                        id="sm-16484944188177595-116"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-16484944188177595-115"
                        aria-expanded="false"
                      >
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/urban-safety/policing.html"
                            className=" dropdown-item"
                          >
                            Policing
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/urban-safety/crime-prevention.html"
                            className=" dropdown-item"
                          >
                            Crime Prevention
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/urban-safety/criminal-justice-reform.html"
                            className=" dropdown-item"
                          >
                            Criminal Justice Reform
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/urban-safety/prison-reform.html"
                            className=" dropdown-item"
                          >
                            Prison Reform
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/urban-safety/countering-tip-som.html"
                            className=" dropdown-item"
                          >
                            Countering TiP/SOM
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/urban-safety/alternative-livelihoods.html"
                            className=" dropdown-item"
                          >
                            Alternative Livelihoods
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/urban-safety/terrorism-prevention.html"
                            className=" dropdown-item"
                          >
                            Terrorism Prevention
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/urban-safety/prevention-and-treatment.html"
                            className=" dropdown-item"
                          >
                            Prevention and Treatment
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/urban-safety/countering-money-laundering.html"
                            className=" dropdown-item"
                          >
                            Countering Money Laundering
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/urban-safety/customs.html"
                            className=" dropdown-item"
                          >
                            Customs
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/urban-safety/airports.html"
                            className=" dropdown-item"
                          >
                            Airports
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/urban-safety/seaports.html"
                            className=" dropdown-item"
                          >
                            Seaports
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/urban-safety/container-control.html"
                            className=" dropdown-item"
                          >
                            Container Control
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/urban-safety/countering-corruption.html"
                            className=" dropdown-item"
                          >
                            Countering Corruption
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/urban-safety/countering-cybercrime.html"
                            className=" dropdown-item"
                          >
                            Countering Cybercrime
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/urban-safety/community-engagement.html"
                            className=" dropdown-item"
                          >
                            Community Engagement
                          </a>
                        </li>
                        <li className="L4">
                          <a
                            href="https://www.unodc.org/unodc/en/urban-safety/sports.html"
                            className=" dropdown-item"
                          >
                            Sports
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/urban-safety/urbansafetygovernanceapproach.html"
                        className=" dropdown-item"
                      >
                        Urban Safety Governance Approach{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/youth/index.html"
                    className=" dropdown-item"
                  >
                    Youth
                  </a>
                </li>
              </ul>
              <span
                className="scroll-up"
                style={{
                  top: "auto",
                  left: "0px",
                  marginLeft: "1px",
                  width: "314px",
                  zIndex: 1002,
                  backgroundColor: "rgb(255, 255, 255)",
                  display: "none",
                }}
              >
                <span className="scroll-up-arrow" />
              </span>
              <span
                className="scroll-down"
                style={{
                  display: "none",
                  top: "auto",
                  left: "0px",
                  marginLeft: "1px",
                  width: "314px",
                  zIndex: 1002,
                  backgroundColor: "rgb(255, 255, 255)",
                }}
              >
                <span className="scroll-down-arrow" />
              </span>
            </li>
            <li className="L1 nav-item dropdown">
              <a
                href="https://www.unodc.org/unodc/en/index.html"
                className="nav-link has-submenu"
                id="sm-16484944188177595-117"
                aria-haspopup="true"
                aria-controls="sm-16484944188177595-118"
                aria-expanded="false"
              >
                Information For
                {/* <span className="sub-arrow" /> */}
              </a>
              <ul
                className="M1 dropdown-menu sm-nowrap"
                id="sm-16484944188177595-118"
                role="group"
                aria-hidden="true"
                aria-labelledby="sm-16484944188177595-117"
                aria-expanded="false"
                style={{
                  width: "auto",
                  minWidth: "10em",
                  display: "none",
                  maxWidth: "20em",
                  top: "auto",
                  left: "0px",
                  marginLeft: "0px",
                  marginTop: "0px",
                }}
              >
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/member-states/index.html?ref=menuside"
                    className=" dropdown-item"
                  >
                    Member States
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/ngos/cst.html"
                    className=" dropdown-item"
                  >
                    Civil Society
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/donors/unodc-partners.html"
                    className=" dropdown-item"
                  >
                    UNODC´s fundings and partnerships
                  </a>
                </li>
              </ul>
            </li>
            <li className="L1 nav-item dropdown ">
              <a
                href="https://www.unodc.org/unodc/en/about-unodc/index.html"
                className="nav-link has-submenu"
                id="sm-16484944188177595-119"
                aria-haspopup="true"
                aria-controls="sm-16484944188177595-120"
                aria-expanded="false"
              >
                About us
                {/* <span className="sub-arrow" /> */}
              </a>
              <ul
                className="M1 dropdown-menu"
                id="sm-16484944188177595-120"
                role="group"
                aria-hidden="true"
                aria-labelledby="sm-16484944188177595-119"
                aria-expanded="false"
              >
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/about-unodc/annual-report.html"
                    className=" dropdown-item"
                  >
                    Annual Report
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/about-unodc/employment-opportunities.html"
                    className=" dropdown-item"
                  >
                    Employment opportunities
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/evaluation/index.html"
                    className=" dropdown-item"
                  >
                    Evaluation
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/donors/unodc-partners.html"
                    className=" dropdown-item"
                  >
                    Funding and partnerships{" "}
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/about-unodc/unodc-goodwil-ambassadors.html"
                    className=" dropdown-item"
                  >
                    Goodwill Ambassadors
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/about-unodc/campaigns.html"
                    className=" dropdown-item"
                  >
                    International days and campaigns
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/eds-corner/biography.html"
                    className=" dropdown-item"
                  >
                    Leadership
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="http://www.unvienna.org/unov/en/library.html"
                    className=" dropdown-item"
                  >
                    Library
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/enhttp://www.unvienna.org/unov/en/management_proc.html"
                    className=" dropdown-item"
                  >
                    Procurement
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/publications.html"
                    className=" dropdown-item"
                  >
                    Publications
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/sustainable-development-goals/index.html"
                    className=" dropdown-item"
                  >
                    Sustainable Development Goals
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/eds-corner/speeches.html"
                    className=" dropdown-item"
                  >
                    Speeches
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/about-unodc/contact-us.html"
                    className=" dropdown-item"
                  >
                    Contact UNODC
                  </a>
                </li>
              </ul>
            </li>
            <li className="L1 nav-item dropdown ">
              <a
                href="https://www.unodc.org/unodc/en/field-offices.html"
                className="nav-link has-submenu"
                id="sm-16484944188177595-121"
                aria-haspopup="true"
                aria-controls="sm-16484944188177595-122"
                aria-expanded="false"
              >
                Field Offices
                {/* <span className="sub-arrow" /> */}
              </a>
              <ul
                className="M1 dropdown-menu"
                id="sm-16484944188177595-122"
                role="group"
                aria-hidden="true"
                aria-labelledby="sm-16484944188177595-121"
                aria-expanded="false"
              >
                <li className="L2 dropdown ">
                  <a
                    href="#"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-123"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-124"
                    aria-expanded="false"
                  >
                    Europe and West and Central Asia
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-124"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-123"
                    aria-expanded="false"
                  >
                    <li className="L3">
                      <a
                        href="https://www.unodc.org/unodc/en/field-offices.html"
                        className=" dropdown-item"
                      >
                        Afghanistan
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="/centralasia/index.html?lf_id="
                        className=" dropdown-item"
                      >
                        Central Asia - Regional Office
                      </a>
                    </li>
                    <li className="L3">
                      <a href="/southeasterneurope" className=" dropdown-item">
                        South Eastern Europe
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="/islamicrepublicofiran/"
                        className=" dropdown-item"
                      >
                        Iran, Islamic Republic of
                      </a>
                    </li>
                    <li className="L3">
                      <a href="/rpanc/en/index.html" className=" dropdown-item">
                        Regional Programme for Afghanistan and Neighbouring
                        Countries{" "}
                      </a>
                    </li>
                    <li className="L3">
                      <a href="/pakistan/" className=" dropdown-item">
                        Pakistan
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="L2 dropdown ">
                  <a
                    href="#"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-125"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-126"
                    aria-expanded="false"
                  >
                    Africa and the Middle East
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-126"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-125"
                    aria-expanded="false"
                  >
                    <li className="L3">
                      <a
                        href="/easternafrica/index.html"
                        className=" dropdown-item"
                      >
                        Eastern Africa
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="/middleeastandnorthafrica/index.html"
                        className=" dropdown-item"
                      >
                        Middle East and North Africa
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="/southernafrica/index.html"
                        className=" dropdown-item"
                      >
                        Southern Africa
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="/westandcentralafrica/en/index.html"
                        className=" dropdown-item"
                      >
                        West and Central Africa
                      </a>
                    </li>
                    <li className="L3">
                      <a href="/nigeria/index.html" className=" dropdown-item">
                        Nigeria
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="L2 dropdown ">
                  <a
                    href="#"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-127"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-128"
                    aria-expanded="false"
                  >
                    Latin America and the Caribbean
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-128"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-127"
                    aria-expanded="false"
                  >
                    <li className="L3">
                      <a href="/ropan/en/index.html" className=" dropdown-item">
                        Central America and the Caribbean
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="/bolivia/es/index.html"
                        className=" dropdown-item"
                      >
                        Bolivia
                      </a>
                    </li>
                    <li className="L3">
                      <a href="/brazil" className=" dropdown-item">
                        Brazil and Southern Cone
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="/colombia/es/index.html"
                        className=" dropdown-item"
                      >
                        Colombia
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="/mexicoandcentralamerica/index.html"
                        className=" dropdown-item"
                      >
                        Mexico
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="/peruandecuador/index.html"
                        className=" dropdown-item"
                      >
                        Peru and Ecuador
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="L2 dropdown ">
                  <a
                    href="#"
                    className="dropdown-item has-submenu"
                    id="sm-16484944188177595-129"
                    aria-haspopup="true"
                    aria-controls="sm-16484944188177595-130"
                    aria-expanded="false"
                  >
                    South Asia, East Asia and the Pacific
                    {/* <span className="sub-arrow" /> */}
                  </a>
                  <ul
                    className="M2 dropdown-menu"
                    id="sm-16484944188177595-130"
                    role="group"
                    aria-hidden="true"
                    aria-labelledby="sm-16484944188177595-129"
                    aria-expanded="false"
                  >
                    <li className="L3">
                      <a
                        href="/southeastasiaandpacific"
                        className=" dropdown-item"
                      >
                        South East Asia and the Pacific
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="/eastasiaandpacific/cambodia/index.html"
                        className=" dropdown-item"
                      >
                        - Cambodia
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="/southeastasiaandpacific/indonesia/index.html"
                        className=" dropdown-item"
                      >
                        - Indonesia
                      </a>
                    </li>
                    <li className="L3">
                      <a href="/laopdr/index.html" className=" dropdown-item">
                        - Lao PDR
                      </a>
                    </li>
                    <li className="L3">
                      <a href="/myanmar/index.html" className=" dropdown-item">
                        - Myanmar
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="/southeastasiaandpacific/"
                        className=" dropdown-item"
                      >
                        - Thailand - Regional office
                      </a>
                    </li>
                    <li className="L3">
                      <a href="/vietnam/index.html" className=" dropdown-item">
                        - Viet Nam
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="/southasia/index.html?ref=menutop"
                        className=" dropdown-item"
                      >
                        South Asia
                      </a>
                    </li>
                    <li className="L3">
                      <a
                        href="/southasia/index.html?ref=menutop"
                        className=" dropdown-item"
                      >
                        - Regional Office for South Asia
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="L2">
                  <a href="/brussels" className=" dropdown-item">
                    Liaison Office - Brussels
                  </a>
                </li>
                <li className="L2">
                  <a href="/newyork/index.html" className=" dropdown-item">
                    Liaison Office - New York
                  </a>
                </li>
              </ul>
            </li>
            <li className="L1 nav-item dropdown ">
              <a
                href="https://www.unodc.org/unodc/en/index.html"
                className="nav-link has-submenu"
                id="sm-16484944188177595-131"
                aria-haspopup="true"
                aria-controls="sm-16484944188177595-132"
                aria-expanded="false"
              >
                Quick Links
                {/* <span className="sub-arrow" /> */}
              </a>
              <ul
                className="M1 dropdown-menu"
                id="sm-16484944188177595-132"
                role="group"
                aria-hidden="true"
                aria-labelledby="sm-16484944188177595-131"
                aria-expanded="false"
              >
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/cybercrime/ad_hoc_committee/home"
                    className=" dropdown-item"
                  >
                    Ad hoc committee to elaborate an international convention on
                    countering the use of ICTs for criminal purposes
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/ngos/cst.html"
                    className=" dropdown-item"
                  >
                    Civil Society Engagement
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/commissions/CCPCJ/index.html"
                    className=" dropdown-item"
                  >
                    Commission on Crime Prevention and Criminal Justice (CCPCJ)
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/commissions/CND/index.html"
                    className=" dropdown-item"
                  >
                    Commission on Narcotic Drugs (CND)
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/treaties/CTOC/CTOC-COP.html"
                    className=" dropdown-item"
                  >
                    Conference of the Parties to the United Nations Convention
                    against Transnational Organized Crime and its Protocols
                    (UNTOC/COP){" "}
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/corruption/COSP/conference-of-the-states-parties.html"
                    className=" dropdown-item"
                  >
                    Conference of the States Parties to the United Nations
                    Convention against Corruption (COSP)
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/dohadeclaration/en/index.html"
                    className=" dropdown-item"
                  >
                    Doha Declaration Global Programme
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://sherloc.unodc.org/cld/en/st/evidence/electronic-evidence-hub.html"
                    className=" dropdown-item"
                  >
                    Electronic Evidence Hub
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/human-trafficking/glo-act/index.html"
                    className=" dropdown-item"
                  >
                    Glo.ACT
                  </a>
                </li>
                <li className="L2">
                  <a href="http://www.imolin.org" className=" dropdown-item">
                    IMOLIN - the international money laundering information
                    network
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/drugs/index.html"
                    className=" dropdown-item"
                  >
                    International Day against Drug Abuse and Illicit Trafficking
                    (26 June)
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/drug-trafficking/paris-pact-initiative.html"
                    className=" dropdown-item"
                  >
                    Paris Pact Initiative
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://sherloc.unodc.org/cld/v3/sherloc/"
                    className=" dropdown-item"
                  >
                    SHERLOC knowledge management portal
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/human-trafficking/track4tip/index.html"
                    className=" dropdown-item"
                  >
                    track4tip
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/treatment-and-care/treatnet-training-package.html"
                    className=" dropdown-item"
                  >
                    Treatnet
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/treaties/index.html"
                    className=" dropdown-item"
                  >
                    United Nations drug, crime and terrorism treaties
                  </a>
                </li>
                <li className="L2">
                  <a href="http://www.unsystem.org/" className=" dropdown-item">
                    United Nations system website locator
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/human-trafficking-fund.html"
                    className=" dropdown-item"
                  >
                    United Nations Trust Fund for Victims of Human Trafficking
                  </a>
                </li>
                <li className="L2">
                  <a
                    href="https://www.unodc.org/unodc/en/prevention/youth-initiative.html"
                    className=" dropdown-item"
                  >
                    UNODC Youth Initiative
                  </a>
                </li>
                <li className="L2">
                  <a href="https://wdr.unodc.org" className=" dropdown-item">
                    World Drug Report
                  </a>
                </li>
              </ul>
            </li>
            <li className="L1 nav-item">
              <a
                href="https://www.unodc.org/unodc/en/covid-19.html"
                className=" nav-link"
              >
                COVID-19 Response
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div id="content-container" className="container mt-1 mt-lg-3">
        <div className="row container mx-auto px-0">
          <div className="col-lg-12">
            <ul className=" nav  auto-active  nav-tabs nav-default">
              <ul className=" nav  auto-active  nav-tabs nav-default">
                <ul className=" nav  auto-active  nav-tabs nav-default">
                  <li className="nav-item">
                    <a
                      className=" nav-link  active "
                      href="https://www.unodc.org/unodc/en/money-laundering/index.html"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="https://www.unodc.org/unodc/en/money-laundering/global-programme-against-money-laundering/.html"
                    >
                      GPML
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className=" nav-link  active "
                      href="https://www.unodc.org/unodc/en/money-laundering/global-programme-against-money-laundering/activities.html"
                    >
                      Activities
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className=" nav-link  active "
                      href="https://www.unodc.org/unodc/en/money-laundering/global-programme-against-money-laundering/training-and-tools.html"
                    >
                      Training and Tools
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className=" nav-link  active "
                      href="https://www.unodc.org/unodc/en/money-laundering/global-programme-against-money-laundering/resources.html"
                    >
                      Resources{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className=" nav-link  active "
                      href="https://www.unodc.org/unodc/en/money-laundering/global-programme-against-money-laundering/contact-us.html"
                    >
                      Contact us
                    </a>
                    &nbsp;
                  </li>
                </ul>
              </ul>
            </ul>
            <Form />
            <h3 style={{ textAlign: "left" }}>Money Laundering</h3>
            <div className="container-fluid p-0 m-0">
              <div className="row container mx-auto px-0">
                <p style={{ textAlign: "justify" }}>
                  Money laundering has been addressed in the UN Vienna 1988
                  Convention Article 3.1 describing Money Laundering as:
                </p>
                <div>
                  <p style={{ textAlign: "justify" }}>
                    <strong>
                      <em>
                        “the conversion or transfer of property, knowing that
                        such property is derived from any offense(s), for the
                        purpose of concealing or disguising the illicit origin
                        of the property or of assisting any person who is
                        involved in such offense(s) to evade the legal
                        consequences of his actions”.
                      </em>
                    </strong>
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Money laundering is a process which typically follows three
                    stages to finally release laundered funds into the legal
                    financial system.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <strong>3 Stages of Money Laundering</strong>
                  </p>
                  <ul style={{ textAlign: "justify" }}>
                    <li>
                      Placement (i.e. moving the funds from direct association
                      with the crime)
                    </li>
                    <li>
                      Layering (i.e. disguising the trail to foil pursuit)
                    </li>
                    <li>
                      Integration (i.e. making the money available to the
                      criminal from what seem to be legitimate sources)
                    </li>
                  </ul>
                  <p>
                    <Image
                      src={"/img/Money_Laundering_Cycle.png"}
                      alt="Money Laundering Cycle"
                      width={800}
                      height={450}
                    />
                  </p>
                  <p style={{ textAlign: "justify" }}>&nbsp;</p>
                  <p style={{ textAlign: "justify" }}>
                    In reality money laundering cases may not have all three
                    stages, some stages could be combined, or several stages
                    repeat several times. For instance, Cash from drug sells is
                    divided into small amounts then they are deposited by “money
                    mules” and afterwards transferred as payment for services to
                    a shell company. In this case the placement and layering are
                    done in one stage.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    The estimated amount of money laundered globally in one year
                    is 2 - 5% of global GDP, or $800 billion - $2 trillion in
                    current US dollars. Due to the clandestine nature of
                    money-laundering, it is however difficult to estimate the
                    total amount of money that goes through the laundering
                    cycle.
                  </p>
                  <h3 style={{ textAlign: "justify" }}>Terrorist Financing</h3>
                  <p style={{ textAlign: "justify" }}>
                    Terrorists and terrorist organizations usually need to rely
                    on money to sustain themselves and to carry out terrorist
                    acts. Terrorist financing encompasses the means and methods
                    used by terrorist organizations to finance activities that
                    pose a threat to national and international security. Money
                    provides terrorist organisations with the capacity to carry
                    out terrorist activities, which can be derived from a wide
                    variety of sources. Money can come from both legitimate
                    sources (i.e. profits from businesses and charitable
                    organizations) and criminal sources (i.e. Drug trade, weapon
                    smuggling, kidnapping for ransom).
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    While a money laundering scheme is usually circular and the
                    money eventually ends up with the person who generated it, a
                    terrorist financing process is typically linear, and the
                    money generated is used to propagate terrorist groups and
                    activities.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    It can be divided in following stages:
                  </p>
                  <ul style={{ textAlign: "justify" }}>
                    <li>Raise</li>
                    <li>Store</li>
                    <li>Move</li>
                    <li>Use</li>
                  </ul>
                  <p>
                    <Image
                      src={"/img/Terrorist_Financing.jpg"}
                      alt="Money Laundering Cycle"
                      width={400}
                      height={110}
                    />
                  </p>

                  <h3 style={{ textAlign: "justify" }}>
                    Proliferation Financing
                  </h3>
                  <p style={{ textAlign: "justify" }}>
                    Generally speaking, proliferation is the spread of nuclear,
                    radiological, chemical or biological weapons; their means of
                    delivery such as missiles, rockets and other unmanned
                    systems, as well as related materials, such as WMD-sensitive
                    materials, equipment and technology. If appropriate
                    safeguards are not established, maintained and enforced
                    sensitive materials, technology, services and expertise can
                    become accessible to individuals and entities seeking to use
                    them in WMD programmes. They can also become accessible by
                    terrorists who are pursuing chemical, biological,
                    radiological or nuclear (CBRN) capabilities.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    While there is no internationally agreed definition for
                    proliferation financing yet, it can be described as
                    providing financial services for the transfer and export of
                    nuclear, chemical or biological weapons; their means of
                    delivery and related materials. It involves the financing of
                    trade in proliferation sensitive goods, but could also
                    include other financial support to individuals or entities
                    engaged in proliferation.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    The financial elements of a WMD programme can be divided
                    into three stages:
                  </p>
                  <ul style={{ textAlign: "justify" }}>
                    <li>Raising of funds</li>
                    <li>Obscuring of funds</li>
                    <li>Shipping of necessary items</li>
                  </ul>
                  <p style={{ textAlign: "left" }}>
                    <Image
                      src={"/img/Proliferation_financing_cropped.png"}
                      alt="Money Laundering Cycle"
                      width={400}
                      height={120}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer-container" className="container-fluid">
        <div className="container">
          <div className="row footer-logo-container">
            <div className="pt-4 pb-2 pb-lg-4  px-lg-0 col">
              <div className="site-footer d-flex flex-nowrap align-items-center">
                <div className="site-footer-logo">
                  <a>
                    <Image
                      src={"/img/un-emblem-white.svg"}
                      alt="Money Laundering Cycle"
                      width={50}
                      height={50}
                    />
                  </a>
                </div>
                <div className="site-footer-title px-2">
                  <a>United Nations Office on Drugs and Crime</a>
                </div>
              </div>
              <ul
                id="social-media-global"
                className="d-flex flex-lg-column mt-3 mx-lg-2 std-social-light"
              >
                <li className="std-social-media item-facebook">
                  <a className href="https://www.facebook.com/unodc/">
                    <i className="fab" />
                  </a>
                </li>
                <li className="std-social-media item-twitter">
                  <a className href="https://twitter.com/unodc">
                    <i className="fab" />
                  </a>
                </li>
                <li className="std-social-media item-linkedin">
                  <a className href="https://www.linkedin.com/company/unodc">
                    <i className="fab" />
                  </a>
                </li>
                <li className="std-social-media item-flickr">
                  <a href="https://www.flickr.com/photos/unodc">
                    <i className="fab" />
                  </a>
                </li>
                <li className="std-social-media item-youtube">
                  <a
                    className
                    data-modal-id="modal-player"
                    href="https://m.youtube.com/user/UNODCHQ"
                  >
                    <i className="fab" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row footer-nav-container">
            <div className="py-3 px-0 col">
              <div className="footer-nav">
                <ul>
                  {" "}
                  <li>
                    <a href="https://www.unodc.org/unodc/index.html">Home</a>
                  </li>{" "}
                  <li>
                    <a href="https://www.unodc.org/unodc/contact-us.html">
                      Contacts
                    </a>
                  </li>{" "}
                  <li>
                    <a href="https://www.unodc.org/unodc/fraud-alert.html">
                      Fraud Alert
                    </a>
                  </li>{" "}
                  <li>
                    <a href="https://www.unodc.org/unodc/legal.html">
                      Legal Notice
                    </a>
                  </li>{" "}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ariaHidden="true"
        ariaLabelledby="modal-window-label"
        role="dialog"
        tabIndex={-1}
        id="modal-window-container"
        className="modal fade"
      >
        <div role="document" className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 id="modal-window-label" />
              <button
                aria-label="Close"
                data-dismiss="modal"
                className="close"
                type="button"
              >
                <span ariaHidden="true">
                  <i className="fas fa-times" />
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-body-container" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
