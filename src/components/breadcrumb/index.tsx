import React from 'react';
import { Link } from 'react-router-dom';

interface IBreadcrumb {
  label: string;
  to: string;
}

interface BreadcrumbProps {
  items: IBreadcrumb[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) => (
          <li className="breadcrumb-item" key={index}>
            {index === items.length - 1 ? (
              item.label
            ) : (
              <Link className="text-dark" to={item.to}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
