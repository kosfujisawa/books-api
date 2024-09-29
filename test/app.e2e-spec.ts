import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication, ModuleMetadata } from '@nestjs/common';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = await (
      await Test.createTestingModule({
        imports: [AppModule],
      } as ModuleMetadata).compile()
    )
      .createNestApplication()
      .init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer()).get('/').expect(404);
  });
});
