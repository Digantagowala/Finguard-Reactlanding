
import React from 'react';

function NavItem({ text }) {
  return (
    <li className="mx-4 text-md font-medium text-gray-900 list-none">
      {text}
    </li>
  );
}

export default NavItem;
