# OAuth Flow With Google

## Visual Overview
![OAuth diagram](/images/OAuth.png)

## Client
- User will click a link that redirects them to a route that we will respond accordingly in our servers. 

## Server
- Our running express server

## Google
- Google's servers

# Overview of Passport JS

## Access Token
- Allows our server to take identifying user information and store it within our database. 

# Implementation of Passport JS

## Passport library Components
- Passport: General helpers for handling auth in Express apps.
- Passport Strategy: Helpers for authenticating with one very specific method (email/password, Google, Facebook, etc)
    - A strategy is a module that helps with authenticating with one certain provider

## Visual Understanding
![OAuth diagram](/images/passportjs.png)

- A helper library that automates most of the OAuth flow

## Installation of Passport JS
- npm install --save passport passport-google-oauth20

## Enabling Google OAuth API
- console.developers.google.com
1. Create new project
2. Name project: (something relevant)-dev or without dev
3. Enable the google OAuth API (buried in google+)
4. Create a new API credential
    - OAuth client ID
    - Configure consent screen (When user grants our application access to their account information)
    - Fill out product name
    - Select application type

## Securing API Keys
clientID: Public token - we share this with the public. It identifies our application to Google services

clientSecret: Private token - we don't want anyone to see this! 

- Implementation: 

## Testing OAuth
Make a route handler that kicks in the OAuth flow. Google checkts the redirect ahead of time to prevent malicious websites from taking advantage.

# Common User Issues/Debugging: 
1. Does not automate the entire OAuth flow.
    - Makes it hard to understand what is going on. 
2. Confusion with the structure of the library

## Fixing redirect URI wildcard issue
Google has made a number of changes to the OAuth credential's restrictions, and no longer allows wildcards in the redirect URI field.

## Errors with routing
- Cannot GET /auth/google/callback
    - Means your server is not set up properly to handle the route '/auth/google/callback'

### Solution:
Since the main goal of using http://localhost:5000/* was to show the redirect error a few lectures later,  we can do one of two things here:
1. Leave the authorized URI Redirect blank, since we will be fixing this later.
2. Enter http://localhost:5000/auth/google/callback now, since that is what it will be changed to in a later lecture.

