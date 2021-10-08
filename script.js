


   function myFunction() {

       const box = document.querySelector('p');
       // Outputs '<p>Hello there!</p>':
     // console.log(box.innerHTML);

     let future = Math.floor(Math.random() * 8);

     switch (future) {
         case 1:
             box.innerHTML = '<p>Yes</p>';
             break;

         case 2:
             box.innerHTML = '<p>No</p>';
             break;

         case 3:
             box.innerHTML = '<p>Maybe</p>';
             break;

         case 4:
             box.innerHTML = '<p>Definitely</p>';
             break;

         case 5:
             box.innerHTML = '<p>Just Don`t...</p>';
             break;

         case 6:
             box.innerHTML = '<p>Go for it!</p>';
             break;

         case 7:
             box.innerHTML = '<p>I don`t Know</p>';
             break;

         case 8:
             box.innerHTML = '<p>Try Again</p>';
             break;


 } }