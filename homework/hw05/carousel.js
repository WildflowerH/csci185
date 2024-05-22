const photos = [
    "images/img1-600x400.jpg",
    "images/img2-600x400.jpg",
    "images/img3-600x400.jpg",
    "images/img4-600x400.jpg",
    "images/img5-600x400.jpg",
    "images/img6-600x400.jpg",
    "images/img7-600x400.jpg",
    "images/img8-600x400.jpg",
    "images/img9-600x400.jpg",
    "images/img10-600x400.jpg"
];
let idx = 0;


/* This function should:
    (1) display the new image inside of the .current-photo container, and 
    (2) update the caption inside of the .caption paragraph
*/
function showImage() {
    console.log("Show image:", idx);
    const img = document.querySelector("#the_image");
    img.src = photos[idx];
    const caption = document.querySelector(".caption");
    caption.innerHTML = "Image " + (idx+1) + " of " + photos.length;
}
//reach into the DOM and target selector #the_image
//then change the image src to
//photos[idx]
//also target the caption text and change it too!
//TO DO: target the caption text and change it

/* This function should set the idx variable 
   to one greater than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to one less than the length of 
   the array, set idx to 0.
*/
function forward() {
    //if it gets to 9, set it to 0
    idx += 1;
    if(idx===10){
        idx=0;
    }
    showImage();
}


/* This function should set the idx variable 
   to one less than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to the beginning, set idx to
   one less than the length of the array.
*/
function back() {
    //if it gets to less than 0, set it to 9
    idx -= 1;
    if(idx===-1){
        idx=9;
    }
    showImage();
}
