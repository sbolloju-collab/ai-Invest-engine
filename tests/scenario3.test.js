const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

function parseMoneyToNumber(s) {
  if (!s) return NaN;
  const cleaned = s.replace(/[^\d\-\.\+]/g, '');
  return Number(cleaned) || NaN;
}

describe('Scenario 3 — Small Support Automation (end-to-end UI calc)', () => {
  jest.setTimeout(15000);

  test('produces expected NPV, ROIC, payback and buy NPV', async () => {
    const htmlPath = path.resolve(__dirname, '..', 'index.html');
    const html = fs.readFileSync(htmlPath, 'utf8');

    const dom = new JSDOM(html, {
      runScripts: 'dangerously',
      resources: 'usable',
      url: 'http://localhost'
    });

    // wait for the inline script to execute and attach functions to window
    await new Promise((resolve) => {
      dom.window.addEventListener('load', () => resolve(), { once: true });
      // safety timeout
      setTimeout(() => resolve(), 1000);
    });

    const { document, window } = dom.window;

    // Apply Estimator inputs (Scenario 3)
    document.getElementById('estDevMonths').value = '4';
    document.getElementById('estConsulting').value = '25000';
    document.getElementById('estDataPipelines').value = '15000';

    document.getElementById('estUsers').value = '30';
    document.getElementById('estCostPerUser').value = '25';
    document.getElementById('estAdminOpex').value = '11000';

    document.getElementById('estEmpCount').value = '10';
    document.getElementById('estHoursSaved').value = '5.0';
    document.getElementById('estHourlyWage').value = '35';
    document.getElementById('estCaptureType').value = '60';

    // Run estimator and apply to dashboard
    // these functions are defined in index.html script
    window.runEstimators && window.runEstimators();
    window.applyEstimatesToDashboard && window.applyEstimatesToDashboard();

    // ensure WACC = 10% (as in the scenario)
    document.getElementById('wacc').value = '10';
    window.updateFromSlider && window.updateFromSlider('wacc');

    // allow any small async updates to complete
    await new Promise((r) => setTimeout(r, 50));

    // Access modelState created by the page script
    const modelState = window.modelState || {};

    // Expect NPV ≈ 2791 (allow small rounding)
    expect(Math.round(modelState.npv)).toBe(2791);

    // ROIC ≈ 41.8%
    expect(Number(modelState.roic.toFixed(1))).toBeCloseTo(41.8, 1);

    // Payback in years ≈ 2.5
    expect(modelState.paybackYears).toBeCloseTo(2.5, 1);

    // Build vs Buy: check displayed buy NPV ~ 7222.76
    const bbNpvBuyText = document.getElementById('bbNpvBuy')?.textContent || '';
    const bbNpvBuyNum = parseMoneyToNumber(bbNpvBuyText);
    expect(Math.round(bbNpvBuyNum)).toBe(7223);
  });
});
