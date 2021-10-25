<script
  src="https://code.jquery.com/jquery-3.6.0.js"
  integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
  crossorigin="anonymous"></script>

console.log("Welcome to my Portfolio Website! Stay & look a while!")

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

nav > ul > li {
  display: inline-block;
  min-width: 641px;
}

.navtoggle li:not(:last-child) {
  display: inline-block;}

  .navtoggle li:last-child {
    display: none;
  }
