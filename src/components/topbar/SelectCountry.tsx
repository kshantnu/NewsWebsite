import React, { useState } from 'react';

interface IProps {
  onCountryChangeHandler: (value: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

const SelectCountry = (props: IProps): JSX.Element => {
  return (
    <div className="news__country">
      <select
        className="news__selectcountry"
        value={props.value}
        onChange={e => props.onCountryChangeHandler(e)}
      >
        <option value="in" selected>
          India
        </option>
        <option value="us">United States</option>
        <option value="gb">United Kingdom</option>
      </select>
    </div>
  );
};

export default React.memo(SelectCountry);
