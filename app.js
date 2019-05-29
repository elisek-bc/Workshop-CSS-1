const sectionTitle = document.getElementsByClassName('section-title');
const imgWrapper = document.getElementsByClassName('image-wrapper');
TweenMax.from(sectionTitle,1,{x:"-100%"})
TweenMax.from(imgWrapper,2,{
    width:"0px",
    delay: 1
});
console.log('hello');

// Library: TweenMax
/*
TweenMax or TweenLite + .from(title,duration,{x:"-100%"})*/

