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

* [![MongoDB][MongoDB]][Mongo-url]
* [![Express][Express.js]][Express-url]
* [![Pug][Pug.js]][Pug-url]
* [![Node][Node.js]][Node-url]
* [![AWS][AWS]][AWS-url]

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
* To install npm:
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Install [MongoDB Community Server][MongoDB-community-url] or set up [MongoDB Atlas][MongoDB-atlas-url]. Instructions for MongoDB Community Server can be found [here][MongoDB-instructions-url].
2. Setup an AWS IAM account with access keys and permissions to use AWS SES and AWS S3. Instructions can be found [here][IAM-instructions-url].
3. Clone the repo
   ```sh
   git clone https://github.com/empobla/Gira.git
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. In the project's directory, create a `.env` file with the following keys:
  ```text
  DB=<MONGODB_URI>

  SECRET=<CREATE_A_SECRET>
  EMAIL_SECRET=<CREATE_A_SECRET>
  
  AWS_ACCESS_KEY_ID=<IAM_ACCESS_KEY_ID>
  AWS_ACCESS_KEY_SECRET=<IAM_SECRET_KEY>
  AWS_S3_BUCKET_NAME=<S3_BUCKET_NAME>
  ```
  _Note: Replace everything in between `<>` with your actual keys, and create a secret and email secret key._

6. Start the server in development mode!
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