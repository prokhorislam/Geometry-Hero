function Ellipse() {
    // Pentagon width value
    const EllipseWidth = document.getElementById('Ellipse-width');
    const EllipseWidthValue = EllipseWidth.value;
    const width = parseFloat(EllipseWidthValue);
    
    // Rhombus length value

    const EllipseLength = document.getElementById('Ellipse-length');
    const EllipseLengthValue = EllipseLength.value;
    const length = parseFloat(EllipseLengthValue);  
    // calculate area

    const area = 3.14159 * width * length;  
    let resultArea = document.getElementById("result-area");
    // create element
    
    let li = document.createElement("li");
    li.style.paddingBottom = "20px";
    li.style.fontSize = "24px";
    li.appendChild(document.createTextNode(`a Axis : ${width} cm, b Axis : ${length} cm | Ellipse area = ${area} cm². `));
    resultArea.appendChild(li);
}