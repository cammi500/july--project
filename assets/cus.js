var waypoint = new Waypoint({
    element: document.getElementById('services'),
    handler: function(direction) {
     if(direction === 'down'){
        document.querySelector('.navbar').classList.add('navbar-control')
        document.querySelector('.navbar').classList.add('animate__fadeInDown')
        document.querySelector('.navbar').classList.add('shadow-zinc-300')

       
     }else{
        document.querySelector('.navbar').classList.remove('navbar-control')
        document.querySelector('.navbar').classList.remove('animate__fadeInDown')
        document.querySelector('.navbar').classList.remove('shadow-zinc-300')
       
     }
    },
    offset: '5%'
  })


  var waypoint = new Waypoint({
    element: document.getElementById('pricing'),
    handler: function(direction) {
     if(direction === 'down'){
     document.querySelector('.footer-fixed').classList.add('show')
     document.querySelector('.footer-fixed').classList.add('animate__fadeInDown')
   

     }else{
      document.querySelector('.footer-fixed').classList.remove('show')
      document.querySelector('.footer-fixed').classList.remove('animate__fadeInDown')
        
     }
    },
    offset: '5%'
  })


  //theme
  
  let card = document.querySelectorAll('.card');
  const changeThemeToDark =() => {
   document.documentElement.setAttribute('data-theme','dark');
   document.querySelector('.navbar').classList.remove('shadow-lg');
   document.querySelector('.navbar').classList.add('pdf-border-zinc-800');
   localStorage.setItem('data-theme','dark')


  for(let x=0;x < card.length;x++){
   card[x].classList.remove('shadow-xl');
   card[x].classList.remove('border-0');
   card[x].classList.add('pdf-border-zinc-800');
   card[x].classList.add('shadow');
   card[x].classList.add('shadow-red-500');
  }
  }
  const changeThemeToLight =() => {
   document.documentElement.setAttribute('data-theme','light');
   document.querySelector('.navbar').classList.add('shadow-lg');
   document.querySelector('.navbar').classList.remove('pdf-border-zinc-800');
   document.querySelector('.navbar').classList.remove('boder-bottom');
   localStorage.setItem('data-theme','light')

  
   for(let x=0;x < card.length;x++){
    card[x].classList.add('shadow-xl');
    card[x].classList.add('border-0');
    card[x].classList.remove('pdf-border-zinc-800');
    card[x].classList.remove('shadow');
    card[x].classList.remove('shadow-red-500');
   }
  }
  let changeTheme =document.getElementById('changeTheme');

  changeTheme.addEventListener('change',() => {
   let theme = localStorage.getItem('data-theme')
   if (theme ==='dark'){
      changeThemeToLight();
   }else{
      changeThemeToDark();
   }
  })
  let theme = localStorage.getItem('data-theme')
  if (theme ==='dark'){
     changeThemeToLight()
     changeTheme.setAttribute('checked','checked')
  }else{
     changeThemeToDark()
  }

//   menu-icon
let menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('click',()=>{
   menuIcon.classList.toggle('show');
})