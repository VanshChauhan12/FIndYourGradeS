document.getElementById("boxgrade0").style.display = "none"
document.getElementById("boxgrade1").style.display = "none"
document.getElementById("boxgrade2").style.display = "none"
document.getElementById("boxgrade3").style.display = "none"
document.getElementById("boxgrade4").style.display = "none"
document.getElementById("boxgrade5").style.display = "none"

document.getElementById("average0").style.display = "none"
document.getElementById("average1").style.display = "none"
document.getElementById("average2").style.display = "none"
document.getElementById("average3").style.display = "none"
document.getElementById("average4").style.display = "none"
document.getElementById("average5").style.display = "none"


average = []




const pause = (time) => new Promise((resolve => setTimeout(resolve, time)))
numclass = 6


function class1(){
    numclass = 1
    average = [0,0]
}

function class2(){
    numclass = 2
    average = [0,0,0,0]
}

function class3(){
    numclass = 3
    average = [0,0,0,0,0,0]
}

function class4(){
    numclass = 4
    average = [0,0,0,0,0,0,0,0]
}

function class5(){
    numclass = 5
    average = [0,0,0,0,0,0,0,0,0,0]
}

function class6(){
    numclass = 6
    average = [0,0,0,0,0,0,0,0,0,0,0,0]
}

classcheck()
async function classcheck(){

for(var i=0;i < Infinity; i++){
    await pause(1000)
    if(numclass === 1){
        document.getElementById('text1').style.display = "block"
        document.getElementById('color1').style.display = "block"

        document.getElementById('text2').style.display = "none"
        document.getElementById('color2').style.display = "none"

        document.getElementById('text3').style.display = "none"
        document.getElementById('color3').style.display = "none"

        document.getElementById('text4').style.display = "none"
        document.getElementById('color4').style.display = "none"

        document.getElementById('text5').style.display = "none"
        document.getElementById('color5').style.display = "none"

        document.getElementById('text6').style.display = "none"
        document.getElementById('color6').style.display = "none"
    }else if(numclass === 2){
        document.getElementById('text1').style.display = "block"
        document.getElementById('color1').style.display = "block"

        document.getElementById('text2').style.display = "block"
        document.getElementById('color2').style.display = "block"

        document.getElementById('text3').style.display = "none"
        document.getElementById('color3').style.display = "none"

        document.getElementById('text4').style.display = "none"
        document.getElementById('color4').style.display = "none"

        document.getElementById('text5').style.display = "none"
        document.getElementById('color5').style.display = "none"

        document.getElementById('text6').style.display = "none"
        document.getElementById('color6').style.display = "none"
    }else if(numclass === 3){
        document.getElementById('text1').style.display = "block"
        document.getElementById('color1').style.display = "block"

        document.getElementById('text2').style.display = "block"
        document.getElementById('color2').style.display = "block"

        document.getElementById('text3').style.display = "block"
        document.getElementById('color3').style.display = "block"

        document.getElementById('text4').style.display = "none"
        document.getElementById('color4').style.display = "none"

        document.getElementById('text5').style.display = "none"
        document.getElementById('color5').style.display = "none"

        document.getElementById('text6').style.display = "none"
        document.getElementById('color6').style.display = "none"
    }else if(numclass === 4){
        document.getElementById('text1').style.display = "block"
        document.getElementById('color1').style.display = "block"

        document.getElementById('text2').style.display = "block"
        document.getElementById('color2').style.display = "block"

        document.getElementById('text3').style.display = "block"
        document.getElementById('color3').style.display = "block"

        document.getElementById('text4').style.display = "block"
        document.getElementById('color4').style.display = "block"

        document.getElementById('text5').style.display = "none"
        document.getElementById('color5').style.display = "none"

        document.getElementById('text6').style.display = "none"
        document.getElementById('color6').style.display = "none"
    }else if(numclass === 5){
        document.getElementById('text1').style.display = "block"
        document.getElementById('color1').style.display = "block"

        document.getElementById('text2').style.display = "block"
        document.getElementById('color2').style.display = "block"

        document.getElementById('text3').style.display = "block"
        document.getElementById('color3').style.display = "block"

        document.getElementById('text4').style.display = "block"
        document.getElementById('color4').style.display = "block"

        document.getElementById('text5').style.display = "block"
        document.getElementById('color5').style.display = "block"

        document.getElementById('text6').style.display = "none"
        document.getElementById('color6').style.display = "none"
    }else if(numclass === 6){
        document.getElementById('text1').style.display = "block"
        document.getElementById('color1').style.display = "block"

        document.getElementById('text2').style.display = "block"
        document.getElementById('color2').style.display = "block"

        document.getElementById('text3').style.display = "block"
        document.getElementById('color3').style.display = "block"

        document.getElementById('text4').style.display = "block"
        document.getElementById('color4').style.display = "block"

        document.getElementById('text5').style.display = "block"
        document.getElementById('color5').style.display = "block"

        document.getElementById('text6').style.display = "block"
        document.getElementById('color6').style.display = "block"
    }
}}



















colorchange()
async function colorchange() {
    for (var i = 0; Infinity > i; i++) {
       i--
        var makeColorCode = '0123456789ABCDEF';
        var code = '#';
        for (var count = 0; count < 6; count++) {
            code = code + makeColorCode[Math.floor(Math.random() * 16)];
        }
        document.getElementById("BACKGROUND").style.background = code
        await pause(1000)
    }

}














