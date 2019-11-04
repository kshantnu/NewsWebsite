import React, { useState } from 'react';

const SelectCountry = (): JSX.Element => {
  return (
    <div className="news__country">
      <select className="news__selectcountry">
        <option value="World" selected>
          World
        </option>
        <option value="India">India</option>
        <option value="United States">United States</option>
        <option value="United Kingdom">United Kingdom</option>
      </select>
    </div>
  );
};

export default React.memo(SelectCountry);
