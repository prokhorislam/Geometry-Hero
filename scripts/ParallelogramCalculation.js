function Parallelogram() {
    // Parallelogram width value
    const ParallelogramWidth = document.getElementById('Parallelogram-width');
    const ParallelogramWidthValue = ParallelogramWidth.value;
    const width = parseFloat(ParallelogramWidthValue);
    
    // Parallelogram length value

    const ParallelogramLength = document.getElementById('Parallelogram-length');
    const ParallelogramLengthValue = ParallelogramLength.value;
    const length = parseFloat(ParallelogramLengthValue);  
    // calculate area

    const area = width * length;  
    let resultArea = document.getElementById("result-area");
    // create element
    
    let li = document.createElement("li");
    li.style.paddingBottom = "40px";
    li.style.paddingTop = "10px";
    li.style.fontSize = "24px";
    li .style.borderBottom = "3px dotted indigo";
    li.appendChild(document.createTextNode(`base : ${width} cm, height : ${length} cm | Parallelogram area = ${area} cm². `));
    resultArea.appendChild(li);
}