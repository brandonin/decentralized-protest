# Development on this project has ceased for the fact that iOS does not allow push notifications via web applications. This was the most fundamental piece of the application and I will be looking at disseminate information through Facebook Messenger that will also allow a template to provide resources to protestors.

# Decentralized Protest

[![Netlify Status](https://api.netlify.com/api/v1/badges/3c2c5540-33ff-4697-9f5a-ad71a2f95cb6/deploy-status)](https://app.netlify.com/sites/decentralized-protest/deploys)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/brandonin/decentralized-protest)

The goal of this project is to allow anyone to be able to fork this and quickly spin up a PWA for any protest so that community organizers have a twitter-esque application that is unbounded by the app stores and uncensorable by social media.

Functionality that will be included:

1. An infinite scrolling timeline.
2. Push Notifications.
3. Offline mode that queues messages and adds them to the timeline as you receive a connection
4. A shareable QR code to quickly share the application.
5. Easily setup through netlify, lambdas and a database I haven't figure out yet (faunadb or maybe just RDS?).

In order to host your own application all you need to do is fork it and connect master to your netlify build.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
