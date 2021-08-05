var quote = document.querySelector(".quote");

quote.addEventListener("click", displayMessage);

function displayMessage(event){
  const btn = document.getElementsByClassName('.my-button');
  btn.disabled = true;

  console.log("Hello");
  event.preventDefault();
  //Add text
  const info = document.createElement('li' );
  info.innerText = "My name is Mayra Ochoa I'm 26 years old";
  info.classList.add('my-info');
  quote.appendChild(info);

  //Add image
  const createIMG = document.createElement('img');
  createIMG.setAttribute("src", "foof.jpg");
  createIMG.setAttribute("width", "304");
  createIMG.setAttribute("height", "228");
  createIMG.classList.add('createImage');
  quote.appendChild(createIMG);
}

   function disableButton() {
        var btn = document.getElementById('btn');
        btn.disabled = true;
    }