cookie = document.cookie;
 cookiecheck = cookie.replace('user=','')

cookiecheck = cookiecheck.split('|')




if(cookiecheck[0] === 'yes'){



document.getElementById('fullstart').style.display = "none"

cookieclasscheck = cookiecheck[1]

cookiecolorcheck = cookiecheck[2].split(",")
 
cookienamecheck = cookiecheck[3].split(",")

cookienumcheck = cookiecheck[4].split(",")

console.log(cookieclasscheck + " " + cookiecolorcheck + " " + cookienamecheck)

for(var i = 0; i < cookieclasscheck; i++){
    
    console.log(i)
    document.getElementById('boxgrade'+i).style.display = "block"
    document.getElementById('average'+i).style.display = "block"
    document.getElementById('boxgrade'+i).innerHTML = cookienamecheck[i]
    document.getElementById('boxgrade'+i).style.backgroundColor = cookiecolorcheck[i]
    
}


}else{
    alert("This website needs cookies")
    document.getElementById('reset').style.display = "none"
    document.getElementById('save').style.display = "none"


}



function done(){

    alert("Reaload page")


    text1 = document.getElementById("text1").value
    text2 = document.getElementById("text2").value
    text3 = document.getElementById("text3").value
    text4 = document.getElementById("text4").value
    text5 = document.getElementById("text5").value
    text6 = document.getElementById("text6").value

    color1 = document.getElementById("color1").value
    color2 = document.getElementById("color2").value
    color3 = document.getElementById("color3").value
    color4 = document.getElementById("color4").value
    color5 = document.getElementById("color5").value
    color6 = document.getElementById("color6").value
    

    color = []
    text = []
if(numclass === 1){
    color.push(document.getElementById("color1").value)
    text.push(document.getElementById("text1").value)

}else if(numclass === 2){
    color.push(document.getElementById("color1").value)
    text.push(document.getElementById("text1").value)
    color.push(document.getElementById("color2").value)
    text.push(document.getElementById("text2").value)
  
}else if(numclass === 3){
    color.push(document.getElementById("color1").value)
    text.push(document.getElementById("text1").value)
    color.push(document.getElementById("color2").value)
    text.push(document.getElementById("text2").value)
    color.push(document.getElementById("color3").value)
    text.push(document.getElementById("text3").value)
}else if(numclass===4){
    color.push(document.getElementById("color1").value)
    text.push(document.getElementById("text1").value)
    color.push(document.getElementById("color2").value)
    text.push(document.getElementById("text2").value)
    color.push(document.getElementById("color3").value)
    text.push(document.getElementById("text3").value)
    color.push(document.getElementById("color4").value)
    text.push(document.getElementById("text4").value)
}else if(numclass === 5){
    color.push(document.getElementById("color1").value)
    text.push(document.getElementById("text1").value)
    color.push(document.getElementById("color2").value)
    text.push(document.getElementById("text2").value)
    color.push(document.getElementById("color3").value)
    text.push(document.getElementById("text3").value)
    color.push(document.getElementById("color4").value)
    text.push(document.getElementById("text4").value)
    color.push(document.getElementById("color5").value)
    text.push(document.getElementById("text5").value)
}else if(numclass === 6){
    color.push(document.getElementById("color1").value)
    text.push(document.getElementById("text1").value)
    color.push(document.getElementById("color2").value)
    text.push(document.getElementById("text2").value)
    color.push(document.getElementById("color3").value)
    text.push(document.getElementById("text3").value)
    color.push(document.getElementById("color4").value)
    text.push(document.getElementById("text4").value)
    color.push(document.getElementById("color5").value)
    text.push(document.getElementById("text5").value)
    color.push(document.getElementById("color6").value)
    text.push(document.getElementById("text6").value)
}




allarray = ['yes', numclass, color, text, average]

allarray = allarray.join('|')

console.log(allarray)

document.cookie = "user="+allarray}

function reset(){
    document.cookie = "user=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function averagecheck(numchecked, numchecked1){
    console.log(numchecked1)
       
        average1 = cookienumcheck[numchecked]
        average2 = cookienumcheck[numchecked+1]

        average11 = document.getElementById("average"+numchecked1+"1").value
        average22 = document.getElementById("average"+numchecked1+"2").value

        average1 = average1 * 1
        average2 = average2 * 1

        average11 = average11 * 1
        average22 = average22 * 1

        average1 = average1 + average11

        average2 = average2 + average22

        cookienumcheck[numchecked] = average1
        cookienumcheck[numchecked+1] = average2

        cookienumcheck[numchecked].toString()
        cookienumcheck[numchecked+1].toString()

        ae = (average1 * 100)/average2
        console.log(typeof(ae))
        document.getElementById("ae"+numchecked1).innerHTML = parseInt(ae) + "/100"

        console.log(cookienumcheck)

    
}


function save(){

numclass = cookieclasscheck 

color = cookiecolorcheck 
 
text = cookienamecheck 

average = cookienumcheck 

    console.log(numclass + "  " + color + " "+ text + " " + average)

    allarray = ['yes', numclass, color, text, average]

allarray = allarray.join('|')

console.log(allarray)

document.cookie = "user="+allarray

}

