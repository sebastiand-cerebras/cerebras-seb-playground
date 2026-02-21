const ANNUAL_ALLOWANCE = 10000;
const YEAR = 2026;

function calculateMileage() {
    const today = new Date();
    const startOfYear = new Date(YEAR, 0, 1);
    const endOfYear = new Date(YEAR, 11, 31);
    
    const totalDays = Math.floor((endOfYear - startOfYear) / (1000 * 60 * 60 * 24)) + 1;
    const daysElapsed = Math.floor((today - startOfYear) / (1000 * 60 * 60 * 24)) + 1;
    const daysRemaining = totalDays - daysElapsed;
    
    const safeMileageToday = (ANNUAL_ALLOWANCE / totalDays) * daysElapsed;
    const dailyAverage = ANNUAL_ALLOWANCE / totalDays;
    const remainingAllowance = ANNUAL_ALLOWANCE - safeMileageToday;
    const remainingDailyLimit = daysRemaining > 0 ? remainingAllowance / daysRemaining : 0;
    const yearProgress = (daysElapsed / totalDays) * 100;
    
    return {
        safeMileageToday: safeMileageToday.toFixed(1),
        dailyAverage: dailyAverage.toFixed(1),
        daysElapsed,
        daysRemaining,
        remainingAllowance: remainingAllowance.toFixed(1),
        remainingDailyLimit: remainingDailyLimit.toFixed(1),
        yearProgress: yearProgress.toFixed(1),
        today: today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    };
}

function updateDisplay() {
    const data = calculateMileage();
    
    document.getElementById('safeMileage').textContent = data.safeMileageToday;
    document.getElementById('dailyAverage').textContent = `${data.dailyAverage} miles/day`;
    document.getElementById('todayDate').textContent = data.today;
    document.getElementById('daysElapsed').textContent = data.daysElapsed;
    document.getElementById('daysRemaining').textContent = data.daysRemaining;
    document.getElementById('remainingAllowance').textContent = data.remainingAllowance;
    document.getElementById('remainingDailyLimit').textContent = data.remainingDailyLimit;
    document.getElementById('yearProgress').style.width = `${data.yearProgress}%`;
    
    const statusCard = document.getElementById('statusCard');
    const statusMessage = document.getElementById('statusMessage');
    
    statusMessage.className = 'status';
    
    const today = new Date();
    if (today.getFullYear() > YEAR) {
        statusCard.style.display = 'none';
    } else if (today.getFullYear() < YEAR) {
        statusMessage.textContent = '🎯 Mileage tracking begins Jan 1, 2026';
        statusMessage.classList.add('on-track');
    } else {
        statusMessage.textContent = `✅ On track: ${data.yearProgress}% of year complete`;
        statusMessage.classList.add('on-track');
    }
}

document.addEventListener('DOMContentLoaded', updateDisplay);