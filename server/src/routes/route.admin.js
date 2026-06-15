import express from 'express';
import bcrypt from 'bcryptjs';
import { ObjectId } from 'mongodb';
import { DatabaseConnection as mongoClient } from '../core/database.js';

const Route = {
  url: ['/admin', '/dashboard'],
  router: express.Router(),
  saltRounds: 10
};

Route.router.get('/', async (req, res, next) => {});
Route.router.post('/', (req, res, next) => {});
Route.router.get('/:id', (req, res, next) => {});
Route.router.put('/:id', (req, res, next) => {});
Route.router.delete('/:id', (req, res, next) => {});

export { Route };
