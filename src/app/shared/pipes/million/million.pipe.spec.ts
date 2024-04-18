import { MillionPipe } from './million.pipe';

describe('MillionPipe', () => {
  let pipe: MillionPipe;

  beforeEach(() => {
    pipe = new MillionPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('value must return format value', () => {
    const mockvalue = '$20 million';

    expect(pipe.transform('20')).toEqual(mockvalue);
  });

  it('value return must be string', () => {
    expect(typeof pipe.transform('20')).toBe('string');
  });
});
