"use client";
import React, { useState } from "react";
import { Calculator, ArrowRight, Zap, TrendingDown, Clock, ShieldAlert } from "lucide-react";

export default function SolarCalculator() {
  const [monthlyFuel, setMonthlyFuel] = useState<number>(350000); // ₦350,000 / month default
  const [dailyGenHours, setDailyGenHours] = useState<number>(8); // 8 hours/day default

  // Estimated fuel savings over 1 year and 5 years
  const annualFuelSpend = monthlyFuel * 12;
  const fiveYearFuelSpend = annualFuelSpend * 5;

  // Estimated solar offset (typically 80-90% fuel cut with Deye Hybrid + ESS)
  const annualSavings = Math.round(annualFuelSpend * 0.85);
  const fiveYearSavings = Math.round(fiveYearFuelSpend * 0.85);

  // Recommended system size based on fuel expenditure bracket
  let recommendedSystem = {
    name: "5kW Deye Hybrid + 5.12kWh LiFePO4 ESS",
    desc: "Perfect for 3-4 bedroom homes running refrigerator, electronics, fans, and 1 inverter AC.",
    paybackMonths: "10 - 14 Months",
  };

  if (monthlyFuel > 700000 && monthlyFuel <= 1500000) {
    recommendedSystem = {
      name: "8kW - 12kW Deye Hybrid + 10-15kWh Battery Storage",
      desc: "Ideal for luxury duplexes, clinics, and offices running 3-4 ACs, pumps, and continuous daytime loads.",
      paybackMonths: "9 - 12 Months",
    };
  } else if (monthlyFuel > 1500000) {
    recommendedSystem = {
      name: "16kW - 50kW Deye Commercial Hybrid + 30-100kWh C&I ESS",
      desc: "Engineered for commercial plazas, factories, hospitals, and server rooms requiring uninterrupted 3-phase power.",
      paybackMonths: "7 - 10 Months",
    };
  }

  const formatNaira = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="w-full bg-[#1e2426] py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#66E8FA] mb-2">
            <Calculator className="w-4 h-4 text-[#66E8FA]" />
            <span>Interactive ROI Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Calculate Your Generator Fuel Savings
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            With diesel and petrol prices escalating in Nigeria, a genuine Deye Solar + Battery system pays for itself rapidly while protecting your electronics from voltage spikes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Interactive Controls */}
          <div className="lg:col-span-6 bg-[#22282a] border border-gray-800 rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#66E8FA]" />
                <span>Your Current Power Profile</span>
              </h3>

              {/* Slider 1: Fuel Expense */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-gray-300">
                    Estimated Monthly Fuel Expense (Petrol / Diesel)
                  </label>
                  <span className="text-base font-bold text-[#66E8FA] font-mono bg-[#1B2123] px-3 py-1 rounded-lg border border-[#66E8FA]/20">
                    {formatNaira(monthlyFuel)}
                  </span>
                </div>
                <input
                  type="range"
                  min={100000}
                  max={3000000}
                  step={50000}
                  value={monthlyFuel}
                  onChange={(e) => setMonthlyFuel(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#1B2123] rounded-lg appearance-none cursor-pointer accent-[#66E8FA]"
                />
                <div className="flex justify-between text-[11px] text-gray-500 mt-2 font-mono">
                  <span>₦100,000</span>
                  <span>₦1,500,000</span>
                  <span>₦3,000,000+</span>
                </div>
              </div>

              {/* Slider 2: Daily Hours */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-gray-300">
                    Daily Generator Running Hours
                  </label>
                  <span className="text-base font-bold text-[#66E8FA] font-mono bg-[#1B2123] px-3 py-1 rounded-lg border border-[#66E8FA]/20">
                    {dailyGenHours} Hours / Day
                  </span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={24}
                  step={1}
                  value={dailyGenHours}
                  onChange={(e) => setDailyGenHours(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#1B2123] rounded-lg appearance-none cursor-pointer accent-[#66E8FA]"
                />
                <div className="flex justify-between text-[11px] text-gray-500 mt-2 font-mono">
                  <span>2 hrs</span>
                  <span>12 hrs</span>
                  <span>24 hrs (Full Off-Grid)</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#1B2123] border border-gray-800 text-xs text-gray-400 flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p>
                  *Does not include maintenance, engine oil changes, and alternator servicing costs, which typically add an extra 15-20% to generator operating expenditure.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Projected Financial Return & System Recommendation */}
          <div className="lg:col-span-6 bg-[#1B2123] border border-[#66E8FA]/25 rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#66E8FA]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <span className="text-xs uppercase font-bold text-[#66E8FA] tracking-wider block mb-2">
                Projected Savings Output
              </span>
              <h3 className="text-2xl font-bold text-white mb-6">
                Your Estimated Financial Return
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-5 rounded-2xl bg-[#22282a] border border-gray-800">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                    <TrendingDown className="w-4 h-4 text-emerald-400" />
                    <span>Annual Fuel Savings</span>
                  </div>
                  <div className="text-2xl font-extrabold text-emerald-400 font-mono">
                    {formatNaira(annualSavings)}
                  </div>
                  <span className="text-[11px] text-gray-500">Every 12 months</span>
                </div>

                <div className="p-5 rounded-2xl bg-[#22282a] border border-gray-800">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                    <TrendingDown className="w-4 h-4 text-[#66E8FA]" />
                    <span>5-Year Cumulative Savings</span>
                  </div>
                  <div className="text-2xl font-extrabold text-[#66E8FA] font-mono">
                    {formatNaira(fiveYearSavings)}
                  </div>
                  <span className="text-[11px] text-gray-500">Money kept in your business</span>
                </div>
              </div>

              {/* Recommended Sizing Box */}
              <div className="p-5 rounded-2xl bg-[#22282a] border border-[#66E8FA]/20 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#66E8FA] uppercase tracking-wider">
                    Recommended Deye Configuration
                  </span>
                  <span className="text-xs font-medium text-amber-300 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                    Payback: {recommendedSystem.paybackMonths}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-1.5">
                  {recommendedSystem.name}
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {recommendedSystem.desc}
                </p>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-gray-400 text-center sm:text-left">
                Ready to cut this generator drain today?
              </span>
              <a
                href="#quote-section"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#66E8FA] hover:bg-[#4adbf0] text-[#1B2123] font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md shadow-[#66E8FA]/20 hover:scale-[1.02]"
              >
                <span>Request Custom Sizing</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

