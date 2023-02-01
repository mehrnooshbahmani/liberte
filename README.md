# Liberté

Liberté is a react type script project built with CRA and runs with webpack dev server, so you can add your custom webpack config without "react-script eject".

I named this package Liberte to express my protest against the prevailing conditions in Iran.
Long live "Woman Life Freedom"
<div>
  <a href="https://craco.js.org">
    <img src="https://s26.picofile.com/file/8459183784/liberte.png" width="250" height="250">
  </a>
<br>
</div>


https://en.wikipedia.org/wiki/Mahsa_Amini_protests

[![npm License](https://img.shields.io/badge/npm-6.14.16-purple.svg)](https://www.npmjs.com/)
[![node License](https://img.shields.io/badge/node-14.19.0-yellow.svg)](https://nodejs.org/)
[![webpack License](https://img.shields.io/badge/webpack-5.75.0-blue.svg)](https://webpack.js.org/)
[![typscript License](https://img.shields.io/badge/typescript-4.9.4-green.svg)](https://webpack.js.org/)
## Installation

1.Install the latest version of the package from npm as a dev dependency:

```bash
npm i -D liberte
```
2.Update the existing calls to react-scripts in the scripts section of your package.json to use the liberte CLI:

```bash
"scripts": {
-  "start": "react-scripts start"
+  "liberte-start": "liberte-start"
-  "build": "react-scripts build"
+  "liberte-build": "liberte-build"
+  "liberte": "liberte-config"
}
```
3.Add this line to tsconfig.json

```bash
  "compilerOptions":
  {...
    "outDir": "./dist/",
    ...}
```
4.run this command in terminal
```bash
   npm run liberte
```
5.if you have webpack config from before, liberte keep your config as a comment, so you can uncomment yours and add them again
## 🚀 About Me
I'm a front end developer...

## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mehrnoosh-bahmani-9a3290132/)