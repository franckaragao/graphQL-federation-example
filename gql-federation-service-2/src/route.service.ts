import { Injectable } from '@nestjs/common';
import { Site } from './site.type';
import { Route } from './route.type';
const MOCK = [
  {
    id: 4,
    name: 'b1-to-b1',
    velocity: '5GB',
    status: 'ACTIVE',
    type: 'FTT',
    idSiteA: 3,
    idSiteB: 1,
    siteA: {
      id: 3,
    },
  },
  {
    id: 5,
    name: 'c1-to-c1',
    velocity: '10GB',
    status: 'DOWN',
    type: 'CTT',
    idSiteA: 2,
    idSiteB: 3,
    siteA: {
      id: 2,
    },
  },
];
@Injectable()
export class RouteService {
  findById(id: number): Route {
    return MOCK.find((i) => i.id == id);
  }

  findAll(): Route[] {
    return MOCK;
  }
}
