import { NumberThousandsPipe } from './number-thousands.pipe';

describe('NumberThousandsPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberThousandsPipe();
    expect(pipe).toBeTruthy();
  });
});
