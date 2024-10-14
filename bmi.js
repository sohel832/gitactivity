function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const resultElement = document.getElementById('result');

    resultElement.classList.remove('underweight', 'normal', 'overweight', 'obese');
    if (height === '' || weight === '') {
        resultElement.innerText = "Please fill out all fields.";
        return;
    }
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    let resultText = `Your BMI is ${bmi}. `;
    let categoryClass = '';
    let adviceText = '';

    if (bmi < 18.5) {
        resultText += "You are underweight.";
        categoryClass = 'underweight';
        const minWeight = (18.5 * heightInMeters * heightInMeters).toFixed(2);
        adviceText = `You need to gain at least ${(minWeight - weight).toFixed(2)} kg to reach a normal weight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultText += "You have a normal weight.";
        categoryClass = 'normal';
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultText += "You are overweight.";
        categoryClass = 'overweight';
        const maxWeight = (24.9 * heightInMeters * heightInMeters).toFixed(2);
        adviceText = `You need to lose at least ${(weight - maxWeight).toFixed(2)} kg to reach a normal weight.`;
    } else {
        resultText += "You are obese.";
        categoryClass = 'obese';
        const maxWeight = (24.9 * heightInMeters * heightInMeters).toFixed(2);
        adviceText = `You need to lose at least ${(weight - maxWeight).toFixed(2)} kg to reach a normal weight.`;
    }
    resultElement.innerText = resultText + (adviceText ? ' ' + adviceText : '');
    resultElement.classList.add(categoryClass);
}

