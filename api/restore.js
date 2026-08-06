const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
    
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        // 1. Find customer by email
        const customers = await stripe.customers.list({ email: email, limit: 1 });
        
        if (customers.data.length === 0) {
            return res.status(404).json({ proAccess: false, message: "No account found for this email." });
        }

        // 2. Check if this customer has successful payments
        const payments = await stripe.paymentIntents.list({
            customer: customers.data[0].id,
            limit: 10
        });

        const hasPaid = payments.data.some(p => p.status === 'succeeded');

        if (hasPaid) {
            res.status(200).json({ proAccess: true, message: "Purchase restored successfully!" });
        } else {
            res.status(403).json({ proAccess: false, message: "No successful purchases found for this email." });
        }
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
}

