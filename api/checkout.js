const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price: process.env.STRIPE_PRICE_ID, // The ID of your $9 Product in Stripe
                    quantity: 1,
                },
            ],
            mode: 'payment',
            // Redirect back to the site with a success parameter
            success_url: `${req.headers.origin}/?success=true`,
            cancel_url: `${req.headers.origin}/`,
        });

        res.status(200).json({ url: session.url });
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
}

