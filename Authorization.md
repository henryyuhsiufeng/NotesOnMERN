# OAuth Flow With Google

![OAuth diagram](/images/OAuth.png)

## Client
- User will click a link that redirects them to a route that we will respond accordingly in our servers. 

## Server
- Our running express server

## Google
- Google's servers

# Overview of Passport JS

## Passport library Components
- Passport: General helpers for handling auth in Express apps.
- Passport Strategy: Helpers for authenticating with one very specific method (email/password, Google, Facebook, etc)
    - A strategy is a module that helps with authenticating with one certain provider
    
## Visual Understanding
![OAuth diagram](/images/passportjs.png)

- A helper library that automates most of the OAuth flow

## Common User Issues: 
1. Does not automate the entire OAuth flow.
    - Makes it hard to understand what is going on. 
2. Confusion with the structure of the library