const slider=document.querySelector('.slider-container');
const prevBtn=document.querySelector('.prev');
const nextBtn=document.querySelector('.next');
const sliderImages=document.querySelectorAll('.slider-image');
let currentIndex =0;
const imageWidth =sliderImages[0].offsetWidth;

prevBtn.addEventListener('click',() =>{
  currentIndex =(currentIndex-1+sliderImages.length)% sliderImages.length;
  slider.style.transform=`translateX(-${currentIndex* imageWidth}px)`;

  
});

const sliders =document.querySelector('.slider-container');
const sliderImage =document.querySelectorAll('.slider-image img');
const saladImg =document.querySelector('.salad img');
const countSpan=document.querySelector('.sp span');

let current = 0;
let count = 0;

sliderImage.forEach((img,index) =>{
  img.addEventListener('click',()=>
  {
    current = index;
    updateSlider();
    updateCount();

  });
});
function updateSlider(){
  const imageWidth = sliderImage[0].offsetWidth;
  sliders.style.transform =`translateX(-${current* imageWidth}px)`;
}
function updateCount(){
  const currentsrc = sliderImage[current].src;
  saladImg.src = currentSrc;
  count++;
  countSpan.textContent=count;
}