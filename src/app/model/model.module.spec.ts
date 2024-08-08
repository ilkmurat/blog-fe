///<reference path="model.module.ts"/>
import { ModelModule } from './model.module';

describe('ModelModule', () => {
  let modelModule: ModelModule;

  beforeEach(() => {
    modelModule = new ModelModule();
  });

  it('should create an instance', () => {
    expect(modelModule).toBeTruthy();
  });
});
