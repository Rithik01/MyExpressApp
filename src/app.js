// You can add this project on github using secure protocol such as ssh key//
/////////////////////////// Let's understand what is SSH Key ///////////////
////// Secure Shell or SSH is used to create a secure channel between a local and remote computer. While SSH is commonly used for secure terminal access and file transfers, it can also be used to create a secure tunnel between computers for forwarding other network connections that are not normally encrypted ///////
///// First in gitBash we'll check whether our project is git initialized or not so we'll type git status after entering the project folder. If it's not then type git init then again see git status then all ur files will be shown and these all aare untracked files i.e even our local git has no idea about them and note we'll not add node_modules coz it is very large and if other developer wants to work on it then he/she will simply type npm install and after that in ur project folder simpley create a file known as [.gitignore]. Now in .gitignore we will keep that files that we want that our git should not track and we will simply put node_modules inside .gitignore file. Now u'll notice that node_modules folder color has changed and git will simply ignore it. Now we need to add all files to your local system so that we can track it so for it just type [git add .] and then commit the changes by typing git commit -m "project name first commit"/////
// Now create a new repository in github then in ur gitbash type git remote add origin https://github.com/Rithik01/MyExpressApp.git and then type git remote then you'll get origin now ur project is connected online
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
// const port = 3000
// When u host a website u'll use environment variables as done below
// It will check below will it take process.env.PORT or 3000 one. So if u'll host then it will take environment one otherwise 3000 one
const port = process.env.PORT || 3000

const staticPath = path.join(__dirname, "../public" );
const templatePath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


app.set("view engine", "hbs")
app.set('views', templatePath)
hbs.registerPartials(partialsPath)


app.use(express.static(staticPath))

app.get('/', (req, res) => {
   res.render("index") 
})

app.get('/about', (req, res) => {
   res.render("about") 
})

app.get('/weather', (req, res) => {
   res.render("weather") 
})
app.get('*', (req, res) => {
   res.render("404", {
     errorMsg: 'Oops! Page Not Found!' 
   }) 
})

app.listen(port, () => {
console.log(`Listening to the port at ${port}`);
})