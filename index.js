const images = document.getElementsByClassName("imageClass")
        const dots = document.getElementsByClassName("dot")

        function currentImage(n){
            for(let i = 0; i < images.length;i++){
                images[i].classList.remove("show")
            }
            for(let i = 0; i < dots.length;i++){
                dots[i].classList.remove('active')
            }

            images[n - 1].classList.add("show")
            dots[n - 1].classList.add("active")
        }

        currentImage(1)


        let imageIndex = 1;
     let interval;

     function autoSlide(){
      imageIndex++;
      if(imageIndex > images.length){
        imageIndex = 1;
      }
      currentImage(imageIndex)
     }

     intervalId = setInterval(autoSlide, 3000);

  document.querySelector('.imageshow').addEventListener('mouseover', () => {
  clearInterval(intervalId);
});

document.querySelector('.imageshow').addEventListener('mouseout', () => {
  intervalId = setInterval(autoSlide, 3000);
});
   