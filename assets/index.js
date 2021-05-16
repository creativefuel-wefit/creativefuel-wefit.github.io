 wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    document.getElementById('moar').onclick = function() {
      var section = document.createElement('section');
      section.className = 'section--purple wow fadeInDown';
      this.parentNode.insertBefore(section, this);
    };



    // sidenav



    function openNavR() {
        document.getElementById("mySidenavR1").style.width = "250px";
    }

    function closeNavR() {
        document.getElementById("mySidenavR1").style.width = "0";
    }



    function openNavR1() {
        document.getElementById("mySidenavR1").style.width = "100%";
    }

    function closeNavR1() {
        document.getElementById("mySidenavR1").style.width = "0";
    }


