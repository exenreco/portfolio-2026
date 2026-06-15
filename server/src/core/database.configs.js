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
 *
 * last edited by: Exenreco Bell
 *
 * last edited date: June 6, 2024
 *
 * Description: This file contains the configuration settings for
 * connecting to a MongoDB database. It defines the database name,
 * port, username, and password, and constructs the connection
 * string using these values. The configuration is exported as a
 * module for use in other parts of the application.
 */

'use strict';

import { getMongoConnectionString } from "./functions.js";

const
name            = 'apre',
port            = 3000,
password        = 's3cret',
username        = 'apre_user',
DatabaseConfigs = {
  url:      getMongoConnectionString(username, password, name),// This is the connection string for MongoDB
  name:     name,     // This is the name of the database in MongoDB
  port:     port,     // This is the default port for MongoDB
  username: username, // This is the username for the database
  password: password, // This is the password for the database
}

export { DatabaseConfigs };
