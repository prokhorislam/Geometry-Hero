function Pentagon() {
    // Pentagon width value
    const PentagonWidth = document.getElementById('Pentagon-width');
    const PentagonWidthValue = PentagonWidth.value;
    const width = parseFloat(PentagonWidthValue);
    
    // Rhombus length value

    const PentagonLength = document.getElementById('Pentagon-length');
    const PentagonLengthValue = PentagonLength.value;
    const length = parseFloat(PentagonLengthValue);  
    // calculate area

    const area = 0.5 * width * length;  
    let resultArea = document.getElementById("result-area");
    // create element
    
    let li = document.createElement("li");
    li.style.paddingBottom = "40px";
    li.style.paddingTop = "10px";
    li.style.fontSize = "24px";
    li .style.borderBottom = "3px dotted indigo";
    li.appendChild(document.createTextNode(`Perimeter : ${width} cm, Apothem : ${length} cm | Pentagon area = ${area} cm². `));
    resultArea.appendChild(li);
}