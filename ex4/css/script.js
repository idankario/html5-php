

function movesvg() {
  const tl = new TimelineMax();
  const bgd = $('#background rect');
  const table = $('#table_legs, #table');
  const lampLeg = $('#lamp > .lamp-leg');
  const lampbt = $('#lamp-bottom');
  const lampLight = $('#lamp > .light');
  const lampLine = $('#lamp-line');
  const lampLineB = $('#lamp-line-b');
  const lampLineT = $('#lamp-line-t');
  const lampCircle = $('#lamp-circle');
  const lampHead = $('#lamp-head');
  const lampHeader = $('#lamp-header');
  const lampBody = $('#lamp-body');
  const computer = $('#computer > *');
  const keyboard = $('#keyboard > *');
  const asset = $('#computer_mouse > * , #coffee_mug > *');

  tl.from(bgd, 0.2, {opacity:0, scale:0, transformOrigin: 'center center'})
    .staggerFrom(table, 0.2, {y:"-=200", opacity: 0, ease: Elastic.easeOut}, 0.1)
    .from(lampLeg, 0.2, {opacity:0, x: "-200", ease: Elastic.easeOut})
    .from(lampbt, 0.2, {opacity:0, scale:0, transformOrigin: 'center center'})
    .from(lampLineB, 0.3,{opacity:0, transformOrigin: '100% 100%', rotation: '-180deg'})
    .from(lampCircle,0.1,{opacity:0, x: '-=100', y: '-=100'})
    .from(lampLineT, 0.3,{opacity:0, transformOrigin: '0% 100%', rotation: '-180deg'})
    .from(lampHead, 0.2, {opacity:0, scale:0, ease: Elastic.easeOut})
    .from(lampHeader, 0.5, {transformOrigin: '60% 60%', rotation: '60deg'})
    .from(lampBody, 0.5, {transformOrigin: '70% 70%', rotation: '-25deg'})
    .staggerFrom(computer, 1, {opacity: 0, scale: 0, transformOrigin: 'center center', ease: Back .easeOut}, 0.2)
    .staggerFrom(keyboard, 0.5, {opacity: 0, y: '-=100', ease: Linear.easeInOut }, 0.05)
    .staggerFrom(asset, 0.5, {opacity: 0}, 0.05)
    .to(lampLight, 0.2, {opacity:0.8, ease: Elastic.easeOut, delay:0.5}, "a")
    .to(lampLight, 0.1, {opacity:0}, "b")
    .to(lampLight, 0.1, {opacity:0.2}, "c")
    .to(bgd, 0.2, {opacity: 0.1, delay:0.5}, "a-=0.05")
    .to(bgd, 0.1, {opacity: 1}, "b-=0.05")
    .to(bgd, 0.1, {opacity: 0.5}, "c-=0.05")
    .to(bgd, 0.2, {opacity: 1, fill: '#FDD10D'})
    .fromTo(lampLine, 0.2, {opacity: 0},{opacity: 0.2, delay:0.5}, "a-=0.05")
    .to(lampLine, 0.1, {opacity: 1}, "b-=0.05")
    .to(lampLine, 0.1, {opacity: 0.5}, "c-=0.05");
}

const fadeE=()=>{
    // setTimeout() function will be fired after page is loaded
    // it will wait for 5 sec. and then will fire
    // $("#successMessage").hide() function
    setTimeout(()=>{
        $('#svg').fadeOut();
        $('main').removeClass('d-none');
    }, 12000);
}
const toggleClock=()=> {
  setTimeout(()=> {
    $(".clock").fadeOut();
      setTimeout(()=>{
        $(".clock").fadeIn(); 
          toggleClock();
      }, 3000);
  }, 2000);
}

$(()=> {
  movesvg();
  $(".clock").fadeOut();
  toggleClock();
  fadeE();
  formValidations();
});






const constructValidation=(e,test)=>{
  if (test) {
    if (!e.target.classList.contains('is-valid'))
      e.target.classList.add('is-valid');
    e.target.className = e.target.className.replace(
      /\bis-invalid\b/,
      'is-valid'
    );
  } else {
    if (!e.target.classList.contains('is-invalid'))
      e.target.classList.add('is-invalid');
    e.target.className = e.target.className.replace(
      /\bis-valid\b/,
      'is-invalid'
    );
  }
}

const formValidations = () => {
  window.addEventListener(
    'load',
    () => {   
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      let forms = document.getElementsByClassName('main-form');

      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, (form) => {
      // Input Name
      form[0].onkeyup = (e) => {
        const regex = /^[a-zA-Z]+\s[a-zA-Z]+$/;
        let test=regex.test(e.target.value)
        constructValidation(e,test);
       
      };
      /*Password should Minimum eight characters, at least one letter and one number:
      **/
      form[1].onkeyup = (e) => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        let test=regex.test(e.target.value)
        constructValidation(e,test);
      };
      form[2].onkeyup = (e) => {
        const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        let test=regex.test(e.target.value)
        constructValidation(e,test);
      };
      form[11].onkeyup = (e) => {
        const regex = /^[0][5][0-9]{7,8}$/;
        let test=regex.test(e.target.value)
        constructValidation(e,test);
      }
      //On click go next
      $(document).on('click', '#h', ()=> {
        if($("input[type=checkbox]:checked").length){
          if(($('.is-valid').length)==3)
          {
            $('#1').addClass('d-none');
            $('#2').removeClass('d-none');
            $('button:first-child').removeAttr('disabled');
            $('button:last-child').removeClass('d-none');
            $('#h').addClass('d-none');
          }
          else
            alert("Dont be lazy chose all input")
        }
        else
          alert("Chose status")
      });

      //On click go back
      $(document).on('click', 'button:first-child', ()=> {
        $('#2').addClass('d-none');
        $('#1').removeClass('d-none');
        $('button:last-child').addClass('d-none');
        $('#h').removeClass('d-none');
        $(this).attr('disabled', 'disabled');
      });

      // check box check
      const checkBoxes = document.querySelectorAll('.check-box');
      const mapperFn = (box) => box.checked;
      console.log(Array.prototype.slice.call(checkBoxes).map(mapperFn));

      form.addEventListener(
        'submit',
        (event) => {
          if (form.checkValidity() === false) {
            console.log('not valid form');
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        },
        false
        );
      });
    },
  );
};
