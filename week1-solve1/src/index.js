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

function render({ count }) {
  function handleClick() {
    
    render({
      count: count + 1
    });
  }
  
  function handleClickNumber(value) {
    // count = value;
    render({ 
      count: value
    });
  }
  


  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button type="button" onClick={handleClick}>
          Click me!
          (
          {count}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => handleClickNumber(i)}>
            {i}
          </button>
        ))}
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render({ 
  count: 0
});
