import * as functions from 'firebase-functions';
import * as express from "express";
const app  = express();


exports.app = functions.https.onRequest(app);