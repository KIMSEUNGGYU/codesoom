function add() {
  // TODO:
  return 4;
}

test('simple', () => {
  // assetion => A(actual)가 B(expect)여야한다.
//   expect(1 + 1).toBe(2);
  expect(add(1, 3)).toBe(4);
});

// Signature - name(add), parameters(x, y), return(result)

// TDD Cylce: RED - GREEN - REFACTORING
