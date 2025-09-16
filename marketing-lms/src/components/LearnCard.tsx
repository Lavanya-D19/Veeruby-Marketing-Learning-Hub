import React from 'react';

interface LearnCardProps {
  title: string;
  description: string;
  href: string;
  badge?: string;
  ariaLabel?: string;
}

export const LearnCard: React.FC<LearnCardProps> = ({ title, description, href, badge, ariaLabel }) => (
  <a
    className="learn-card"
    href={href}
    aria-label={ariaLabel || title}
    tabIndex={0}
  >
    {badge && <span className="pill">{badge}</span>}
    <h3>{title}</h3>
    <p>{description}</p>
  </a>
);
