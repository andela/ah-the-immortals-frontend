import sampleReducer from '../sample.reducer';
import SAMPLE_ACTION from '../../constants/actionTypes';

describe('tests', () => {
  it('returns a sample action ', () => {
    expect(sampleReducer([], {type: SAMPLE_ACTION}).sample).toEqual('Sample action');
  });
  it('returns original state', () => {
    expect(sampleReducer([], {type: 'TYPE'})).toEqual([]);
  });
  test('function exists', () => {
    expect(sampleReducer([], {type: 'TYPE'})).not.toBe(undefined);
  });
});
