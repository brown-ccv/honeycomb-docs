---
id: firebase
title: Set up Firebase
---

Honeycomb comes with methods and configurations for easy firebase and firestore cloud storage set up. Please use this section to configure firebase hosting services and firestore cloud storage.

## Getting Started

Follow these steps to create a firebase project and link it with the current task.

#### 1. Initializing firebase account and project
- Create and login to a firebase account on [this page](https://firebase.google.com/).
- Create a firebase project by clicking add project and enter a Project Name.

#### 2. Linking firebase to task
- Install [Firebase CLI](https://firebase.google.com/docs/cli) on your local computer.
- Login to firebase using `firebase login` command in the terminal.
- Navigate to the `.firebaserc` file home directory and edit the `"default"` field with the project name given in part 1.
    ```
    {
        "projects": {
            "default": "<your project name>"
        }
    }   
    ``` 
#### 3. Copying web app credentials.
- Navigate to the [firebase console](https://console.firebase.google.com/) and select the project.
- Click `Add App` and choose to create a wep app. Enter app name and click `Register App`.
- Copy these fields in the firebase SDK to the corresponding variable in the `.env.firebase` file in the `env` folder:
  ```
    REACT_APP_apiKey=
    REACT_APP_authDomain=
    REACT_APP_projectId=
    REACT_APP_storageBucket=
    REACT_APP_messagingSenderId=
    REACT_APP_appId=
  ```
Firebase is now set up!

## Setting up firestore.

Honeycomb includes a set of security rules to store participant data in firestore. Follow these steps to configure firestore

- Navigate to the current project in the developer console and select `Firestore Database` from the sidebar.
- Click `Create Database`, select `production mode` and choose the current location for the cloud storage bucket.
- Navigate to the `Rules` tab once the database is created then copy the code that is in the `firestore.rules` file.

Firestore is now set up. To add an authorized participant, create a collection named `registered_studies`, add a study with the study ID as the document name in that collection. For each registered study, add an array field named `registered_participants` where each element in the array will be an authorized participant for that study.