import NewsletterSignup from '../models/NewsLetter.js';

export const newsLetterSign= async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: 'Email is required' });

  try {
    // Prevent duplicate signups
    const existing = await NewsletterSignup.findOne({ email });
    if (existing) {
      return res.status(200).json({ message: "You're already subscribed!" });
    }
    await NewsletterSignup.create({ email });
    res.status(201).json({ message: 'Subscribed successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

