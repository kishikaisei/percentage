const fieldA = document.getElementById('fieldA');
const fieldB = document.getElementById('fieldB');
const fieldC = document.getElementById('fieldC');
const results = document.getElementById('results');

function calculate() {
    const a = parseInt(fieldA.value);
    const b = parseInt(fieldB.value);
    const c = parseInt(fieldC.value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        results.classList.remove('show');
        return;
    }

    if (b === 0) {
        results.classList.remove('show');
        return;
    }

    // Step 1: Calculate percentage
    const percentage = (a / b) * 100;

    // Step 2: Apply percentage to field C
    const result = (percentage / 100) * c;

    // Display calculations
    document.getElementById('step1').textContent = 
        `Step 1: Calculate percentage of A out of B: (${a} / ${b}) × 100 = ${percentage.toFixed(2)}%`;
    
    document.getElementById('step2').textContent = 
        `Step 2: Convert percentage to decimal: ${percentage.toFixed(2)}% = ${(percentage / 100).toFixed(4)}`;
    
    document.getElementById('step3').textContent = 
        `Step 3: Apply to Field C: ${(percentage / 100).toFixed(4)} × ${c} = ${result.toFixed(2)}`;
    
    document.getElementById('finalResult').textContent = result.toFixed(2);

    results.classList.add('show');
}

fieldA.addEventListener('input', calculate);
fieldB.addEventListener('input', calculate);
fieldC.addEventListener('input', calculate);
