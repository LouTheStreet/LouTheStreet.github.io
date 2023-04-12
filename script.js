window.addEventListener('load', function() {
  var loader = document.getElementById('loader');
  loader.style.transition = 'transform 1s ease-in-out';
  loader.style.transform = 'translateY(100%)';
  loader.addEventListener('transitionend', function() {
    document.body.style.overflow = 'auto';
  });
});











const aboutDiv = document.querySelector('.about');
const mainDiv = document.querySelector('main');

aboutDiv.addEventListener('click', () => {
  const mainDivPosition = mainDiv.getBoundingClientRect().top + window.pageYOffset;
  const newPosition = mainDivPosition - 80;

  window.scrollTo({
    top: newPosition,
    behavior: 'smooth'
  });
});





window.addEventListener("scroll", function() {
  var container = document.querySelector("#container");
  container.classList.toggle("scroll", window.scrollY > 0);
});

let toggle = document.querySelector(".toggle");
let body = document.querySelector("body");

toggle.addEventListener('click', function(){
  body.classList.toggle('open')
});



/* ----- Fullscreen / Close ----- */
const medias = document.querySelectorAll(".mosaique img, .mosaique video");
let index = -1;

medias.forEach((media, i) => {
  media.addEventListener("click", () => {
    index = i;
    const fullscreen = document.createElement("div");
    const mediaFullscreen = media.cloneNode();
    const close = document.createElement("div");
    const closeIcon = document.createElement("i");
    const arrowLeft = document.createElement("div");
    const arrowLeftIcon = document.createElement("i");
    const arrowRight = document.createElement("div");
    const arrowRightIcon = document.createElement("i");
    fullscreen.classList.add("fullscreen");

    if (media.nodeName === 'IMG') {
      mediaFullscreen.src = media.src;
      mediaFullscreen.alt = media.alt;
    } else if (media.nodeName === 'VIDEO') {
      mediaFullscreen.src = media.src;
      mediaFullscreen.poster = media.poster;
      mediaFullscreen.muted = true;
      mediaFullscreen.setAttribute('playsinline', '');
      mediaFullscreen.setAttribute('webkit-playsinline', '');
      mediaFullscreen.play();
      mediaFullscreen.controls = true;
      mediaFullscreen.addEventListener('loadedmetadata', () => {
        if (mediaFullscreen.videoHeight > mediaFullscreen.videoWidth) {
          mediaFullscreen.classList.add('vertical');
          }
      });
    }

    /* --- Ajout de la Date du Lieu et l'Instagram --- */
    if (media.parentNode.querySelector('.lieu-date')) {
      const lieuDate = media.parentNode.querySelector('.lieu-date').cloneNode(true);
      fullscreen.appendChild(lieuDate);
    }
    if (media.parentNode.querySelector('.insta')) {
      const aTag = media.parentNode.querySelector('.insta').cloneNode(true);
      fullscreen.appendChild(aTag);
    }

    /* --- Close button --- */
    close.classList.add("close");
    closeIcon.classList.add("ri-close-line");
    closeIcon.addEventListener("click", () => {
      document.body.removeChild(fullscreen);
      document.body.style.overflow = "visible";
    });

    /* --- Left Arrow --- */
    arrowLeft.classList.add("arrow", "arrow-left");
    arrowLeftIcon.classList.add("ri-arrow-left-s-line");
    arrowLeft.addEventListener("click", () => {
    if (index > 0) {
    index--;
    mediaFullscreen.src = medias[index].src;
    mediaFullscreen.alt = medias[index].alt;
    const lieuDate = fullscreen.querySelector('.lieu-date');
    if (lieuDate) {
    fullscreen.removeChild(lieuDate);
    }
    const aTag = fullscreen.querySelector('.insta');
    if (aTag) {
    fullscreen.removeChild(aTag);
    }
    if (medias[index].parentNode.querySelector('.lieu-date')) {
    const newLieuDate = medias[index].parentNode.querySelector('.lieu-date').cloneNode(true);
    fullscreen.appendChild(newLieuDate);
    }
    if (medias[index].parentNode.querySelector('.insta')) {
    const newATag = medias[index].parentNode.querySelector('.insta').cloneNode(true);
    fullscreen.appendChild(newATag);
    }
    }
    });
    
    /* --- Right Arrow --- */
    arrowRight.classList.add("arrow", "arrow-right");
    arrowRightIcon.classList.add("ri-arrow-right-s-line");
    arrowRight.addEventListener("click", () => {
    if (index < medias.length - 1) {
    index++;
    mediaFullscreen.src = medias[index].src;
    mediaFullscreen.poster = medias[index].poster;
    const lieuDate = fullscreen.querySelector('.lieu-date');
    if (lieuDate) {
    fullscreen.removeChild(lieuDate);
    }
    const aTag = fullscreen.querySelector('.insta');
    if (aTag) {
    fullscreen.removeChild(aTag);
    }
    if (medias[index].parentNode.querySelector('.lieu-date')) {
    const newLieuDate = medias[index].parentNode.querySelector('.lieu-date').cloneNode(true);
    fullscreen.appendChild(newLieuDate);
    }
    if (medias[index].parentNode.querySelector('.insta')) {
    const newATag = medias[index].parentNode.querySelector('.insta').cloneNode(true);
    fullscreen.appendChild(newATag);
    }
    }
    });

    close.appendChild(closeIcon);
    arrowLeft.appendChild(arrowLeftIcon);
    arrowRight.appendChild(arrowRightIcon);
    fullscreen.appendChild(mediaFullscreen);
    fullscreen.appendChild(close);
    fullscreen.appendChild(arrowLeft);
    fullscreen.appendChild(arrowRight);
    document.body.appendChild(fullscreen);
    document.body.style.overflow = "hidden";
  });
});