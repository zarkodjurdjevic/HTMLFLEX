let fotonummer, fotobreedte, aantalfotos, fotoslider;
        function setupFotoslider() { 
            //alert("welkom bij mijn fotoslider!");
            fotonummer = 0;
            fotobreedte = 300; 

            fotoslider = document.getElementById("echtefotoslider");
            let volgendeKnop = document.getElementById("volgende-btn");
            let vorigeKnop = document.getElementById("vorige-btn");
           
            aantalfotos = fotoslider.children.length;
            console.log(aantalfotos);
            volgendeKnop.addEventListener('click',volgendeFoto);
        }

        function volgendeFoto(){
            //alert('volgende foto');
            fotonummer += 1;
            if (fotonummer === aantalfotos) {
                fotonummer = 0;
            }
            let afstandNaarLinks = -1 * (fotonummer * fotobreedte)
            fotoslider.style.left = afstandNaarLinks + "px";
        }

        
        window.addEventListener("DOMContentLoaded", setupFotoslider);
        