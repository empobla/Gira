<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Portfolio][moreinfo-shield]][moreinfo-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/empobla/Gira">
    <img src="public/images/logos/only-logo.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Gira</h3>

  <p align="center">
    Gira is a fullstack website created for a multi-university college club where users can publish articles and events with images and videos, send massive emails to mailing lists, and accept donations.
    <br />
    <br />
    ·
    <a href="https://gira.demo.emilioppv.com">View Demo</a>
    ·
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#abilities-mastered">Abilities Mastered</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Gira Screen Shot][product-screenshot]](https://gira.demo.emilioppv.com)

Gira is a fullstack website created for a college club that exists in several universities in Mexico. In this website, users can publish articles with images, create events with images and videos, send massive emails to mailing lists, accept donations through PayPal's API, and register for events that this club holds. In addition, users can view posted classes and courses made available by Gira's administrative team.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

[![MongoDB][MongoDB]][Mongo-url][![Express][Express.js]][Express-url][![Pug][Pug.js]][Pug-url][![Node][Node.js]][Node-url][![AWS][AWS]][AWS-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ABILITIES MASTERED -->
## Abilities Mastered

- Re-creation of an Adobe Photoshop and Adobe Illustrator design for this website with CSS (front-end)
- Usage of .svg files with CSS to dynamically change their color on events
- AWS
    - Elastic Beanstalk
    - Route 53
    - ACM
    - Simple Email Service
    - WorkMail
    - S3
- Email Domains
- CSS Animations
- Mailing Lists
- PayPal API
- User Registration with Email Confirmation
- User Password Reset Emails
- User Transactional Emails
- JSON Web Tokens
- JSDoc
<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This project requires Node.js, MongoDB, and several AWS Services. A MongoDB server must be set up locally or in the cloud before using this project, and an AWS IAM account must be setup in AWS with access keys and permissions to use AWS SES and AWS S3.
* Install npm:
  ```sh
  npm install npm@latest -g
  ```
* Install [MongoDB Community Server][MongoDB-community-url] or set up [MongoDB Atlas][MongoDB-atlas-url]. Instructions for MongoDB Community Server can be found [here][MongoDB-instructions-url].
* Setup an AWS IAM account with access keys and permissions to use AWS SES and AWS S3. Instructions can be found [here][IAM-instructions-url].

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/empobla/Gira.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. In the project's directory, create a `.env` file with the following keys:
  ```text
  DB=<MONGODB_URI>

  SECRET=<CREATE_A_SECRET>
  EMAIL_SECRET=<CREATE_A_SECRET>
  
  AWS_ACCESS_KEY_ID=<IAM_ACCESS_KEY_ID>
  AWS_ACCESS_KEY_SECRET=<IAM_SECRET_KEY>
  AWS_S3_BUCKET_NAME=<S3_BUCKET_NAME>
  ```
  _Note: Replace everything in between `<>` with your actual keys, and create a secret and email secret key._

4. Start the server in development mode!
  ```sh
  npm run devstart
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Home Page
- [x] Users
    - [x] User pages
- [x] Emails
    - [x] User emails
    - [x] Automated emails
- [x] Events
    - [x] Creation
    - [x] User registration
- [x] Mailing List
    - [x] Registration
    - [x] Mass emails/newsletter
- [x] News and Articles
    - [x] CMS panel
    - [x] Media upload
- [ ] SEO
- [x] Documentation

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

This project is property of Emilio Popovits Blake and Jose Carlos Briones. All rights are reserved. Modification or redistribution of this code must have _explicit_ consent from either owner.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Emilio Popovits Blake - [Contact](https://emilioppv.com/contact)

Project Link: [https://github.com/empobla/Gira](https://github.com/empobla/Gira)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Email Templater][Email-templater-url]
* [SES Node.js Reference][SES-Node-Reference-url]
* [SES Bulk Emails Tutorial][SES-Bulk-Tutorial-url]
* [SES Bulk Emails Docs][SES-Bulk-Docs-url]
* [SES Email Concepts Docs][SES-Email-Concepts-url]
* [Account Recovery Good Practices][Auth-Recovery-Good-Practices-url]
* [How to make custom language badges for your profile using shields.io][Medium-url]
* [Img Shields](https://shields.io)
* [Simple Icons](https://simpleicons.org)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/emilio-popovits

[product-screenshot]: README/images/thumbnail.png

[MongoDB]: https://img.shields.io/badge/mongodb-ffffff?style=for-the-badge&logo=mongodb&logoColor=47a248
[Mongo-url]: https://www.mongodb.com/
[Express.js]: https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=ffffff
[Express-url]: https://expressjs.com/
[Pug.js]: https://img.shields.io/badge/pug.js-a86454?style=for-the-badge&logo=pug&logoColor=000000
[Pug-url]: https://pugjs.org
[Node.js]: https://img.shields.io/badge/node.js-090c15?style=for-the-badge&logo=nodedotjs&logoColor=339933
[Node-url]: https://nodejs.org
[AWS]: https://img.shields.io/badge/aws-232f3e?style=for-the-badge&logo=amazonaws&logoColor=ff9900
[AWS-url]: https://aws.amazon.com

[MongoDB-community-url]: https://www.mongodb.com/try/download/community
[MongoDB-atlas-url]: https://www.mongodb.com/atlas/database
[MongoDB-instructions-url]: https://www.mongodb.com/docs/manual/administration/install-community
[IAM-instructions-url]: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html

[Medium-url]: https://javascript.plainenglish.io/how-to-make-custom-language-badges-for-your-profile-using-shields-io-d2aeaf016b6b
[Email-templater-url]: https://beefree.io/editor/?template=empty
[SES-Node-Reference-url]: https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ses-examples-sending-email.html
[SES-Bulk-Tutorial-url]: https://pandeysoni.medium.com/how-can-we-use-amazon-ses-template-to-send-email-in-node-js-fb162bd8152e
[SES-Bulk-Docs-url]: https://aws.amazon.com/blogs/messaging-and-targeting/introducing-email-templates-and-bulk-sending
[SES-Email-Concepts-url]: https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-concepts-process.html
[Auth-Recovery-Good-Practices-url]: https://aritic.com/blog/aritic-mail/best-practices-to-handle-password-reset-emails

[moreinfo-url]: https://emilioppv.com/portfolio/gira
[moreinfo-shield]: https://img.shields.io/badge/more%20info-1b1f24?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTA1VDAwOjA0OjU1LTA2OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wMS0xM1QwMzowNjozNC0wNjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wMS0xM1QwMzowNjozNC0wNjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MzAyYjhiNi05ODg1LWI2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