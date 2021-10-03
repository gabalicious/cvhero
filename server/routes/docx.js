const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const HTMLtoDOCX = require('html-to-docx');
var HtmlDocx = require('html-docx-js');

const http = require('http');
const fetch = require('node-fetch');

// Set Host
let hosts = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "config", "express-config.json"))
);
let host;
if (process.env.NODE_ENV === "development") host = hosts.dev;
else host = hosts.prod;

// Live render pdf route.
router.get("/render/:id", function (req, res) {
  let id = req.params.id;
  // const htmlFile = fs.createWriteStream("resume.html");
  // console.log(response)

  (async () => {
    const url = `http://localhost:3000/render?url=${host}/resume/${id}`

    const response = await fetch(url);
    const buffer = await response.buffer();
    // console.log(buffer.toString())
    let html = `    <!DOCTYPE html>
<html class="no-js">
    <head>
        <meta charset="utf-8" />
        <title>Justin Gaba Resume</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/main.da029536.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous" />
        <meta name="theme-color" content="#fafafa" />
        <link rel="stylesheet" href="/src.e0ec6635.css" />
        <script async="" type="text/javascript" charset="utf-8" src="http://localhost:8282/resume.00a549a3.js"></script>
        <link rel="stylesheet" href="http://localhost:8282/resume.00a549a3.css" />
            <style>
         .header-top {
           color: red;
            display: table-row;
            
         }
         .header {
                       display: table;
                       width: 100%;

         }
         .header-top-item {
          display: table-cell;
          color: green;
         }
         .header-top-item-first {
          //  width: 1000px;
                      width: 80%;

         }
         .section-header-text--notes, .experience-notes {
           display: none;
           visibility: hidden;
         }
        </style>
    </head>
    <body notes="false">

                <main data-v-6d2353="" class="resume-container">
                    <table data-v-9392c2="" class="header" data-v-6d2353="">
                        <tr data-v-9392c2="" class="header-top">
                            <td data-v-af3ed7="" data-v-9392c2="" class="header-top-item-first show-justin">Justin Gaba</td>
                            <td data-v-af3ed7="" data-v-9392c2="" class="header-top-item show-justin">Software Engineer&nbsp;</td>
                        </tr>
            
                    </table>
                    <div>
                                <div data-v-9392c2="" class="header-body">
                            <span data-v-9392c2="">
                                <i data-v-9392c2="" class="fas fa-map-marker-alt"></i> <span data-v-af3ed7="" data-v-9392c2="">Fort Lauderdale</span>,
                                <span data-v-af3ed7="" data-v-9392c2="">FL</span>
                            </span>
                            <span data-v-9392c2=""><i data-v-9392c2="" class="fas fa-mobile-alt"></i> <a data-v-af3ed7="" data-v-9392c2="" href="tel:+1-917-682-1439" target="_blank">+1-917-682-1439</a></span>
                            <span data-v-9392c2=""><i data-v-9392c2="" class="far fa-envelope"></i> <a data-v-af3ed7="" data-v-9392c2="" href="mailto:justin@gaba.codes" target="_blank">justin@gaba.codes</a></span>
                            <span data-v-9392c2=""><i data-v-9392c2="" class="fas fa-link"></i> <a data-v-af3ed7="" data-v-9392c2="" href="https://gaba.codes" target="_blank">gaba.codes</a></span>
                            <span data-v-9392c2="">
                                <i data-v-9392c2="" class="fab fa-github"></i>&nbsp; <a data-v-af3ed7="" data-v-9392c2="" href="https://github.com/gabalicious" target="_blank">github.com/gabalicious</a>
                            </span>
                        </div></div>
                    <div data-v-f9f121="" data-v-6d2353="" id="profile">
                        <h3 data-v-f9f121="" class="section-header-text">Profile</h3>
                        <h3 data-v-f9f121="" class="section-header-text--notes">Notes</h3>
                        <article data-v-f9f121="">
                            <section data-v-f9f121="" class="experience">
                                <div data-v-f9f121="" class="experience-main">
                                    <p data-v-f9f121="" class="experience-main-body editme" style="line-height: 1.15em;">
                                        IT Professional with 10+ years experience. Adept at JavaScript, Rails and Node.js; Also acquired experience in technical support and data analytics.&nbsp;
                                    </p>
                                </div>
                            </section>
                        </article>
                    </div>
                    <span data-v-83e5b3="" data-v-6d2353="">
                        <div data-v-83e5b3="" class="section-header">
                            <h3 data-v-83e5b3="" class="section-header-text">Highlighted Experience</h3>
                            <h3 data-v-83e5b3="" class="section-header-text--notes">Notes</h3>
                        </div>
                        <article data-v-83e5b3="">
                            <section data-v-83e5b3="" class="experience">
                                <div data-v-83e5b3="" class="experience-main">
                                    <div data-v-83e5b3="" class="experience-main-top">
                                        <span data-v-83e5b3="">
                                            <span data-v-af3ed7="" data-v-83e5b3="">Technical Support Representative</span>, <span data-v-af3ed7="" data-v-83e5b3="">Contractor for Apple</span>
                                        </span>
                                        <span data-v-83e5b3=""><span data-v-af3ed7="" data-v-83e5b3="">May 2021</span>— <span data-v-af3ed7="" data-v-83e5b3="">Present</span></span>
                                    </div>
                                    <p data-v-af3ed7="" data-v-83e5b3="" href="">Provided Technical Support to customers calling Apple 800 line.</p>
                                    <ul data-v-83e5b3="">
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Provided Support for features and issues related to Mac OS, Windows, iOS, iPadOS, WatchOS, accessories, Apple id, and iCloud products.</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Connected with customers over screen share to provide the best possible support experience.</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Assisted customers with troubleshooting wi-fi, bluetooth, cellular, and other issues.</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Received tons of satisfied reviews from customer surveys and exceeding performance goals set by Company.</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div data-v-83e5b3="" class="experience-notes">
                                    <ul data-v-83e5b3="">
                                        <li data-v-83e5b3="">
                                            Changes Notes:&nbsp;
                                            <ul data-v-83e5b3="">
                                                <li
                                                    data-v-83e5b3=""
                                                    spellcheck="true"
                                                    role="textbox"
                                                    aria-multiline="true"
                                                    data-medium-editor-editor-index="96"
                                                    medium-editor-index="59c5c956-bf4b-946d-2805-f36d99089e57"
                                                    data-placeholder="Type your text"
                                                    data-medium-focused="true"
                                                >
                                                    None
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul data-v-83e5b3="">
                                        <li data-v-83e5b3="">
                                            Interview Notes:&nbsp;
                                            <ul data-v-83e5b3="">
                                                <li
                                                    data-v-83e5b3=""
                                                    spellcheck="true"
                                                    role="textbox"
                                                    aria-multiline="true"
                                                    data-medium-editor-editor-index="96"
                                                    medium-editor-index="59c5c956-bf4b-946d-2805-f36d99089e57"
                                                    data-placeholder="Type your text"
                                                    data-medium-focused="true"
                                                >
                                                    None
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                            <section data-v-83e5b3="" class="experience">
                                <div data-v-83e5b3="" class="experience-main">
                                    <div data-v-83e5b3="" class="experience-main-top">
                                        <span data-v-83e5b3="">
                                            <span data-v-af3ed7="" data-v-83e5b3="">Software Engineer Manager</span>, <span data-v-af3ed7="" data-v-83e5b3="">Freelance</span>
                                        </span>
                                        <span data-v-83e5b3=""><span data-v-af3ed7="" data-v-83e5b3="">Oct 2018</span>— <span data-v-af3ed7="" data-v-83e5b3="">Present</span></span>
                                    </div>
                                    <p data-v-af3ed7="" data-v-83e5b3="" href="">Working to gain clients in healthcare, restaurant, and other high-tech industries.</p>
                                    <ul data-v-83e5b3="">
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Developed a restaurant ordering system w/ Node.js, PostgreSQL on backend and Vue.js on frontend for a clients</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Produced a React Native Waze like app for iOS and Android for a client.&nbsp;</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Created a resume editing app which generates nice looking PDF resumes.</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Using DigitalOcean and AWS to host applications in the cloud.</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div data-v-83e5b3="" class="experience-notes">
                                    <ul data-v-83e5b3="">
                                        <li data-v-83e5b3="">
                                            Changes Notes:&nbsp;
                                            <ul data-v-83e5b3="">
                                                <li
                                                    data-v-83e5b3=""
                                                    spellcheck="true"
                                                    role="textbox"
                                                    aria-multiline="true"
                                                    data-medium-editor-editor-index="96"
                                                    medium-editor-index="59c5c956-bf4b-946d-2805-f36d99089e57"
                                                    data-placeholder="Type your text"
                                                    data-medium-focused="true"
                                                >
                                                    None
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul data-v-83e5b3="">
                                        <li data-v-83e5b3="">
                                            Interview Notes:&nbsp;
                                            <ul data-v-83e5b3="">
                                                <li
                                                    data-v-83e5b3=""
                                                    spellcheck="true"
                                                    role="textbox"
                                                    aria-multiline="true"
                                                    data-medium-editor-editor-index="96"
                                                    medium-editor-index="59c5c956-bf4b-946d-2805-f36d99089e57"
                                                    data-placeholder="Type your text"
                                                    data-medium-focused="true"
                                                >
                                                    None
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                            <section data-v-83e5b3="" class="experience">
                                <div data-v-83e5b3="" class="experience-main">
                                    <div data-v-83e5b3="" class="experience-main-top">
                                        <span data-v-83e5b3=""><span data-v-af3ed7="" data-v-83e5b3="">Software Engineer</span>, <span data-v-af3ed7="" data-v-83e5b3="">Zipari</span></span>
                                        <span data-v-83e5b3=""><span data-v-af3ed7="" data-v-83e5b3="">Apr 2017</span>— <span data-v-af3ed7="" data-v-83e5b3="">Oct 2018</span></span>
                                    </div>
                                    <p data-v-af3ed7="" data-v-83e5b3="" href="">Zipari is a startup helping health insurance companies modernize their stack.</p>
                                    <ul data-v-83e5b3="">
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Launched Zipari's Member Portal product as part of the frontend engineering team.</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Built frontend using Angular 5,&nbsp;Ngrx,&nbsp;Webpack, TypeScript,&nbsp;PostCSS, Bootstrap, and SCSS within a Django Environment.</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Worked closely with backend teams to implement claims, benefits, and chat frontend modules.</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Collaborated with UX teams in order to carry out their designs to perfection for Desktop and Mobile.</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">
                                                Maintained Angular 1.x projects making sure applications rendered correctly on major platforms and browsers including IE11. Later upgraded modules to Angular 5
                                            </span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Employed Jenkins for facilitating continuous integration, continuous delivery, and deployments.</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div data-v-83e5b3="" class="experience-notes">
                                    <ul data-v-83e5b3="">
                                        <li data-v-83e5b3="">
                                            Changes Notes:&nbsp;
                                            <ul data-v-83e5b3="">
                                                <li
                                                    data-v-83e5b3=""
                                                    spellcheck="true"
                                                    role="textbox"
                                                    aria-multiline="true"
                                                    data-medium-editor-editor-index="96"
                                                    medium-editor-index="59c5c956-bf4b-946d-2805-f36d99089e57"
                                                    data-placeholder="Type your text"
                                                    data-medium-focused="true"
                                                >
                                                    None
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul data-v-83e5b3="">
                                        <li data-v-83e5b3="">
                                            Interview Notes:&nbsp;
                                            <ul data-v-83e5b3="">
                                                <li
                                                    data-v-83e5b3=""
                                                    spellcheck="true"
                                                    role="textbox"
                                                    aria-multiline="true"
                                                    data-medium-editor-editor-index="96"
                                                    medium-editor-index="59c5c956-bf4b-946d-2805-f36d99089e57"
                                                    data-placeholder="Type your text"
                                                    data-medium-focused="true"
                                                >
                                                    None
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                            <section data-v-83e5b3="" class="experience">
                                <div data-v-83e5b3="" class="experience-main">
                                    <div data-v-83e5b3="" class="experience-main-top">
                                        <span data-v-83e5b3=""><span data-v-af3ed7="" data-v-83e5b3="">Software Engineer</span>, <span data-v-af3ed7="" data-v-83e5b3="">Progyny</span></span>
                                        <span data-v-83e5b3=""><span data-v-af3ed7="" data-v-83e5b3="">Apr 2016</span>— <span data-v-af3ed7="" data-v-83e5b3="">Jan 2017</span></span>
                                    </div>
                                    <p data-v-af3ed7="" data-v-83e5b3="" href="">Progyny is a healthcare startup helping fertility labs select healthy embryos through machine learning.</p>
                                    <ul data-v-83e5b3="">
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Lead team of developers in developing a mobile app w/ Ionic for iOS and Android, successfully launching app in 6 weeks time.</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Worked on Rails, PostgresSQL, and Angular.js stack.</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Used Appium/Selenium for automated testing and Karma for unit tests providing 90% test coverage.</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div data-v-83e5b3="" class="experience-notes">
                                    <ul data-v-83e5b3="">
                                        <li data-v-83e5b3="">
                                            Changes Notes:&nbsp;
                                            <ul data-v-83e5b3="">
                                                <li
                                                    data-v-83e5b3=""
                                                    spellcheck="true"
                                                    role="textbox"
                                                    aria-multiline="true"
                                                    data-medium-editor-editor-index="96"
                                                    medium-editor-index="59c5c956-bf4b-946d-2805-f36d99089e57"
                                                    data-placeholder="Type your text"
                                                    data-medium-focused="true"
                                                >
                                                    None
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul data-v-83e5b3="">
                                        <li data-v-83e5b3="">
                                            Interview Notes:&nbsp;
                                            <ul data-v-83e5b3="">
                                                <li
                                                    data-v-83e5b3=""
                                                    spellcheck="true"
                                                    role="textbox"
                                                    aria-multiline="true"
                                                    data-medium-editor-editor-index="96"
                                                    medium-editor-index="59c5c956-bf4b-946d-2805-f36d99089e57"
                                                    data-placeholder="Type your text"
                                                    data-medium-focused="true"
                                                >
                                                    None
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                            <section data-v-83e5b3="" class="experience">
                                <div data-v-83e5b3="" class="experience-main">
                                    <div data-v-83e5b3="" class="experience-main-top">
                                        <span data-v-83e5b3=""><span data-v-af3ed7="" data-v-83e5b3="">Coding Mentor</span>, <span data-v-af3ed7="" data-v-83e5b3="">Dev Bootcamp</span></span>
                                        <span data-v-83e5b3=""><span data-v-af3ed7="" data-v-83e5b3="">Apr 2015</span>— <span data-v-af3ed7="" data-v-83e5b3="">Apr 2016</span></span>
                                    </div>
                                    <p data-v-af3ed7="" data-v-83e5b3="" href="">Mentored students and gave them the confidence they need to succeed.</p>
                                    <ul data-v-83e5b3="">
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Helped students understand how to write integration tests using Capybara and Rspec for Rails.</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Assisted students in learning ES6, React, and other cutting edge JavaScript libraries at the time.</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div data-v-83e5b3="" class="experience-notes">
                                    <ul data-v-83e5b3="">
                                        <li data-v-83e5b3="">
                                            Changes Notes:&nbsp;
                                            <ul data-v-83e5b3="">
                                                <li
                                                    data-v-83e5b3=""
                                                    spellcheck="true"
                                                    role="textbox"
                                                    aria-multiline="true"
                                                    data-medium-editor-editor-index="96"
                                                    medium-editor-index="59c5c956-bf4b-946d-2805-f36d99089e57"
                                                    data-placeholder="Type your text"
                                                    data-medium-focused="true"
                                                >
                                                    None
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul data-v-83e5b3="">
                                        <li data-v-83e5b3="">
                                            Interview Notes:&nbsp;
                                            <ul data-v-83e5b3="">
                                                <li
                                                    data-v-83e5b3=""
                                                    spellcheck="true"
                                                    role="textbox"
                                                    aria-multiline="true"
                                                    data-medium-editor-editor-index="96"
                                                    medium-editor-index="59c5c956-bf4b-946d-2805-f36d99089e57"
                                                    data-placeholder="Type your text"
                                                    data-medium-focused="true"
                                                >
                                                    None
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                            <section data-v-83e5b3="" class="experience" style="display: none;">
                                <div data-v-83e5b3="" class="experience-main">
                                    <div data-v-83e5b3="" class="experience-main-top">
                                        <span data-v-83e5b3=""><span data-v-af3ed7="" data-v-83e5b3="">System Engineer</span>, <span data-v-af3ed7="" data-v-83e5b3="">Blue Zebra</span></span>
                                        <span data-v-83e5b3=""><span data-v-af3ed7="" data-v-83e5b3="">Apr 2015</span>— <span data-v-af3ed7="" data-v-83e5b3="">Apr 2016</span></span>
                                    </div>
                                    <p data-v-af3ed7="" data-v-83e5b3="" href="">Blue Zebra is an IT Services company providing Technical Support,&nbsp;IT strategy and Helpdesk support.</p>
                                    <ul data-v-83e5b3="">
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Wrote scripts to manage AWS and Digital Ocean environments.</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Maintained and Updated deploy scripts for production environments with Salt.</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Performed production deployments for Rails, Django, and Node.js applications.</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div data-v-83e5b3="" class="experience-notes">
                                    <ul data-v-83e5b3="">
                                        <li data-v-83e5b3="">
                                            Changes Notes:&nbsp;
                                            <ul data-v-83e5b3="">
                                                <li
                                                    data-v-83e5b3=""
                                                    spellcheck="true"
                                                    role="textbox"
                                                    aria-multiline="true"
                                                    data-medium-editor-editor-index="96"
                                                    medium-editor-index="59c5c956-bf4b-946d-2805-f36d99089e57"
                                                    data-placeholder="Type your text"
                                                    data-medium-focused="true"
                                                >
                                                    None
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul data-v-83e5b3="">
                                        <li data-v-83e5b3="">
                                            Interview Notes:&nbsp;
                                            <ul data-v-83e5b3="">
                                                <li
                                                    data-v-83e5b3=""
                                                    spellcheck="true"
                                                    role="textbox"
                                                    aria-multiline="true"
                                                    data-medium-editor-editor-index="96"
                                                    medium-editor-index="59c5c956-bf4b-946d-2805-f36d99089e57"
                                                    data-placeholder="Type your text"
                                                    data-medium-focused="true"
                                                >
                                                    None
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                            <section data-v-83e5b3="" class="experience">
                                <div data-v-83e5b3="" class="experience-main">
                                    <div data-v-83e5b3="" class="experience-main-top">
                                        <span data-v-83e5b3="">
                                            <span data-v-af3ed7="" data-v-83e5b3="">Integrations &amp; Application Support</span>, <span data-v-af3ed7="" data-v-83e5b3="">Traiana</span>
                                        </span>
                                        <span data-v-83e5b3=""><span data-v-af3ed7="" data-v-83e5b3="">Feb 2012</span>— <span data-v-af3ed7="" data-v-83e5b3="">Sep 2014</span></span>
                                    </div>
                                    <p data-v-af3ed7="" data-v-83e5b3="" href="">Traiana is a Fin-tech company with a currency trading clearing house platform for matching trades called Harmony.</p>
                                    <ul data-v-83e5b3="">
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Configured client integration details, XML trade attributes, and MQ connections within Traiana's integration layer.</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Worked with Harmony SaaS GUI to configure legal entities, legal relationships, entity IDs, and other entity data.</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Used tools such as SQL and Excel to build reports and also resolve issues for clients and internal teams.</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Corresponded with clients via phone and email to gather requirements and meet SLA&nbsp;commitments in contracts.</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div data-v-83e5b3="" class="experience-notes">
                                    <ul data-v-83e5b3="">
                                        <li data-v-83e5b3="">
                                            Changes Notes:&nbsp;
                                            <ul data-v-83e5b3="">
                                                <li
                                                    data-v-83e5b3=""
                                                    spellcheck="true"
                                                    role="textbox"
                                                    aria-multiline="true"
                                                    data-medium-editor-editor-index="96"
                                                    medium-editor-index="59c5c956-bf4b-946d-2805-f36d99089e57"
                                                    data-placeholder="Type your text"
                                                    data-medium-focused="true"
                                                >
                                                    None
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul data-v-83e5b3="">
                                        <li data-v-83e5b3="">
                                            Interview Notes:&nbsp;
                                            <ul data-v-83e5b3="">
                                                <li
                                                    data-v-83e5b3=""
                                                    spellcheck="true"
                                                    role="textbox"
                                                    aria-multiline="true"
                                                    data-medium-editor-editor-index="96"
                                                    medium-editor-index="59c5c956-bf4b-946d-2805-f36d99089e57"
                                                    data-placeholder="Type your text"
                                                    data-medium-focused="true"
                                                >
                                                    None
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                            <section data-v-83e5b3="" class="experience">
                                <div data-v-83e5b3="" class="experience-main">
                                    <div data-v-83e5b3="" class="experience-main-top">
                                        <span data-v-83e5b3=""><span data-v-af3ed7="" data-v-83e5b3="">Technical Support</span>, <span data-v-af3ed7="" data-v-83e5b3="">Flextronics</span></span>
                                        <span data-v-83e5b3=""><span data-v-af3ed7="" data-v-83e5b3="">June 2011</span>— <span data-v-af3ed7="" data-v-83e5b3="">Jan 2012</span></span>
                                    </div>
                                    <p data-v-af3ed7="" data-v-83e5b3="" href="">Flextronics administered support for Verizon Wireless corporate retail stores.</p>
                                    <ul data-v-83e5b3="">
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Provided customers with support for their Android, IOS, Blackberry, Windows, Palm phones, and mobile hotspots.&nbsp;</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Corresponded with Level 2 support when issues could not be resolved with the tools provided.</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div data-v-83e5b3="" class="experience-notes">
                                    <ul data-v-83e5b3="">
                                        <li data-v-83e5b3="">
                                            Changes Notes:&nbsp;
                                            <ul data-v-83e5b3="">
                                                <li
                                                    data-v-83e5b3=""
                                                    spellcheck="true"
                                                    role="textbox"
                                                    aria-multiline="true"
                                                    data-medium-editor-editor-index="96"
                                                    medium-editor-index="59c5c956-bf4b-946d-2805-f36d99089e57"
                                                    data-placeholder="Type your text"
                                                    data-medium-focused="true"
                                                >
                                                    None
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul data-v-83e5b3="">
                                        <li data-v-83e5b3="">
                                            Interview Notes:&nbsp;
                                            <ul data-v-83e5b3="">
                                                <li
                                                    data-v-83e5b3=""
                                                    spellcheck="true"
                                                    role="textbox"
                                                    aria-multiline="true"
                                                    data-medium-editor-editor-index="96"
                                                    medium-editor-index="59c5c956-bf4b-946d-2805-f36d99089e57"
                                                    data-placeholder="Type your text"
                                                    data-medium-focused="true"
                                                >
                                                    None
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                            <section data-v-83e5b3="" class="experience">
                                <div data-v-83e5b3="" class="experience-main">
                                    <div data-v-83e5b3="" class="experience-main-top">
                                        <span data-v-83e5b3="">
                                            <span data-v-af3ed7="" data-v-83e5b3="">Project Manager</span>, <span data-v-af3ed7="" data-v-83e5b3="">Elite Interactive Group</span>
                                        </span>
                                        <span data-v-83e5b3=""><span data-v-af3ed7="" data-v-83e5b3="">Jan 2009</span>— <span data-v-af3ed7="" data-v-83e5b3="">June 2011</span></span>
                                    </div>
                                    <p data-v-af3ed7="" data-v-83e5b3="" href="">Elite Media Graphics was a Brooklyn Design shop specializing in <b>Rails</b> and <b>Wordpress</b> sites.</p>
                                    <ul data-v-83e5b3="">
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Gathered client requirements for new features.</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                        <li data-v-af3ed7="" data-v-83e5b3="">
                                            <span data-v-af3ed7="">Corresponded with developers to ensure completion of new features.</span>
                                            <span data-v-af3ed7="" style="display: none;">
                                                <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-plus-circle text-success"></i></a> <a data-v-af3ed7="" href="#"><i data-v-af3ed7="" class="fas fa-trash-alt text-danger"></i></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div data-v-83e5b3="" class="experience-notes">
                                    <ul data-v-83e5b3="">
                                        <li data-v-83e5b3="">
                                            Changes Notes:&nbsp;
                                            <ul data-v-83e5b3="">
                                                <li
                                                    data-v-83e5b3=""
                                                    spellcheck="true"
                                                    role="textbox"
                                                    aria-multiline="true"
                                                    data-medium-editor-editor-index="96"
                                                    medium-editor-index="59c5c956-bf4b-946d-2805-f36d99089e57"
                                                    data-placeholder="Type your text"
                                                    data-medium-focused="true"
                                                >
                                                    None
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul data-v-83e5b3="">
                                        <li data-v-83e5b3="">
                                            Interview Notes:&nbsp;
                                            <ul data-v-83e5b3="">
                                                <li
                                                    data-v-83e5b3=""
                                                    spellcheck="true"
                                                    role="textbox"
                                                    aria-multiline="true"
                                                    data-medium-editor-editor-index="96"
                                                    medium-editor-index="59c5c956-bf4b-946d-2805-f36d99089e57"
                                                    data-placeholder="Type your text"
                                                    data-medium-focused="true"
                                                >
                                                    None
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </article>
                    </span>
                    <article data-v-eb7ca9="" data-v-6d2353="" class="flex">
                        <div data-v-f98c70="" data-v-eb7ca9="" class="flex-item-50">
                            <div data-v-f98c70="" class="section-header"><h3 data-v-f98c70="" class="section-header-text skills">Highlighted Skills</h3></div>
                            <table data-v-f98c70="" class="skillsTable">
                                <tbody data-v-f98c70="">
                                    <tr data-v-f98c70="" class="skillsTable-header-row">
                                        <th data-v-af3ed7="" data-v-f98c70="" data-index="i" data-key="name" class="skillsTable-header-row-cell">
                                            <span data-v-af3ed7="" class="skillsTable-header-row-cell-fixpadding">Frontend</span>
                                        </th>
                                        <th data-v-af3ed7="" data-v-f98c70="" data-index="i" data-key="name" class="skillsTable-header-row-cell">
                                            <span data-v-af3ed7="" class="skillsTable-header-row-cell-fixpadding">Backend</span>
                                        </th>
                                        <th data-v-af3ed7="" data-v-f98c70="" data-index="i" data-key="name" class="skillsTable-header-row-cell">
                                            <span data-v-af3ed7="" class="skillsTable-header-row-cell-fixpadding">Systems</span>
                                        </th>
                                    </tr>
                                    <tr data-v-f98c70="">
                                        <td data-v-af3ed7="" data-v-f98c70="" data-index="i" data-key="keywords" data-index-second="j">Vue</td>
                                        <td data-v-af3ed7="" data-v-f98c70="" data-index="i" data-key="keywords" data-index-second="j">Node.js</td>
                                        <td data-v-af3ed7="" data-v-f98c70="" data-index="i" data-key="keywords" data-index-second="j">Linux</td>
                                    </tr>
                                    <tr data-v-f98c70="">
                                        <td data-v-af3ed7="" data-v-f98c70="" data-index="i" data-key="keywords" data-index-second="j">SCSS</td>
                                        <td data-v-af3ed7="" data-v-f98c70="" data-index="i" data-key="keywords" data-index-second="j">Express.js</td>
                                        <td data-v-af3ed7="" data-v-f98c70="" data-index="i" data-key="keywords" data-index-second="j">Nginx</td>
                                    </tr>
                                    <tr data-v-f98c70="">
                                        <td data-v-af3ed7="" data-v-f98c70="" data-index="i" data-key="keywords" data-index-second="j">React</td>
                                        <td data-v-af3ed7="" data-v-f98c70="" data-index="i" data-key="keywords" data-index-second="j">MongoDB</td>
                                        <td data-v-af3ed7="" data-v-f98c70="" data-index="i" data-key="keywords" data-index-second="j">AWS</td>
                                    </tr>
                                    <tr data-v-f98c70="">
                                        <td data-v-af3ed7="" data-v-f98c70="" data-index="i" data-key="keywords" data-index-second="j">JavaScript</td>
                                        <td data-v-af3ed7="" data-v-f98c70="" data-index="i" data-key="keywords" data-index-second="j">PostgreSQL</td>
                                        <td data-v-af3ed7="" data-v-f98c70="" data-index="i" data-key="keywords" data-index-second="j">Docker</td>
                                    </tr>
                                    <tr data-v-f98c70="">
                                        <td data-v-af3ed7="" data-v-f98c70="" data-index="i" data-key="keywords" data-index-second="j">Webpack</td>
                                        <td data-v-af3ed7="" data-v-f98c70="" data-index="i" data-key="keywords" data-index-second="j">Rails</td>
                                        <td data-v-af3ed7="" data-v-f98c70="" data-index="i" data-key="keywords" data-index-second="j">DigitalOcean</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div data-v-4b4f71="" data-v-eb7ca9="" class="flex-item-50">
                            <div data-v-4b4f71="" class="section-header"><h3 data-v-4b4f71="" class="section-header-text">Education</h3></div>
                            <section data-v-4b4f71="" class="experience">
                                <div data-v-4b4f71="" class="education-main">
                                    <div data-v-4b4f71="" class="experience-main-top">
                                        <span data-v-af3ed7="" data-v-4b4f71="">Dev Bootcamp</span>
                                        <span data-v-4b4f71=""><span data-v-af3ed7="" data-v-4b4f71="">Oct 2014</span>— <span data-v-af3ed7="" data-v-4b4f71="">Apr 2015</span></span>
                                    </div>
                                    <p data-v-4b4f71="" class="experience-main-body">
                                        <strong data-v-af3ed7="" data-v-4b4f71="" data-key="area">Certificate of Full-stack engineer</strong>
                                        <span data-v-af3ed7="" data-v-4b4f71="">Ruby On Rails, ORM, JavaScript, PostgreSQL.</span>
                                    </p>
                                </div>
                            </section>
                            <section data-v-4b4f71="" class="experience">
                                <div data-v-4b4f71="" class="education-main">
                                    <div data-v-4b4f71="" class="experience-main-top">
                                        <span data-v-af3ed7="" data-v-4b4f71="">Brooklyn College</span>
                                        <span data-v-4b4f71=""><span data-v-af3ed7="" data-v-4b4f71="">Jan 2008</span>— <span data-v-af3ed7="" data-v-4b4f71="">Aug 2011</span></span>
                                    </div>
                                    <p data-v-4b4f71="" class="experience-main-body">
                                        <strong data-v-af3ed7="" data-v-4b4f71="" data-key="area">Business Management &amp; Finance</strong>
                                        <span data-v-af3ed7="" data-v-4b4f71="">Economics, Statistics</span>
                                    </p>
                                </div>
                            </section>
                        </div>
                    </article>
                    <article data-v-a86683="" data-v-6d2353="" id="projects" style="display: none;">
                        <div data-v-a86683="" class="section-header"><h3 data-v-a86683="" class="section-header-text">Projects</h3></div>
                        <section data-v-a86683="" class="experience-50" style="display: none;">
                            <div data-v-a86683="" class="experience-main">
                                <div data-v-a86683="" class="experience-main-top block"><span data-v-af3ed7="" data-v-a86683="">CV Hero</span></div>
                                <p data-v-af3ed7="" data-v-a86683="" href="">Resume Builder App made using Vue.js, Parcel, and Node.js featuring PDF generation and the ability to edit multiple resumes.</p>
                                <div data-v-a86683="" class="project-link-wrapper">
                                    <p data-v-a86683="" class="project-link">
                                        <span data-v-a86683="">Github:&nbsp;</span> <a data-v-af3ed7="" data-v-a86683="" href="https://github.com/gabalicious/cvhero" target="_blank">gabalicious/cvhero</a>
                                    </p>
                                    <p data-v-a86683="" class="project-link">
                                        <span data-v-a86683="">Demo:&nbsp;</span> <a data-v-af3ed7="" data-v-a86683="" href="https://cvhero.gaba.codes" target="_blank">cvhero.gaba.codes</a>
                                    </p>
                                </div>
                                <p data-v-a86683="" class="project-main-link">
                                    <span data-v-a86683=""> Last Updated:&nbsp; <span data-v-af3ed7="" data-v-a86683="">April 2020</span></span>
                                </p>
                                <p data-v-a86683="" class="experience-main-tags">
                                    <i data-v-a86683=""><span data-v-af3ed7="" data-v-a86683="" class="text-black">Express.js</span></i>
                                    <i data-v-a86683=""><span data-v-af3ed7="" data-v-a86683="" class="text-black">Vue.js</span></i>
                                    <i data-v-a86683=""><span data-v-af3ed7="" data-v-a86683="" class="text-black">Vuex</span></i>
                                </p>
                            </div>
                        </section>
                        <section data-v-a86683="" class="experience-50" style="display: none;">
                            <div data-v-a86683="" class="experience-main">
                                <div data-v-a86683="" class="experience-main-top block"><span data-v-af3ed7="" data-v-a86683="">Romani Comics</span></div>
                                <p data-v-af3ed7="" data-v-a86683="" href="">Demo E-commerce store built with React, Strapi CMS, and Snipcart. Check out the github link to see a video of the CMS experience.</p>
                                <div data-v-a86683="" class="project-link-wrapper">
                                    <p data-v-a86683="" class="project-link">
                                        <span data-v-a86683="">Github:&nbsp;</span> <a data-v-af3ed7="" data-v-a86683="" href="https://github.com/git.io/fjBul" target="_blank">git.io/fjBul</a>
                                    </p>
                                    <p data-v-a86683="" class="project-link">
                                        <span data-v-a86683="">Demo:&nbsp;</span> <a data-v-af3ed7="" data-v-a86683="" href="https://git.io/fjBul" target="_blank">git.io/fjBul</a>
                                    </p>
                                </div>
                                <p data-v-a86683="" class="project-main-link">
                                    <span data-v-a86683=""> Last Updated:&nbsp; <span data-v-af3ed7="" data-v-a86683="">May 2019</span></span>
                                </p>
                                <p data-v-a86683="" class="experience-main-tags">
                                    <i data-v-a86683=""><span data-v-af3ed7="" data-v-a86683="" class="text-black">Node.js</span></i>
                                    <i data-v-a86683=""><span data-v-af3ed7="" data-v-a86683="" class="text-black">CMS</span></i>
                                    <i data-v-a86683=""><span data-v-af3ed7="" data-v-a86683="" class="text-black">React.js</span></i>
                                </p>
                            </div>
                        </section>
                        <section data-v-a86683="" class="experience-50" style="display: none;">
                            <div data-v-a86683="" class="experience-main">
                                <div data-v-a86683="" class="experience-main-top block"><span data-v-af3ed7="" data-v-a86683="">Smart Home w/ Node Red</span></div>
                                <p data-v-af3ed7="" data-v-a86683="" href="">Combines Express.js w/ node-red to allow me to control my smart home with flows. Works w/ my Sonos, Phillips Hue, + more.</p>
                                <div data-v-a86683="" class="project-link-wrapper">
                                    <p data-v-a86683="" class="project-link">
                                        <span data-v-a86683="">Github:&nbsp;</span> <a data-v-af3ed7="" data-v-a86683="" href="https://github.com/git.io/fjBTW" target="_blank">git.io/fjBTW</a>
                                    </p>
                                    <p data-v-a86683="" class="project-link">
                                        <span data-v-a86683="">Demo:&nbsp;</span> <a data-v-af3ed7="" data-v-a86683="" href="https://git.io/fjBTW" target="_blank">git.io/fjBTW</a>
                                    </p>
                                </div>
                                <p data-v-a86683="" class="project-main-link">
                                    <span data-v-a86683=""> Last Updated:&nbsp; <span data-v-af3ed7="" data-v-a86683="">April 2019</span></span>
                                </p>
                                <p data-v-a86683="" class="experience-main-tags">
                                    <i data-v-a86683=""><span data-v-af3ed7="" data-v-a86683="" class="text-black">Node.js</span></i>
                                    <i data-v-a86683=""><span data-v-af3ed7="" data-v-a86683="" class="text-black">Express.js</span></i>
                                </p>
                            </div>
                        </section>
                        <section data-v-a86683="" class="experience-50" style="display: none;">
                            <div data-v-a86683="" class="experience-main">
                                <div data-v-a86683="" class="experience-main-top block"><span data-v-af3ed7="" data-v-a86683="">Pyodide Notebook</span></div>
                                <p data-v-af3ed7="" data-v-a86683="" href="">This project lets you write and run python code in the browser thanks to Pyodide package and WebAssembly.</p>
                                <div data-v-a86683="" class="project-link-wrapper">
                                    <p data-v-a86683="" class="project-link">
                                        <span data-v-a86683="">Github:&nbsp;</span>
                                        <a data-v-af3ed7="" data-v-a86683="" href="https://github.com/gabalicious/parcel-pyodide" target="_blank">gabalicious/parcel-pyodide</a>
                                    </p>
                                    <p data-v-a86683="" class="project-link">
                                        <span data-v-a86683="">Demo:&nbsp;</span> <a data-v-af3ed7="" data-v-a86683="" href="https://pyodide.gaba.codes" target="_blank">pyodide.gaba.codes</a>
                                    </p>
                                </div>
                                <p data-v-a86683="" class="project-main-link">
                                    <span data-v-a86683=""> Last Updated:&nbsp; <span data-v-af3ed7="" data-v-a86683="">May 2020</span></span>
                                </p>
                                <p data-v-a86683="" class="experience-main-tags">
                                    <i data-v-a86683=""><span data-v-af3ed7="" data-v-a86683="" class="text-black">Express.js</span></i>
                                    <i data-v-a86683=""><span data-v-af3ed7="" data-v-a86683="" class="text-black">Vue.js</span></i>
                                    <i data-v-a86683=""><span data-v-af3ed7="" data-v-a86683="" class="text-black">Vuex</span></i>
                                    <i data-v-a86683=""><span data-v-af3ed7="" data-v-a86683="" class="text-black">Parcel.js</span></i>
                                    <i data-v-a86683=""><span data-v-af3ed7="" data-v-a86683="" class="text-black">Web Workers</span></i>
                                </p>
                            </div>
                        </section>
                    </article>
                </main>


        <script src="/src.93e4c0b6.js"></script>

    </body>
</html>

`
    const docx = HtmlDocx.asBlob(html);

    await res.writeHead(200, [['Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']]);
    await res.end(new Buffer(docx, 'base64'));
    // await res.send(buffer)
    console.log('Done!');
  })();


});


// Download Route
router.get("/dl/:id", function (req, res) {
  let id = req.params.id;
  const htmlFile = fs.createWriteStream("resume.html");
  const request = http.get(`${host}/resume/${id}`, function (response) {
    response.pipe(htmlFile);

    // var docx = HtmlDocx.asBlob(htmlFile);
    // res.end(docx);
  });

  // RenderPDF.generatePdfBuffer(`${host}/resume/${id}`).then((pdfBuffer) => {
  //   res.writeHead(200, {
  //     "Content-Type": "application/pdf",
  //     "Content-Disposition": "attachment; resume.pdf",
  //     "Content-Length": pdfBuffer.length
  //   });
  //   res.end(pdfBuffer);

  // });
});


module.exports = router;
