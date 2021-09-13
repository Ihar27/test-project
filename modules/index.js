document.onload = function () {
  const content = document.querySelector('#content');
  const mainBtn = document.querySelector('button.btn');
  const counter = {
    btn: 0,
  };
  mainBtn.addEventListener('click', function () {
    const txt = document.createElement('p');
    counter.btn++;
    txt.innerHTML = `
    You push ${counter.btn} times`;
    content.appendChild(txt);
  });
};
