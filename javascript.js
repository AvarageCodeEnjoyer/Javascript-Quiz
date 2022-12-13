
var input;
var res = document.getElementById('result')
var correct = 0;
var incorrect;
var missing = 0;
var BG = document.getElementById("BG")
document.getElementById("c5label").innerText = "<!--- Comment Goes Here -->"

function check()
    {
        /* for (i = 0; i < 10; i++)
            {
                var val = document.querySelector("input:checked").value
                if (val == "yes")
                    {
                        console.log("YES!!!")
                        correct++
                    }
                else if (val == "no")
                    {
                        console.log("wrong")
                        incorrect++
                    }
                missing++
                console.log(missing)
            }
        return correct + incorrect */

        let q1 = document.getElementById("c1").checked
        let q2 = document.getElementById("c2").checked
        let q22 = document.getElementById("d2").checked
        let q3 = document.getElementById("a3").checked
        let q4 = document.getElementById("d4").checked
        let q5 = document.getElementById("c5").checked
        let q6 = document.getElementById("a6").checked
        let q7 = document.getElementById("d7").checked
        let q8 = document.getElementById("b8").checked
        let q9 = document.getElementById("a9").checked
        let q10 = document.getElementById("b10").checked

        if (q1 == true){correct++}
        if (q2 && q22 == true){correct++}
        if (q3 == true){correct++}
        if (q4 == true){correct++}
        if (q5 == true){correct++}
        if (q6 == true){correct++}
        if (q7 == true){correct++}
        if (q8 == true){correct++}
        if (q9 == true){correct++}
        if (q10 == true){correct++}
        
        incorrect = 10 - correct;   
    }

function press() 
    {
        wrap.style.visibility = 'hidden'
        body.style.overflow = 'hidden'
        result.style.visibility = 'visible'
        document.getElementById('restart').style.visibility = 'visible';
        document.getElementById('result').innerHTML = "You Got " + correct + " Correct <br> And " + incorrect + " Incorrect" 
        result.style.animationPlayState = "play"
        // animation: name duration timing-function delay iteration-count direction fill-mode play-state;
        BG.style.visibility = "hidden";
    }

function play()
    {
        var x = document.getElementById("audio")
        x.play()
    }

function restart()
    {
        let form = document.querySelector('form');
        form.reset()
        window.location.reload()
    }
