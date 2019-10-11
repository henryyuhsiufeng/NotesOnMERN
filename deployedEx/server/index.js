// import common js modules
const express = require('express');
// create a running express app. This sets up the listener for 
// incoming request that are to be routed to route handlers.
const app = express();

// '/' route handler
app.get('/', (req, res)=> {
    // passing into res.send() and object
    res.send({hi: 'there' });
});

// Listen for incoming traffic on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);

// Breakdown
/*
[app][get]['/'][req][res][res.send({hi: 'there'})]
[ 1 ][ 2 ][ 3 ][ 4 ][ 5 ][          6            ]

1.) Express App to register this route handler with. It is the underlying express server.
2.) Watch for incoming requests with this method
3.) Watch for requests trying to access '/'
4.) Object representing the incoming request
5.) Object representing the outgoing response
6.) Immediately send some JSON back to who ever made this request
*/
