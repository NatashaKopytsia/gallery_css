/*Name this external file gallery.js*/

function upDate(previewPicture){
  document.getElementById('image').innerHTML = previewPicture.alt;
  document.getElementById('image').style.backgroundColor = "#8e68ff";
  document.getElementById('image').style.backgroundImage = "url(" + previewPicture.src + ")";  
}

function unDo(){
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
    document.getElementById('image').style.backgroundColor = "#8e68ff";
    document.getElementById('image').style.backgroundImage = "url('')";
}