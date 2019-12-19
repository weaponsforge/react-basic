# react-basic

> Testing adding react component on an existing website.



### Prerequisites

1. NodeJS
	- version 10.16.3 was used for this project
2. Windows 10 64-bit OS



## Content


### React Project Files

Referencing from **/public** directory.

1. **index.html**, **like\_button.js**
	- basic html page, includes **React library** from unkpg
	- loads React component using Javascript

2. **jsx.html**, **like\_button\_jsx.js**
	- basic html page, includes **React library** and **babel** from unkpg
	- loads React component using JSX


### Express web server

1. **index.js**  
Basic express server set-up.

2. **index-static.js**  
Basic express server set-up that serves static (html, css, js) scripts from the **/public** directory.



## Usage

1. Clone this repository.  
`git clone https://github.com/weaponsforge/react-basic.git`

2. Install dependencies.  
`npm install`

3. Run the server.  
	- `npm run start` to start the basic express server
	- `npm run dev:static` to start the basic express server that loads static (front-end) files from the **/public** directory. *(Required)*

4. Open a web browser to  
   - `http://localhost:3000`
   - `http://localhost:3000/jsx.html`


20191219

