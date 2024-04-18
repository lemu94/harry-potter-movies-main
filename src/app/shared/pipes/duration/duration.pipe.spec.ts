import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  let pipe: DurationPipe;
  beforeEach(() => {
    pipe = new DurationPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('duration must return format', () => {
    const mockFormat = '1h 5min';
    expect(pipe.transform('65')).toEqual(mockFormat);
  });
  it('pipe must return string ', () => {
    expect(typeof pipe.transform('65')).toBe('string');
  });
});
