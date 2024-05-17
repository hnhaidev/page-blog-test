import React from 'react';

interface IItem {
  label: string;
  value: string;
  disabled?: boolean;
}

interface DropdownItemProps {
  items: IItem[];
  valueActive?: string;
  onChange?: (value: string) => void;
  txtAction: React.ReactNode;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  items,
  valueActive,
  onChange,
  txtAction,
}) => {
  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {txtAction}
      </button>
      <div className="dropdown-menu dropdown-menu-right">
        {items.map((item) => (
          <button
            className={`dropdown-item ${valueActive === item.value && 'active'} `}
            key={item.value}
            disabled={item.disabled}
            onClick={() => onChange?.(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};
