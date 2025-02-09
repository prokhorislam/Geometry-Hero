function rectangle() {
    // rectangle width value
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthValue = rectangleWidth.value;
    const width = parseFloat(rectangleWidthValue);
    
    // rectangle length value
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthValue = rectangleLength.value;
    const length = parseFloat(rectangleLengthValue);    
    // calculate area
    const recArea = width * length;    
    let resultArea = document.getElementById("result-area");
    // create element
    let li = document.createElement("li");
    li.style.paddingBottom = "20px";
    li.style.fontSize = "24px";
    li.appendChild(document.createTextNode(`width : ${width} cm, length : ${length} cm | Rectangle area = ${recArea} square cm². `));
    resultArea.appendChild(li);
}