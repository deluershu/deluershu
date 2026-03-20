import { Link } from 'react-router-dom';
import './CTAButton.css';

interface CTAButtonProps {
  text?: string;
  to?: string;
  onClick?: (e?: React.FormEvent) => void;
  type?: 'primary' | 'secondary';
  size?: 'normal' | 'large';
}

const CTAButton = ({
  text = '立即咨询',
  to = '/contact',
  onClick,
  type = 'primary',
  size = 'normal',
}: CTAButtonProps) => {
  const className = `cta-button ${type} ${size}`;

  if (onClick) {
    return (
      <button className={className} onClick={() => onClick()}>
        {text}
      </button>
    );
  }

  return (
    <Link to={to} className={className}>
      {text}
    </Link>
  );
};

export default CTAButton;
