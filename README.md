<img src="/croki-verde.PNG" alt="croki-verde" width="300"/>

# CRM Essentials

I have gathered the main features I find necessary for any business to run properly. Who are your clients? What projects are you working on? How much I am getting paid this month? If we can't get those questions answered quickly,  we're on a bad path. This project is looking to solve those simple but essential matters.

## The story behind it

I once tried to create an ERP for architects and designers - a very niched application. Back then I launched an MVP using low-code tools (Zoho Creator), but the project didn't go on. So I decided to finally build it from scratch using the tools I love.

## Getting started

You can run it locally by running a NextJS server:

Install dependencies and then run the production environment:

```bash
# install npm packages
npm install

# run development environment
npm run prod
```

Also check the lattest production version at: [croki-crm.vercel.app](https://croki-crm.vercel.app/)

## User Stories

- [X] Setup up the project
- [X] As a client, I want to register my clients, so I can see them sorted alphabetically
- [ ] As a client, I want to register my projects, so I can relate them to the clients
- [ ] As a client, I want to register my invoices, so I can each project profitability

No stories left? You should create a pool on LinkedIn for new features suggestions.

## Future Tasks
- [ ] test: Add JEST tests to client services
- [ ] docs: Add Swagger UI with JSDoc specs

### Front-end

- [X] feat: Clicking "New client" button opens a modal for insertion
- [X] feat: Clients module reads data from DB with API
- [X] feat: Clients module opens an Update modal
- [X] feat: Client module opens a Create modal
- [X] feat: Client module delete button

### Back-end

- [X] build: Setup Firebase to the project
- [X] build: Setup Firestore to the project
- [X] test: Add JOI validation to inputs
- [X] feat: Clients module API with CRUD methods
