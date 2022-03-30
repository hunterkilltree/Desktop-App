# Desktop-App

## Project to create simple Desktop app 

### Language: typescript
### Framework: Electron
### UI library: mui 

#### What is Electron?
Electron is a framework for building cross-plaftform desktop applications written in web technologies. This is the framework because it comes bundled with a number of tools that help dev build their application. For example, it comes with Chromium(Browser APIs) this allows to access to dome APIs for UI. It also has the latest version of Node.js(able to use ACME script 2015). Also Electrons APIs.

Benefits: 
* One code base - not three
* No native experience require
* One browser
* Native integration

Examples of using Electron: Atom, Slack, Visual Studio Code,...

#### Create a Project Electron with typescript

Quick start
```
# Clone this repository
git clone https://github.com/electron/electron-quick-start-typescript
# Go into the repository
cd electron-quick-start-typescript
# Install dependencies
npm install
# Run the app
npm start
```
Normal start
```
npm init
npm install electron
npm intall --save-dev @types/electron
npm install typescript --save
tsc --init
# Start buid
npm run build
npm run
```




#### Reference:
* https://github.com/electron/electron-quick-start-typescript
* https://mui.com
* https://www.electronjs.org
* https://www.typescriptlang.org
* https://github.com/coreybutler/nvm-windows