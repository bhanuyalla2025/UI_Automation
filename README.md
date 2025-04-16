# README #

### Console-UI-Automation ###

Console UI Test Automation build with 

| Cypress 		|
| BDD 			|
| Java Script	|
| POM			|

### Prerequisites ###

Make sure you have installed the following prerequisites on your development machine:

| OS      | Node                                       |
|---------|--------------------------------------------|
| Windows | `winget install OpenJS.NodeJS.LTS`         |
| macOS   | `brew install node@18`                     |

### How do I get set up? ###

* Link  : 
* Do git clone into your machine

### Contribution guidelines ###

* Cd to cloned repo
* Do git pull
* Make sure master is update date
* Create a branch from master
* Work on branch 
* Add and Commit your changes
* Add reviewer and get it approved
* And Merge your changes to master
* Delete your Branch in local as in upstreams 
* Do fllow same steps every time 

###  Executing The Tests ### 

- Build the project

```shell
npm install
or 
npm i
```

- Run the test.

```shell
npm run clean
npx cypress run --env TAGS="@AmphoraProducts" --headed
npx cypress run --env TAGS="@APITesting"
npx cypress run --e2e --spec **/*.feature --headed

OR

npx cypress run --headed
```

- Open cypress runner

```shell
npx cypress open
```

### Who do I talk to? ###
