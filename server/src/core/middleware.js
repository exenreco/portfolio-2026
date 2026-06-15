/**
 * Author: Exenreco Bell
 *
 * Date: June 6, 2026
 *
 * File: middleware.js
 *
 * Description: Server Error handling middleware functions.
 *
 * Last updated by: Exenreco Bell
 *
 * Last updated on: June 6, 2026
 *
 * Version: 1.0
 */

'use strict';

// Middleware import statements
import createError from 'http-errors';

/**
 * Not Found Handler Middleware
 *
 * This middleware function is for handling 404 errors in an Express application. This
 * middleware should catch any requests that do not match any routes and creates
 * a 404 Not Found error. The error is then passed to the next middleware function
 * for further handling.
 *
 * Usage:
 *  app.use(notFoundHandler) {
 *    Example: // Define routes
 *      app.get('/example', (req, res) => {
 *        res.send('Example route');
 *      });
 *
 * // 404 error handling middleware
 * app.use(notFoundHandler);
 *
 * In this example, if a request is made to a route that does not exist, the
 * notFoundHandler middleware will create a 404 Not Found error and pass it to
 * the next middleware function.
 */
function notFoundHandler(req, res, next) {
  const error = createError(404, 'Not Found');
  next(error);
};

/**
 * Error Handler Middleware
 *
 * This middleware function is for for handling errors in an Express application. This
 * middleware should catch any errors that occur during the request-response cycle
 * and sends a JSON response with the error details. The response includes the error
 * type, status, message, and stack trace (if in development mode).
 *
 * Usage:
 *  app.use(errorHandler);
 *    Example: // Define routes
 *      app.get('/example', (req, res) => {
 *        throw new Error('Example error');
 *      });
 *
 * // Error handling middleware
 * app.use(errorHandler);
 *
 * In this example, if an error occurs in the '/example' route, the error handling
 * middleware will catch it and send a JSON response with the error details.
 */
function errorHandler(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    type: 'error',
    status: err.status,
    message: err.message,
    stack: req.app.get('env') === 'development' ? err.stack : undefined
  });
}

// Export the middleware functions
export { notFoundHandler, errorHandler };
