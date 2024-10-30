import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('Testing div -- success', () => {
    const expected = 5;
    const got = mut.div(10, 2);
    expect(got).toBe(expected);
  });
  
  test('Testing div -- division by zero', () => {
    const got = mut.div(10, 0);
    expect(got).toBe(Infinity); // Change this if you want to handle division by zero differently
  });
  
  test('Testing div -- negative division', () => {
    const expected = -5;
    const got = mut.div(-10, 2);
    expect(got).toBe(expected);
  });
  
  test('Testing containsNumbers -- contains number', () => {
    const got = mut.containsNumbers("hello123");
    expect(got).toBe(true);
  });
  
  test('Testing containsNumbers -- no numbers', () => {
    const got = mut.containsNumbers("hello");
    expect(got).toBe(false);
  });
  
  test('Testing containsNumbers -- empty string', () => {
    const got = mut.containsNumbers("");
    expect(got).toBe(false);
  });
  
  test('Testing containsNumbers -- special characters', () => {
    const got = mut.containsNumbers("!@#");
    expect(got).toBe(false);
  });
  
  test('Testing containsNumbers -- number at start', () => {
    const got = mut.containsNumbers("1hello");
    expect(got).toBe(true);
  });
  
  test('Testing containsNumbers -- number at end', () => {
    const got = mut.containsNumbers("hello1");
    expect(got).toBe(true);
  });