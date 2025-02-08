function Rhombus() {
    // Rhombus width value
    const RhombusWidth = document.getElementById('Rhombus-width');
    const RhombusWidthValue = RhombusWidth.value;
    const width = parseFloat(RhombusWidthValue);
    
    // Rhombus length value

    const RhombusLength = document.getElementById('Rhombus-length');
    const RhombusLengthValue = RhombusLength.value;
    const length = parseFloat(RhombusLengthValue);  
    // calculate area

    const area = 0.5 * width * length;  
    let resultArea = document.getElementById("result-area");
    // create element
    
    let li = document.createElement("li");
    li.style.paddingBottom = "20px";
    li.appendChild(document.createTextNode(`Diagram(1) : ${width} cm, Diagram(2) : ${length} cm | Rhombus area = ${area} cm². `));
    resultArea.appendChild(li);
}