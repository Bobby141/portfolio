        //hamnav
        var ham = document.getElementById('top-menu');
        var cls = document.getElementById('cls');
        var hamopen = () => {
            ham.style.height="100vh"
        };
        var hamclose = () => {
            cls.style.transform = "rotate(360deg)"
            ham.style.height="0vh"
        };
        // var hams = document.getElementById('top-menu-s');
        // var clss = document.getElementById('cls-s');
        // var hamopens = () => {
        //     hams.style.height="100vh"
        // };
        // var hamcloses = () => {
        //     clss.style.transform = "rotate(360deg)"
        //     hams.style.height="0vh"
        // };