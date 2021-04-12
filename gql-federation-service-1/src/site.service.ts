import { Injectable } from '@nestjs/common';
import { Site } from './site.type';
const MOCK = [
  {
    id: 1,
    name: 'Parque do Pvo',
    status: 'ACTIVE',
    origin: 'SERVICE_1',
  },
  {
    id: 2,
    name: 'Vila do Artesão',
    status: 'ACTIVE',
    origin: 'SERVICE_1',
  },
  {
    id: 3,
    name: 'Sítio São João',
    status: 'ACTIVE',
    origin: 'SERVICE_1',
  },
];
@Injectable()
export class SiteService {
  findById(id: number): Site {
    return MOCK.find((i) => i.id == id);
  }

  findAll(): Site[] {
    return MOCK;
  }
}
