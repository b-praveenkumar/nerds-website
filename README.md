# This is a Nerds website made in React JS

Hello and welcome to the NERDS Website! This project was begun during a 2022 Microsoft Hackathon and handed off to NERDS and their UC Volunteers.  This README is intended to be the single source of truth to facilitate development.

## Resources

- **Microsoft Teams:** Initial communication was done on [Microsoft Teams](https://www.microsoft.com/en-us/microsoft-teams/download-app), and the NERDS Team is located [here](https://teams.microsoft.com/l/team/19%3a059ccztgOSY7wWZy9GhETpl0RrzGVP6GK9ruv0XQdZQ1%40thread.tacv2/conversations?groupId=586cb8fe-cb5b-4786-b7ee-27cdb4d980c4&tenantId=72f988bf-86f1-41af-91ab-2d7cd011db47).
  - Note that this project is 1 of 3 different initiatives.  The other 2 are focused around Mobile Apps and Databases.
  - There is a private Website channel you need to be added to.  Please contact Anastasiya Chapko for more info.
  - A recorded summary of progress can be found [here](https://teams.microsoft.com/l/message/19:059ccztgOSY7wWZy9GhETpl0RrzGVP6GK9ruv0XQdZQ1@thread.tacv2/1663951467040?tenantId=72f988bf-86f1-41af-91ab-2d7cd011db47&groupId=586cb8fe-cb5b-4786-b7ee-27cdb4d980c4&parentMessageId=1663951467040&teamName=NERDS%20Hack4Good%202022&channelName=General&createdTime=1663951467040).
- **Figma:** All pages are based off of Figma mockups.  Those can be located [here](https://www.figma.com/file/K65RBwFE4uPvggSIlqErCV/NERDS-Website?node-id=0%3A1).
  - A recorded walk-though of the Figma can be found [here](https://www.figma.com/file/K65RBwFE4uPvggSIlqErCV/NERDS-Website?node-id=0%3A1).  It also has helpful instructions for working with Figma in general.
- **React:** The Website is built in [React Native](https://reactnative.dev/).  This decision was made due to the relevance of React in the modern web environment as well as for the sake of development speed during the hackathon.
  - Here are some helpful tutorials we recommend for learning React (note some use slightly different versions, but the principles are the same):
    - [Hello World](https://reactjs.org/docs/hello-world.html)
    - [Intro](https://reactnative.dev/docs/getting-started)

## Dependencies

1. Node + NPM
   1. [Download](https://nodejs.org/en/download/) the latest Node version here (bundles with NPM).
2. *(Optional)* React Dev Tools extensions
   1. [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
   2. [Edge](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil)
   3. These allow developers to easily see and interact with React components live in the dev tools window

## How to run the app

1. Clone this repo to your machine
2. Open a terminal of your choosing
3. Navigate to the `nerds-website` directory (**NOTE:** it's a directory *inside* of the NERDS-WEBSITE repo :))
4. Run `npm install`
5. Run `npm start`
6. Navigate to `localhost:3000` in a browser of your choice

## Folder Structure

Let's follow this folder structure to keep things simple

```
project
│   README.md   
│
└───public
│   │   file011.txt
│   │   file012.txt
└───src
|   │   App.js // main file
|   │   App.css.css
|   │   App.test.js
|   │   index.css
|   │   index.js
|   │   reportWebVitals.js
|   │   setupTest.js
|   └───components // main dir for all the components 
|   └───assets // main dir for all images and website assets
```

## Component Info

### Activities Component

This is the component displayed if you use the /activities page of the NERDS website. The parent container in this component is activities.js. This component displays the white wrapper for activities, the filter categories and button, and the header. The individual activities are displayed using another component, activity-tile.js. This component is called in activities.js as it loops through the activities array. A new tile is created for each activity in the array, and the tile component takes an activity object as an argument which is uses to fill the tile with activity data.

The activity component also contains the logic for filtering activities. There are three checkboxes and a filter button that the user can use to filter activities. Checking or unchecking any checkbox will trigger a method at the beginning of the component called 'handleChange'. This method will construct a new activity array based on the filters provided. The updates to the activity list won't be applied until the user hits the filter button, which triggers a method called 'handleFilter'. This method will replace the activities array used by the component with the filtered array, and those changes will be rendered to the screen. 

The loop in activities.js created a new row for every two tiles. In the event of an odd number of activities, it will create an extra row to display the last tile alone. The logic of the loop has been commented in the activities.js file, as it's a little tricky to understand at first.

#### Activity Data
Right now, activity data is stored locally in an array in activities.js. Ideally, we would instead be retrieving activity information from a database so that updates could be made without manually changing code. Right now, the idea is that we will store data separately in a JSON file, import that data to the component, and use it in the same way which the local array is currently being used. This will allow for easier manual updates to data, and will maintain separation between the data source and the component which displays the data.

Many aspects of the UI (filtering and icon display, namely) depend on the data associated with each activity. In particular, the 'Focus' and 'Status' fields are used to display icons for each activity, and the 'Focus' field is used for filtering. When inputting data, make sure that fields are spelled correctly and only given approved values. Those values are listed below, and can be updated in the code if the need arises.

#### Approved Activity Fields
Each activity needs to have an associated name, description, status, focus, and goals. Name, description and goals are all open-ended and can be assigned any non-null value (nothing will crash if they are null, but the UI will look weird if they are). 

Focus only has three handled values right now: Creativity, Literacy and STEM. If these need to change in the future, then updates will need to be made to the filtering logic & UI, as well as to the 'focus_icon' selection in activity-tile.js. These values are not case-sensitive.

Status only has three values right now: Past, Future, and Active. If these need to be changed in the future, then updates would need to be made to the status_icon selection section of activity-tile.js. These values are not case-sensitive.

#### Deployment
Deployment of the files is done via GitHub Actions. There is a file called .github/workflows/azure-staticwebapp.yml that controls the building and pushing to an Azure Static Web App. To be able to connect the Azure Static Web App and GitHub, there is a secret in the GitHub repo called AZURE_STATIC_WEB_APPS_API_TOKEN that allows the connection.

Note for PR's, there will be a link to a dev environment of the website that you can use for testing purposes. Check the messages in the PR it should say something like "Azure Static Web Apps: Your stage site is ready! Visit it here: ".

#### DNS
We have setup DNS so that https://www.inspirethenerd.org points to the Azure static web page. The DNS record should point inspirethenerd.org to black-stone-0f3722410.3.azurestaticapps.net which is the CNAME for the Azure static web page.


#### TODO

The following pages or sections need to get created or updated:

Header
Footer
About Us
Update the Donate page to reflect what is in Figma
Programs
Get Involved
