# RateCalc Pro 🚀

RateCalc Pro is a premium micro-SaaS tool designed to help freelancers instantly calculate their minimum hourly and daily rates based on target salary, overhead costs, and tax rates. 

Built with a sleek, responsive UI and integrated with a fully functional Stripe paywall, it is ready to be deployed as a serverless application and monetized.

## ✨ Features

* **Real-Time Calculations:** Instant math using vanilla JavaScript.
* **Global Currencies:** Built-in dropdown supporting USD, EUR, GBP, CAD, AUD, INR, and JPY.
* **Dark/Light Mode:** Automatically respects system preferences and includes a manual toggle with `localStorage` memory.
* **PDF Export:** Clean, branded PDF summaries generated purely on the client side using `html2pdf.js`.
* **Pro Paywall:** A seamless "locked tab" experience that hides premium features until a successful Stripe checkout.
* **Purchase Restoration:** Email-based purchase verification via Stripe's API to restore access on new devices without requiring a complex user database.

## 🛠 Tech Stack

* **Frontend:** HTML5, Vanilla JavaScript, Tailwind CSS (via CDN)
* **Backend:** Vercel Serverless Functions (Node.js)
* **Payments:** Stripe Checkout & Stripe API
* **Deployment:** Vercel

## 📂 Project Structure

```text
ratecalc-pro/
├── public/
│   └── index.html       # The frontend UI and application logic
├── api/
│   ├── checkout.js      # Serverless function to generate Stripe Checkout sessions
│   └── restore.js       # Serverless function to verify previous purchases
├── package.json         # Node.js dependencies (Stripe)
└── README.md            # Project documentation
