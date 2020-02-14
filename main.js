// var main = function() {
//   $('#image-url').keyup(function() {
//     var url = $(this).val();
//     $('.thumbnail img').attr('src', url);
//   });
//   $('#top-text').keyup(function() {
//     var top = $(this).val();
//     $('.top-caption').text(top);
//   });
//   $('#bottom-text').keyup(function() {
//     var bottom = $(this).val();
//     $('.bottom-caption').text(bottom);
//   });
// };

// $(document).ready(main);

document.addEventListener('DOMContentLoaded', () => {
  // init varaibles
  let img = document.getElementById('Image'),
    top = document.getElementById('Top'),
    btm = document.getElementById('Bottom'),
    meme = document.querySelector('.img-row');

  img.addEventListener('keyup', function() {
    let url = img.value;
    let memeImg = document.querySelector('.img-box img');
    memeImg.setAttribute('src', url);
  });

  top.addEventListener('keyup', function() {
    let topText = top.value;
    document.querySelector('.top-text').innerText = topText;
  });

  btm.addEventListener('keyup', function() {
    let btmText = btm.value;
    document.querySelector('.bottom-text').innerText = btmText;
  });

  document.getElementById('form').addEventListener('submit', function(evt) {
    evt.preventDefault();
    let url = img.value;
    let topText = top.value;
    let btmText = btm.value;

    let div = document.createElement('div');
    let newMeme = document.createElement('img');
    let topH = document.createElement('h1');
    let btmH = document.createElement('h1');
    let removeButton = document.createElement('button');

    removeButton.innerText = 'X';
    removeButton.setAttribute('class', 'remove');
    removeButton.setAttribute('onclick', 'removeImg(event);');
    div.setAttribute('class', 'meme img-box col-md-6');
    newMeme.setAttribute('src', url);
    topH.setAttribute('class', 'top-text');
    btmH.setAttribute('class', 'bottom-text');
    topH.innerText = topText;
    btmH.innerText = btmText;

    div.appendChild(newMeme);
    div.appendChild(topH);
    div.appendChild(btmH);
    div.appendChild(removeButton);
    meme.appendChild(div);

    img.value = '';
    top.value = '';
    btm.value = '';
  });
});
function removeImg(event) {
  event.target.parentNode.remove();
}
