import { CONTACT_EMAIL, CONTACT_MAILTO } from '../../config/contact';

export const FAQ_CATEGORIES = [
  'General Questions',
  'Booking & Payments',
  'Travel Preparation',
  'During the Trip',
  'Family & Group Travel',
];

export const FAQ_GROUPS = [
  {
    category: 'General Questions',
    items: [
      {
        question: 'How do I book a tour?',
        answer:
          "You can book directly through our website by selecting your preferred tour and dates, then following the secure checkout process. Once your booking is confirmed, you'll receive a confirmation email with all the details.",
      },
      {
        question: 'Can I customize my itinerary?',
        answer:
          "Absolutely! We specialize in bespoke travel. If you're looking for something unique, our expert planners can adjust destinations, duration, and activities to suit your personal style. Just reach out via our contact page.",
      },
      {
        question: 'Are flights included?',
        answer:
          'Our standard packages focus on land-based experiences and boutique accommodations. International flights are typically not included, but we can recommend flight paths or provide them as an optional add-on for most regions.',
      },
      {
        question: 'How many people are in a group tour?',
        answer:
          'We prefer small, intimate groups to ensure a premium experience. Most of our boutique group tours have between 8 and 14 participants, allowing for more personalized attention from our guides.',
      },
    ],
  },
  {
    category: 'Booking & Payments',
    items: [
      {
        question: 'Can I pay in installments?',
        answer:
          'Yes, we offer flexible payment plans for most of our signature packages. Usually, a 20% deposit is required at the time of booking, with the balance payable in monthly installments or a final payment 60 days before departure.',
      },
      {
        question: 'What is your cancellation policy?',
        answer:
          'We understand plans can change. Cancellations made more than 90 days before departure typically receive a full refund minus a small administrative fee. Specific policies vary by package, so please check the terms on your booking page.',
      },
      {
        question: 'How long does it take to process a refund?',
        answer:
          'Refunds are processed within 7-10 business days of approval. Depending on your bank, it may take an additional 3-5 days for the funds to appear in your account.',
      },
    ],
  },
  {
    category: 'Travel Preparation',
    items: [
      {
        question: 'Is travel insurance included?',
        answer:
          'While we highly recommend it, travel insurance is not automatically included in our prices. We partner with leading providers and can help you select a comprehensive plan that covers health, luggage, and trip interruptions.',
      },
      {
        question: 'Do I need a visa for my destination?',
        answer:
          'Visa requirements depend on your nationality and destination. Our travel consultants will provide you with a detailed visa information sheet after booking and can assist with the application process where possible.',
      },
    ],
  },
];

export const FAQ_SUPPORT_CARD = {
  title: 'Let us guide you-reach out anytime.',
  email: CONTACT_EMAIL,
  mailto: CONTACT_MAILTO,
  buttonLabel: 'Contact Support',
};
