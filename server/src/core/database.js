/**
 * Title: database.configs.js
 *
 * Description: MongoDB connection file
 *
 * Author: Exenreco Bell
 *
 * Date: June 6, 2024
 *
 * Version: 1.0
 */

'use strict';

import MongoClient from 'mongodb';

import { DatabaseConfigs } from './database.configs.js';

// Check if the MongoDB connection string is defined
if(!DatabaseConfigs || typeof DatabaseConfigs !== 'object') {
  throw new Error('MongoDB connection string is not defined in server.configs.js');
}

// Create the Database connection function
const DatabaseConnection = async (operations, next) => {
  try {

    // Destructure the database configuration values and create a MongoDB client
    const { url, name, port, username, password } = DatabaseConfigs;

    // Create a MongoDB client using the connection string
    const client = url && typeof url === 'string' ? await MongoClient(url) : null;

    if(!client)
      throw new Error('MongoDB client could not be created with the provided connection string');

    console.log('Connecting to MongoDB Atlas...', url);

    // Connect to the MongoDB cluster
    const Connection = await client.connect(url);

    // Select the database
    const db = Connection.db(name);

    console.log('Connected to MongoDB Atlas')

    // Execute the passed in operation
    await operations(db)
    console.log('Operation was successful')

    // Close the connection
    await Connection.close()
    console.log('Closing connection to MongoDB Atlas...')
  } catch (err) {
    // Catch any errors and throw an error 500 status
    const error = new Error('Error connecting to db ' + err) // NOTE: updated this during sprint 4
    error.status = 500

    // Log out the error
    console.log('Error connecting to db', err)

    next(error)
  }
};

export { DatabaseConnection };
