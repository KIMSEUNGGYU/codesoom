/* @jsx createElement */

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  // DOM 속성 추가 및 이벤트 핸들러 등록 가능
  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLocaleLowerCase()] = value;
  });

  // DOM 요소 제어
  children.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });

  return element;
}

const operatorFunctions = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
  '/': (x, y) => x / y,
};

function defaultFuncitons(x, y) {
  return x || y;
}

function calculate(operator, accumulator, number) {
  return (operatorFunctions[operator] || defaultFuncitons)(accumulator, number);
}

const initialState = {
  accumulator: 0,
  number: 0,
  operator: '',
};

function render({ accumulator, number, operator }) {
  function handleClickNumber(value) {
    render({
      accumulator,
      number: number * 10 + value,
      operator,
    });
  }

  function handleClickReset() {
    render(initialState);
  }

  function handleClickOperator(value) {
    render({
      accumulator: calculate(operator, accumulator, number),
      number: 0,
      operator: value,
    });
  }

  const element = (
    <div id="hello" className="greeting">
      <p>
        {number || accumulator}
      </p>
      <p>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((i) => (
          <button type="button" onClick={() => handleClickNumber(i)}>
            {i}
          </button>
        ))}
      </p>
      <p>
        {['+', '-', '*', '/', '='].map((operation) => (
          <button type="button" onClick={() => handleClickOperator(operation)}>
            {operation}
          </button>
        ))}
        <button type="button" onClick={handleClickReset}>
          Reset
        </button>
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render(initialState);
