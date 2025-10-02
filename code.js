const fieldA = document.getElementById('fieldA');
const fieldB = document.getElementById('fieldB');
const fieldC = document.getElementById('fieldC');
const multiplier = document.getElementById('multiplier');
const results = document.getElementById('results');

function calculate() {
    const a = parseInt(fieldA.value);
    const b = parseInt(fieldB.value);
    const c = parseInt(fieldC.value);
    const mult = parseFloat(multiplier.value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        results.classList.remove('show');
        return;
    }

    if (b === 0) {
        results.classList.remove('show');
        return;
    }

    // Step 1: Calculate percentage
    const percentage = Math.ceil((a / b) * 100);

    // Step 2: Apply percentage to field C
    const intermediateResult = (percentage / 100) * c;

    // Step 3: Apply multiplier
    const finalResult = Math.ceil(intermediateResult * mult);
    const multPercentage = mult * 100;

    // Display calculations
    const step1 = document.createElement('div');
    step1.className = 'calculation-step';
    step1.textContent = `Step 1: Percentage of downgraded leg out of full fligth: (${a} / ${b}) × 100 = ${percentage}%`;

    const step2 = document.createElement('div');
    step2.className = 'calculation-step';
    step2.textContent = `Step 2: Apply percentage on the total Miles: ${percentage} × ${c} = ${intermediateResult}`;

    const step3 = document.createElement('div');
    step3.className = 'calculation-step';
    step3.textContent = `Step 3: Apply refund rate: ${multPercentage}% of ${intermediateResult} = ${finalResult.toFixed(2)}`;
    
    const finalDiv = document.createElement('div');
    finalDiv.className = 'final-result';
    finalDiv.innerHTML = `<div class="result-label">Final Result</div><div>${finalResult.toFixed(2)}</div>`;

    results.innerHTML = '';
    results.appendChild(step1);
    results.appendChild(step2);
    results.appendChild(step3);
    results.appendChild(finalDiv);

    results.classList.add('show');
}

fieldA.addEventListener('input', calculate);
fieldB.addEventListener('input', calculate);
fieldC.addEventListener('input', calculate);
multiplier.addEventListener('change', calculate);
