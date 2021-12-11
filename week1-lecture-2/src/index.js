function createElement(tagName, ...children) {
  const element = document.createElement(tagName);

  children.forEach((child) => element.appendChild(child));

  return element;
}

document.getElementById('app').appendChild(
  createElement(
    'div',
    createElement(
      'p',
      document.createTextNode('Hello, world! | '),
      ...[1, 2, 3].map((i) => (
        document.createTextNode(`Hello world! ${i} | `)
      )),
    ),
    createElement(
      'p',
      document.createTextNode('Hi'),
    ),
  ),
);
