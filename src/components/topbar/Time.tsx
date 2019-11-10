import React from 'react';

const TodayDate = (): JSX.Element => {
  let date: Date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const todayDate = date.getDate();

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const event = new Date(Date.UTC(year, month, todayDate));
  const formattedDate = event.toLocaleDateString('en-US', options);

  return (
    <div className="time">
      <i className="fa fa-clock-o"></i>
      <span>&nbsp;&nbsp;&nbsp;{formattedDate}</span>
    </div>
  );
};

export default TodayDate;
