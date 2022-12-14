# About Barbara

The frontend of Barbara - a shopping list sharing website. It could be used in a situation where one person shops for the whole group and that person is not sure what to buy. By sending the link to the website and the code to the folder the group members can join the shopping list and add products of their choice.

## Frontend Installation

1. Clone the repo

```bash
git clone https://github.com/Dismated/barbara
```

2. Install NPM package

```bash
npm install
```

3. Start the frontend

```bash
npm start
```

## Backend Installation

1. Clone the repo

```bash
git clone https://github.com/Dismated/barbServer
```

2. Install NPM package

```bash
npm install
```

3. Start the backend

```bash
npm run dev
```

## Usage

Product lists are stored in folders. You can either create a new folder:

![How to create list](src/assets/howToCreateList.png)

Or ask someone for a code to join theirs:

![How to copy folder code](src/assets/howToCopyFolderCode.png)

Paste the code here:

![How to paste the folder code](src/assets/howToJoinList.png)

You can only add products to your list once you are in the folder:

![How to add products](src/assets/howToAddProducts.png)

The webpage is responsive and can be used at any size (the lists are located at the top right corner):

![Responsive design](src/assets/responsiveDesign.png)

## Languages and Tools:

1. Redux
2. Material UI
3. ESLint
4. Prettier

 <p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://heroku.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://jestjs.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/> </a> <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://www.adobe.com/products/xd.html" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/adobe-xd.svg" alt="xd" width="40" height="40"/> </a> </p>

## Problems and Future Solutions:

When doing the project, I was mainly focused on making it functional. In hindsight, I see a lot of room for improvement especially by making the code more reusable. For example, I could refactor the fetching of products then it would be easier to change the supermarket API, if there ever was a need to. Furthermore, I could implement logins, this way your shopping lists would be synchronized across your devices. To make data management easier I would choose to use a relational database rather than a document-oriented one.
