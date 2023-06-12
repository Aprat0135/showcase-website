## Task List ##

A rough outline on how to get started.

### 1. install git ###
* download and install the latest stable version 'https://git-scm.com/download/win'
### 2. install node.js ###
* download a LTS version 'https://nodejs.org/en'
* check if it's installed by opening a command terminal and execute `node -v`
### 3. setup Docker ###
* download Docker Desktop
* enable wsl2
### 4. install VSCode ###
* https://code.visualstudio.com/
* when asked install relevant extensions e.g. Docker, WSL
### 5. setup workspace ###
* create workspace directory
* clone git-repo
### 6. start the program
* run either `npm start`
* or `docker build -t react-container:dev .` and then `docker run -it --rm -p 3000:3000 react-container:dev`
* open http://localhost:3000/ in your browser
