const scale = 10;

let recamanSequence = [0, 1, 3, 6, 2, 7, 13, 20, 12, 21, 11, 22, 10, 23, 9, 24, 8, 25, 43, 62,
    42, 63, 41, 18, 42, 17, 43, 16, 44, 15, 45, 14, 46, 79, 113, 78, 114, 77, 39, 78, 38,
    79, 37, 80, 36, 81, 35, 82, 34, 83, 33, 84, 32, 85, 31, 86, 30, 87, 29, 88, 28, 89, 27, 90, 26, 91,
];

/* CANVAS  */
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

//get range values
const rangeValueDiv = document.getElementById('rangeValue');
const rangeInput = document.getElementById('rangeInput');

// Set canvas dimensions based on sequence
canvas.width = 1360;
canvas.height = 700;

//create canvas and add it in div element
context.translate(2, 2);
document.getElementById("recamanCanvas").appendChild(canvas);

//draw the sequence onto canvas
const drawRecaman = (value) => {
    // Draw axes
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.moveTo(0, canvas.height / 2.3);
    context.lineTo(canvas.width, canvas.height / 2.3);
    context.stroke();

    // Draw curve
    let spin = true;
    let position, radius;

    for (let i = 0; i < value; i++) {
        position = (recamanSequence[i] + recamanSequence[i + 1]) / 2.3;
        radius = Math.abs(recamanSequence[i + 1] - recamanSequence[i]) / 2.3;
        context.beginPath();
        context.arc(position * scale + 30, canvas.height / 2.3, radius * scale, 0, Math.PI, spin);
        context.stroke();
        spin = !spin;
    }
};

drawRecaman(65);

// set range values on input change.
const onInputChangeHandler = (value) => {
    rangeValueDiv.innerText = value;
    drawRecaman(value);
}

rangeInput.addEventListener('input', e => onInputChangeHandler(e.target.value))
