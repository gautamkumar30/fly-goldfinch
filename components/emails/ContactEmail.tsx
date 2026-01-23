import * as React from 'react';

interface ContactEmailProps {
  firstName: string;
  destination: string;
  itineraries: any[];
}

export const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({
  firstName,
  destination,
  itineraries,
}) => (
  <div style={{ fontFamily: 'sans-serif', color: '#333' }}>
    <h1>Hello {firstName}!</h1>
    <p>Thank you for reaching out to Fly Goldfinch. We're excited to help you plan your trip to {destination}.</p>
    
    <h2>Relevant Itineraries for You</h2>
    {itineraries.length > 0 ? (
      <div style={{ display: 'grid', gap: '20px' }}>
        {itineraries.map((itinerary) => (
          <div key={itinerary.id} style={{ border: '1px solid #eee', padding: '15px', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#D4AF37' }}>{itinerary.title}</h3>
            <p style={{ margin: '0 0 5px 0' }}><strong>Duration:</strong> {itinerary.duration.days} Days, {itinerary.duration.nights} Nights</p>
            <p style={{ margin: '0 0 10px 0' }}><strong>Starting from:</strong> ₹{itinerary.price.toLocaleString()}</p>
            <a 
              href={`https://flygoldfinch.com/itineraries/${itinerary.slug}`} 
              style={{ 
                backgroundColor: '#002147', 
                color: 'white', 
                padding: '8px 16px', 
                textDecoration: 'none', 
                borderRadius: '4px',
                fontSize: '14px'
              }}
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    ) : (
      <p>We'll be in touch soon with some customized options for you!</p>
    )}
    
    <p style={{ marginTop: '30px' }}>Best regards,<br />The Fly Goldfinch Team</p>
  </div>
);
