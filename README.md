This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting StartedThis is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
# install dependencies
npm install
# run dev environment
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

The simulated vehicles' data REST API endpoint can be accessed on [http://localhost:3000/api/vehicles](http://localhost:3000/api/vehicles). This endpoint can be edited in `pages/api/vehicles.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## HERE Map API

The map is a basic implementation of the Here Map JavaScript SDK. The HERE API KEY has been hardcoded for convenience but for development purposes should be contained in a .env file and loaded accordingly in the code via a process.env call. This API key can be edited in `components/Map.js` line 18.

## Assumptions & Consideration

- This application is a PoC rather than a complete solution. It could be used to demonstrate to the stakeholders features and capability of the project, but it should not be used in a production environment.

- There need to be a proper CI/CD pipeline in place for testing and deployment, ideally a K8S cluster & Docker or CloudFoundry for containerization and delivery alongside GitLab, Jenkins or CircleCI. Testing should be conducted via Enzyme for component testing and possible Selenium(Selenide) & Cucumber for proper BDD.

- Being a data driven application, data stream should be possible handled mainly server-side possibly via a dedicated backend process and store vehicles' data. gRPC and protoBuf would be suitable for such task. Once the data has been adequately handled, it should be accessible to client application via a well-documented REST API (possibly build via Swagger and managed via Apigee). This gRPC and REST combo would introduce data integrity measures and ensure constant data flow for the backend and a responsive and scalable front end solution. 

- I used Next.js to ensure scalability. This approach enables us to implement server-side rendering (ssr) and automatic code splitting which increases response time and overall speed of the application. 

- The application has been built to fetch update vehicle information at a set interval, in order to ensure the dashboard displays the most up to date data.