import React from 'react';

type TemplateCardProps = {
  title: string;
  image: string;
  onSelect: () => void;
  variant: 'template1' | 'template2';
};

const TemplateCard: React.FC<TemplateCardProps> = ({ title, image, onSelect, variant }) => {
  const cardStyle: React.CSSProperties =
    variant === 'template1'
      ? {
          background: 'linear-gradient(135deg, #e0f7fa, #ffffff)',
          color: '#004d40',
          borderRadius: '12px',
          padding: '16px',
          margin: '12px',
          boxShadow: '0 4px 12px rgba(0, 77, 64, 0.2)',
          width: '220px',
          textAlign: 'center',
          transition: 'transform 0.2s ease',
          cursor: 'pointer',
        }
      : {
          background: 'linear-gradient(135deg, #fce4ec, #ffffff)',
          color: '#880e4f',
          borderRadius: '12px',
          padding: '16px',
          margin: '12px',
          boxShadow: '0 4px 12px rgba(136, 14, 79, 0.2)',
          width: '220px',
          textAlign: 'center',
          transition: 'transform 0.2s ease',
          cursor: 'pointer',
        };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '10px',
  };

  const buttonStyle: React.CSSProperties = {
    marginTop: '10px',
    padding: '8px 16px',
    backgroundColor: variant === 'template1' ? '#00796b' : '#c2185b',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => ((e.currentTarget.style.transform = 'translateY(-5px)'))}
      onMouseLeave={(e) => ((e.currentTarget.style.transform = 'translateY(0)'))}
    >
      <img src={image} alt={title} style={imageStyle} />
      <h3>{title}</h3>
      <button style={buttonStyle} onClick={onSelect}>
        Select
      </button>
    </div>
  );
};

export default TemplateCard;
