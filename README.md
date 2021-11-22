# Evaluate a news article with Natural Language Processing

A sentiment analysis app that takes in a news article URL and returns results as to whether it expresses a positive/negative/neutral sentiment.

## Table of Contents

- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Overview of Key Dependencies](#overview-of-key-dependencies)
- [Getting Started](#getting-started)
- [Testing](#testing)

## Project Structure

```
.
├── src
│   ├── client
│   │   ├── images
│   │   │   └── logo.png
│   │   ├── js
│   │   │   ├── __test__
│   │   │   │   ├── handlers.test.js
│   │   │   │   └── utils.test.js
│   │   │   ├── handlers.js
│   │   │   └── utils.js
│   │   ├── styles
│   │   │   ├── base.scss
│   │   │   ├── footer.scss
│   │   │   ├── form.scss
│   │   │   ├── header.scss
│   │   │   └── resets.scss
│   │   ├── views
│   │   │   └── index.html
│   │   └── index.js
│   └── server
│       └── index.js
├── webpack.dev.js
│   webpack.prod.js
├── package-lock.json
│   package.json
└── README.md
```

## Tech Stack

Express for the server-side. Vanilla JavaScript, HTML, and CSS for the frontend. There is no persistent data store. All data is stored in memory. Additional data is fetched from the third-party [MeaningCloud Sentiment Analysis API](https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/what-is-sentiment-analysis).

## Overview of Key Dependencies

- [Node.js](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [cors](https://www.npmjs.com/package/cors) - CORS is a Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- [jest](https://jestjs.io/) - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- [webpack](https://webpack.js.org/) - webpack is a static module bundler for modern JavaScript applications.

## Getting Started

1. Ensure you have [Node.js](https://nodejs.org/en/download/) installed
2. Set the `API_KEY` environment variable to your [MeaningCloud API key](https://www.meaningcloud.com/developer/account/subscriptions) by running:
   ```bash
   export API_KEY=your_api_key
   ```
2. Clone this repository by navigating to a suitable directory and running:
   ```bash
   git clone https://github.com/fstubner/udacity-fend-nlp.git
   ```
3. Navigate to the root directory `udacity-fend-nlp` and run:
   ```bash
   npm install
   ```
4. To start the backend server, run:

   ```bash
   npm start
   ```

   > _note:_ By default, the built-in web server will be available under http://localhost:8080.

## Testing

To run tests, run:
```bash
npm test
```