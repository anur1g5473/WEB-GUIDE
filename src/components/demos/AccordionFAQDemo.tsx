import { useState } from 'react';

export default function AccordionFAQDemo() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: 'Can I use this for commercial projects?', a: 'Yes, absolutely! The license permits both personal and commercial use without any attribution required. Build your SaaS, client sites, or templates freely.' },
    { q: 'Do you offer a money-back guarantee?', a: 'We offer a 14-day zero-questions-asked refund policy. If the product does not meet your expectations, simply email us for a full refund.' },
    { q: 'Is it compatible with React 18?', a: 'Yes. All components are strictly tested against React 18 strict mode and leverage the new concurrent rendering features natively.' },
    { q: 'How often do you release updates?', a: 'We push new components and bug fixes bi-weekly on Tuesdays. All customers get lifetime access to future updates for free.' }
  ];

  return (
    <div className="demo-container">
      <div className="demo-faq">
        <div className="demo-accordion">
          {faqs.map((faq, i) => (
            <div className="demo-accordion-item" key={i}>
              <button 
                className="demo-accordion-btn"
                aria-expanded={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{faq.q}</span>
                <span className="demo-accordion-icon">+</span>
              </button>
              <div 
                className="demo-accordion-content"
                style={{ maxHeight: openIndex === i ? '200px' : '0' }}
              >
                <div className="demo-accordion-inner">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
