var input;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


input = [];


document.getElementById('button').addEventListener('click', (event) => {
  input = getNumberOrString(document.getElementById('comments').value);
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = input;

  element_list.appendChild(new_li);

});
'';


var pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, picture_bank;


pic1 = 'pictures/pic1.jpg';
pic2 = 'pictures/pic2.jpg';
pic3 = 'pictures/pic3.jpg';
pic4 = 'pictures/pic4.jpg';
pic5 = 'pictures/pic5.jpg';
pic6 = 'pictures/pic6.jpg';
pic7 = 'pictures/pic7.jpg';
pic8 = 'pictures/pic8.jpg';
pic9 = 'pictures/pic9.jpg';
pic10 = 'pictures/pic10.jpg';
pic11 = 'pictures/pic11.jpg';
pic12 = 'pictures/pic12.jpg';
pic13 = 'pictures/pic13.jpg';
picture_bank = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13];
let element_images = document.getElementById('images');
let new_img = document.createElement('img');
new_img.setAttribute("src", picture_bank[0]);
new_img.setAttribute("id", 'image');

element_images.appendChild(new_img);


document.getElementById('button2').addEventListener('click', (event) => {
  let element_images2 = document.getElementById('images');
  element_images2.replaceChildren();
  picture_bank.push(picture_bank[0]);
  picture_bank.shift();
  let element_images3 = document.getElementById('images');
  let new_img2 = document.createElement('img');
  new_img2.setAttribute("src", picture_bank[0]);
  new_img2.setAttribute("id", 'image');

  element_images3.appendChild(new_img2);

});

document.getElementById('button1').addEventListener('click', (event) => {
  let element_images4 = document.getElementById('images');
  element_images4.replaceChildren();
  picture_bank.unshift(picture_bank.slice(-1)[0]);
  picture_bank.pop();
  let element_images5 = document.getElementById('images');
  let new_img3 = document.createElement('img');
  new_img3.setAttribute("src", picture_bank[0]);
  new_img3.setAttribute("id", 'image');

  element_images5.appendChild(new_img3);

});
true;
