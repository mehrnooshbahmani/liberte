# Liberté

Liberté is a react type script project has built with CRA and run with webpack dev server, so you can add your costum webpack config without "react-script eject".

I named this package Liberte to express my protest against the prevailing conditions in Iran.
Long live "Woman Life Freedom"
<div>
  <a href="https://craco.js.org">
    <img src="https://s26.picofile.com/file/8459183784/liberte.png" width="۲۵۰0" height="250">
  </a>
<br>
</div>


https://en.wikipedia.org/wiki/Mahsa_Amini_protests

## Installation

1.Install the latest version of the package from npm as a dev dependency:

```bash
npm i -D @liberte/liberte
```
2.Update the existing calls to react-scripts in the scripts section of your package.json to use the liberte CLI:

```bash
"scripts": {
-  "start": "react-scripts start"
+  "start": "liberte start"
-  "build": "react-scripts build"
+  "build": "liberte build"
}
```
3.Add this line to tsconfig.json

```bash
  "compilerOptions":
  {...
    "outDir": "./dist/",
    ...}
```
## 🚀 About Me
I'm a font end developer...

## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mehrnoosh-bahmani-9a3290132/)