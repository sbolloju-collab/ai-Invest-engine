# Getting Started

## Accessing the App

1. Open `index.html` in your web browser
2. The app loads with default sample values (Customer Operations & Contract Copilot project)
3. No installation or backend required — everything runs locally in your browser

## First-Time Setup

### Enable Auto-Save
- Check the **Auto-Save** toggle in the header (enabled by default)
- Your progress is saved to browser localStorage automatically every 30 seconds
- Your work persists even if you close the tab

### Load Previous Work
- Use the **💾 Save** button to export your session
- Use **📥 JSON** to load a previously saved evaluation

## Basic Workflow

1. **Fill in basic project details** — Project name, funding stage, team size
2. **Enter cost assumptions** — CapEx, OpEx, and user counts
3. **Quantify value capture** — Hours saved, wage rates, realization rates
4. **Review financial metrics** — NPV, ROIC, payback period automatically calculate
5. **Explore scenarios** — Test Build vs. Buy and sensitivity analyses
6. **Generate report** — Export as JSON, CSV, or PDF for stakeholders

## User Guide by Step

### Step 1: Project & Cost Estimator
Enter operational metrics without worrying about accounting formulas:
- **Upfront CapEx**: Dev team costs + consulting + data pipeline setup
- **Annual OpEx**: User licenses + compute costs + admin overhead
- **Value Capture**: Employees impacted × hours saved × hourly rate × realization rate

The app calculates **true cash P&L** accounting for productivity theater risk.

### Step 2: Build vs. Buy Strategy
Compare two investment paths:
- **Option A (Build In-House)**: Higher upfront CapEx, proprietary IP, lower recurring costs
- **Option B (Buy Commercial SaaS)**: Lower setup fees, fast deployment, higher subscription costs

The tool shows 3-year TCO, NPV, and payback comparison side-by-side.

### Step 3: Growth & Hurdle Rates
Set enterprise assumptions:
- **Hurdle Rate (WACC)**: Your minimum required return (typically 8-12% for AI projects)
- **Growth Curves**: Year 2 & Year 3 value expansion as adoption scales
- **OpEx Inflation**: Account for token/API cost escalation over time

### Step 4: Decision Scorecard
Review your financial scorecard with three key metrics:
- **NPV** (Net Present Value) — Must be > $0
- **ROIC** (Return on Capital) — Must exceed your hurdle rate
- **Payback** — Time to recover initial investment

The verdict box provides **funding recommendation**:
- 🟢 **APPROVED** — Advance to next funding stage
- 🟡 **HOLD** — Re-evaluate before committing capital
- 🔴 **TERMINATE** — Negative risk-adjusted returns

### Step 5: Sensitivity Stress Test
Explore how NPV changes across:
- **Varying WACC** (6%-14% hurdle rates)
- **Varying Realization** (35%-95% cash conversion rates)

Green cells = positive NPV; Red cells = negative NPV

## Saving & Exporting

### Save Your Work
- **💾 Save** — Download current state as encrypted JSON file
- **📥 JSON** — Export raw evaluation data for spreadsheet analysis
- **📊 CSV** — Export financial tables for Excel modeling

### Print & PDF
- **🖨️ Print / PDF** — Generate executive memorandum for investment committees
- Formatted for letter-size paper with professional styling
- Includes all financial tables, verdicts, and sensitivity analysis

### Clear Data
- **🗑️ Clear** — Reset all fields to defaults (cannot undo)

## Tips & Best Practices

✅ **Start Conservative** — Use lower realization rates (35-50%) initially, then adjust upward  
✅ **Test Scenarios** — Toggle between Base Case, Conservative, and Aggressive scenarios  
✅ **Validate Assumptions** — Cross-check OpEx and benefit numbers with finance team  
✅ **Export Early** — Save your work frequently to avoid losing progress  
✅ **Print for Governance** — Generate PDF report for CFO and investment committee review  
✅ **Use Tooltips** — Hover over terms with dotted underlines for quick definitions  

## Troubleshooting

**My data disappeared**
- Check if Auto-Save is enabled
- Look for saved JSON files in your Downloads folder
- Browser localStorage may be cleared on private/incognito windows

**Numbers seem wrong**
- Verify inputs in Step 1 (CapEx, OpEx, benefit values)
- Check your hurdle rate in Step 3
- Review growth curve multipliers (should be ≥ 1.0)

**Print/PDF looks odd**
- Use Chrome or Firefox for best print rendering
- Set print margins to "minimum" or "narrow"
- Disable "Print backgrounds" if text is hard to read

**Sensitivity table shows all red**
- Your hurdle rate may be too high relative to expected returns
- Increase benefit realization or reduce OpEx assumptions
- Review your growth curve assumptions in Step 3

---

**Need Help?** Review the [Glossary](Glossary) for financial term definitions, or check [FAQ](FAQ) for common questions.
