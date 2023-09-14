const convert = () =>{
    const deg = document.getElementById('degree').value;
    if(deg== null || deg == ''){
        alert("Enter temperature");
        return;
    } 
    // var element = document.createElement('p');
    // element.classList.add('show-result');
    // show-result.appendChild(element);


    const type = document.getElementById('selection').value;
    const result1 = document.getElementById('output1');
    const result2 = document.getElementById('output2');

    if(type == 'Fahrenhiet'){
        const cal = Number(deg-32) / 1.8;
        result1.value = `${cal} C`;
        // alert(cal+ ' C');
        const kel = (deg-32)/1.8 +273.15;
        result2.value = `${kel} k`;


    }else if(type == 'Celsius'){
        const kel = Number(deg) + 273.15;
        // alert(kel +' k');
        result1.value = `${kel} K`;

        const fah = deg*1.8 +32;
        // alert(fah +' F');
        result2.value = `${fah} F`
    }else if(type == 'Kelvin'){
        const cal = deg-273.15;
        // alert(cal +' C');
        result1.value = `${cal} C`;

        const fah = ((deg-273.15) *1.8) +32;
        // alert(fah + ' F');
        result2.value = `${fah} F`;
    }else{
        alert("Enter type Scale")
    }
}

// clear function 
const clear = ()=>{
    document.getElementById('degree').innerText = " ";
}