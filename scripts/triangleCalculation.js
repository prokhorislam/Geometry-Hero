function triangle() {
    // triangle base value
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseValue = triangleBase.value;
    const base = parseFloat(triangleBaseValue);
    
    // triangle height value
    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightValue = triangleHeight.value;
    const height = parseFloat(triangleHeightValue);
    
    // calculate area
    const area = 0.5 * base * height;
    console.log(area);
    
    let resultArea = document.getElementById("result-area");
    let li = document.createElement("li");
    li.style.paddingBottom = "20px";
    li.style.fontSize = "24px";
    li.appendChild(document.createTextNode(`base : ${base} cm, height : ${height} cm | Triangle area = ${area} square cm².`));
    resultArea.appendChild(li);
}