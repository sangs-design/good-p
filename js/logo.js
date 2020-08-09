var logoP = document.querySelector(".logo-p");
var logoText = document.querySelector(".logo-letter");
var logoWidth = logoText.offsetWidth;

var logoTimeline = anime.timeline();
logoTimeline
    .add({
        targets: '#header .letters',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 300,
        delay: (el, i) => {
            return i * 300
        }
    })
    .add({
        targets: '#header .logo-letter',
        easing: 'easeInOutSine',
        width: [0, logoWidth],
        opacity: [0, 1],
        duration: 300,
    });


function logo(val) {
//    logoWidth = logoText.offsetWidth;

    anime({
        targets: '.logo-letter',
        easing: 'easeInOutSine',
        width: ['100%', 0],
        duration: 500,
        complete: function () {
            logoText.innerHTML = val;
            anime({
                targets: '.logo-letter',
                easing: 'easeInOutSine',
                width: '100%',
                duration: 500
            });
            if (val == "lace") {
                logoColor = "#3e9bd6";
                logoP.style.stroke = logoColor;
                logoText.style.color = logoColor;
            } else if (val == "late") {
                logoColor = "#fa6350";
                logoP.style.stroke = logoColor;
                logoText.style.color = logoColor;
            } else if (val == "lays") {
                logoColor = "#fece4e";
                logoP.style.stroke = logoColor;
                logoText.style.color = logoColor;
            }
        }
    });
}