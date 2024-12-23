const errorMiddleware = (err, req, res, next) => {
    console.log('Here is an middleware callback');
    const statusCode = res.statusCode =  500 ; 
    res.status(statusCode); // Set the status code to the response
    res.json({message: err.message, stack: process.env.NODE_ENV === 'development' ?  err.stack:null}); // Send a JSON response with the error message and stack trace
}

    module.exports = errorMiddleware; // Export the errorMiddleware function