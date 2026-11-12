# CallHub Energy (deyenew)

Rebuilt Next.js + TypeScript clean energy platform combining **Deye** solar technology with **CallHub Nigeria**'s enterprise service and distribution framework.

---

## 🛡️ Copyright & Trademark Compliance Strategy

To ensure zero trademark or copyright infringement on Ningbo Deye Inverter Technology Co., Ltd.:
1. **Independent Distributor Positioning**: The platform clearly identifies **CallHub Nigeria** as an independent commercial supplier, technical integrator, and authorized reseller of authentic Deye systems in Nigeria.
2. **Explicit Disclaimers**: Displayed across the top banner, dedicated legal notice module, request form, and footer, stating that *Deye®* and all brand marks belong to their respective trademark holders.
3. **CallHub Enterprise Identity**: Uses CallHub's brand design language (dark graphite `#1B2123` / `#22282a`, electric cyan `#66E8FA`), official CallHub contact lines (`09134280508`, `09138975362`), and authorized corporate email (`sales@callhub.com.ng`).

---

## ⚡ Featured Clean Energy Solutions

- **Deye Hybrid & String Solar Inverters**: Single Phase, Three Phase, and Low/High-Voltage Hybrid Inverters (5kW - 50kW) with ultra-fast <4ms UPS transfer and smart generator synchronization.
- **Deye Energy Storage Systems (ESS)**: Tier-1 LiFePO4 residential storage (5.12kWh - 30kWh), C&I cabinets (50kWh - 200kWh), and containerized storage units (1MWh+).
- **Deye Solar Air Conditioning**: 100% DC48V off-grid air conditioning and Hybrid AC/DC solar inverter climate systems.
- **Deye Dehumidification Systems**: Home, concealed ceiling-mounted, and heavy-duty industrial dehumidification.
- **Interactive Quote Engine**: Integrated with Next.js Server Actions and Nodemailer for rapid customer inquiry dispatch to CallHub's sales engineering desk.

---

## 🚀 Getting Started

### Development Server
```bash
npm run dev
# or
npm run dev -- -p 3000
```

### Production Build
```bash
npm run build
npm run start
```

---

## 📁 Key Project Files

- `app/page.tsx` — Main composite landing page
- `app/layout.tsx` — Global root layout with SEO metadata & Sonner toasts
- `app/globals.css` — Tailwind CSS v4 styling with CallHub theme variables
- `app/actions/sendQuote.ts` — Type-safe Server Action for quote submission via Zoho Nodemailer
- `components/TopBanner.tsx` — Authorized reseller header strip
- `components/Navbar.tsx` — CallHub Energy navigation with responsive drawer
- `components/Hero.tsx` — High-conversion clean energy hero with diesel-reduction metrics
- `components/PartnershipNotice.tsx` — Legal trademark & distributor disclaimer
- `components/SolarInverters.tsx` — Interactive showcase for Deye hybrid & string inverters
- `components/SolarBatteries.tsx` — LiFePO4 residential & industrial battery storage
- `components/SolarAirConditioners.tsx` — Direct solar AC & solar water heating systems
- `components/Dehumidifiers.tsx` — Precision humidity extraction systems
- `components/WhyChooseCallHub.tsx` — CallHub supply chain & engineering advantages
- `components/RequestAQuote.tsx` — Interactive sizing and quotation form
- `components/Footer.tsx` — Comprehensive footer with contact channels and legal terms
