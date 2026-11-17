"use client";
import {
  Mail,
  Send,
  User,
  Building,
  Phone,
  MessageSquare,
  Wallet,
  Loader2,
} from "lucide-react";
import React, { useState } from "react";
import { sendQuoteAction } from "@/app/actions/sendQuote";
import { toast } from "sonner";

const RequestAQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectDetails: "",
    budget: "Standard",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await sendQuoteAction({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      category: "Deye Clean Energy System",
      projectScale: formData.budget,
      details: formData.projectDetails,
    });

    if (response?.success) {
      toast.success("Request submitted successfully! CallHub will reach out shortly.");
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectDetails: "",
        budget: "Standard",
      });
    } else {
      toast.error(response?.message || "Failed to submit request. Please email deye@callhub.com.ng directly.");
      setLoading(false);
    }
  };

  return (
    <div
      id="quote-section"
      className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 md:items-stretch bg-neutral-50 p-4 sm:p-6 pt-20 md:p-10 gap-6 md:gap-0"
    >
      {/* LEFT COLUMN: Call to Action & Quick Email Card */}
      <div className="p-2 sm:p-4 md:py-8 flex items-stretch justify-center h-full">
        <div className="p-6 sm:p-10 bg-blue-800 w-full h-full rounded-2xl flex flex-col gap-6 justify-center items-center text-white shadow-xl">
          <div className="text-center space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Request A Quote
            </h2>
            <p className="text-blue-100 max-w-sm mx-auto text-sm md:text-base">
              Fill out our form for a structured proposal, or jump straight to our
              direct email line.
            </p>
          </div>

          <div className="flex items-center gap-4 w-full max-w-xs justify-center my-2">
            <div className="h-[1px] bg-blue-600 flex-1"></div>
            <p className="text-sm font-semibold tracking-wider text-blue-200">
              OR
            </p>
            <div className="h-[1px] bg-blue-600 flex-1"></div>
          </div>

          <div className="flex flex-col justify-between min-h-[180px] w-full max-w-md bg-white p-6 rounded-xl text-blue-800 shadow-lg border border-blue-50/50 hover:scale-[1.01] transition-transform duration-300">
            <div className="flex items-center justify-between w-full">
              <h3 className="text-2xl font-bold tracking-tight">
                Send Us An Email
              </h3>
              <div className="bg-blue-50 p-2 rounded-lg text-blue-700">
                <Mail className="w-5 h-5" />
              </div>
            </div>
            <a
              href="mailto:deye@callhub.com.ng"
              className="text-base sm:text-lg font-bold hover:text-blue-950 self-end flex items-center gap-2 group transition-colors mt-4"
            >
              <span className="group-hover:underline underline-offset-4">
                deye@callhub.com.ng
              </span>
              <Send className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: The Interactive Dynamic Form */}
      <div className="p-2 sm:p-4 md:py-8 flex items-stretch justify-center h-full">
        <form
          onSubmit={handleSubmit}
          className="w-full h-full max-w-xl bg-white p-6 sm:p-8 rounded-2xl md:shadow-md border border-neutral-200/60 flex flex-col gap-5 justify-center"
        >
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-blue-800">Quote Specifics</h3>
          </div>

          {/* Two Column Input Grid for Core Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-xs font-semibold text-blue-900 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-700" />
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-blue-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-neutral-800 placeholder-neutral-400"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-xs font-semibold text-blue-900 mb-2">
                Company Name
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-700" />
                <input
                  type="text"
                  placeholder="Optional"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-blue-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-neutral-800 placeholder-neutral-400"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-xs font-semibold text-blue-900 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-700" />
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-blue-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-neutral-800 placeholder-neutral-400"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-xs font-semibold text-blue-900 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-700" />
                <input
                  required
                  type="tel"
                  placeholder="+234..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-blue-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-neutral-800 placeholder-neutral-400"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* Segmented Tier Selector */}
          <div>
            <label className="block text-xs font-semibold text-blue-900 mb-2 flex items-center gap-1">
              <Wallet className="w-3.5 h-3.5" /> Project Scale / Tier
            </label>
            <div className="grid grid-cols-3 gap-2 p-1 rounded-lg border border-blue-700">
              {["Residential", "Standard", "Commercial"].map((tier) => (
                <button
                  key={tier}
                  type="button"
                  onClick={() => setFormData({ ...formData, budget: tier })}
                  className={`py-2 text-xs font-semibold rounded-md transition-all ${
                    formData.budget === tier
                      ? "text-white bg-blue-700 shadow-sm border border-neutral-200/60"
                      : "text-blue-900 hover:text-blue-700"
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>
          </div>

          {/* Text Area */}
          <div className="relative">
            <label className="block text-xs font-semibold text-blue-900 mb-2">
              Project Requirements / Load Details
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-blue-700" />
              <textarea
                rows={4}
                required
                placeholder="Describe your inverter capacity requirements, energy storage targets, or current baseline consumption profile..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-blue-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-neutral-800 placeholder-neutral-400 resize-none"
                value={formData.projectDetails}
                onChange={(e) =>
                  setFormData({ ...formData, projectDetails: e.target.value })
                }
              />
            </div>
          </div>

          {/* Submit Action Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-auto bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-700/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 text-sm"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <span>Submit Quote Request</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestAQuote;
