# TSWebFrameworkPlayground
Just an small typescript based framework to play with

## Based on this Class from Udemy Lesson 13

This small project is based on [this](https://www.udemy.com/course/typescript-the-complete-developers-guide/learn/lecture/15066880#overview) lesson on the Typescript the complete developers guid course on Udemy.

# Commands and dependencies 

* ```parcel index.html```

## Installing json server

* ```npm install -g json-server```
We have to point that to a JSON file
* Just create ```db.json``` and add some data to it.
* In a new terminal run ```json-server -w db.json``` and get the server up:

```
➜ json-server -w db.json

  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3000/users

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...
  ```

Then you can add to the scripts in ```package.json```

```JSON
  "scripts": {
    "start:db": "json-server -w db.json",
    "start:parcel": "parcel index.html"
  }
```

## Axios

```npm install axios @types/axios```

## Enabling CORS

To avoid getting an error related to ```ORS (Cross-Origin Resource Sharing) policy``` in the browser, you can install and use ```cors```

```npm install cors```
And in index.ts:
```Javascript
import express from 'express';
import cors from 'cors';

const app = express();

// Enable CORS for all routes
app.use(cors());
```

# Classes types

## Model Classes

To Handle data, used to present Users, Blog Post, Images, etc.


### Building approach

* Build User as a mega class with tons of methods
* Refactor User to use composition
* Refactor User to be a reusable class that can represent any piece of data, not just a User.

## View Classes 
Handle HTML and events caused by the user (like clicks).

# Extra Notes

Native way to assign a set of field values to update an instance. 
```Object.assign(this.data, update);```

## Optional fields
To add flexibility to interfaces regarding the optional nature of some instances, just add ```?``` after the field name:

```Javascript
interface UserProps {
  name?: string;
  age?: number;
}
```





