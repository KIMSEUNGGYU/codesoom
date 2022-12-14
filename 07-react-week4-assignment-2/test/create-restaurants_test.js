Feature('Create restaurant');

const restaurant = {
  name: '마녀주방',
  type: '한식',
  address: '서울시 강남구',
};

Scenario('이름, 분류 그리고 주소를 입력한 후 확인을 누르면 레스토랑이 추가가 됩니다.', ({ I }) => {
  I.amOnPage('/');

  const { name, type, address } = restaurant;

  I.fillField('input[name=name]', name);
  I.fillField('input[name=type]', type);
  I.fillField('input[name=address]', address);

  I.click('추가');

  I.see(name);
  I.see(type);
  I.see(address);
});
