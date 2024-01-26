import express from 'express';
import { getAPIResourceWithAuth } from '@plone/volto/helpers';

const HEADERS = [
  'content-type',
  'content-disposition',
  'cache-control',
  'x-sendfile',
  'x-accel-redirect',
];

function solrImageMiddlewareFn(req, res, next) {
  getAPIResourceWithAuth(req)
    .then((resource) => {
      // Just forward the headers that we need
      HEADERS.forEach((header) => {
        if (resource.headers[header]) {
          res.set(header, resource.headers[header]);
        }
      });
      res.send(resource.body);
    })
    .catch(next);
}

export default function solrImagesMiddleware() {
  const middleware = express.Router();

  middleware.all(['**/@@solr-images/*'], solrImageMiddlewareFn);
  middleware.id = 'solrImageResourcesProcessor';
  return middleware;
}
