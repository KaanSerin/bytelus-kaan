import { min } from 'moment';
import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import Card from './Card/Card';

const InteractiveCard = ({ card }) => {
  const [height, setHeight] = useState('64px');
  const [day, setDay] = useState('Monday');
  const [startTime, setStartTime] = useState('06:00');
  const [endTime, setEndTime] = useState('08:00');

  const calculateStartTime = (minutePassed) => {
    const startHour = 6 + Math.floor(minutePassed / 60);
    const startMinute = minutePassed % 60;

    const formattedStartTime = `${(startHour + '').padStart(2, '0')}:${(
      startMinute + ''
    ).padEnd(2, '0')}`;

    setStartTime(formattedStartTime);
  };

  const calculateEndTime = (minutePassed) => {
    const endHour =
      6 +
      Math.floor(
        Math.floor(minutePassed / 60) +
          ((parseInt(height.replace('px', '')) / 8) * 15) / 60
      );

    const endMinute =
      (minutePassed + (parseInt(height.replace('px', '')) / 8) * 15) % 60;

    const formattedEndTime = `${(endHour + '').padStart(2, '0')}:${(
      endMinute + ''
    ).padEnd(2, '0')}`;

    setEndTime(formattedEndTime);
    console.log(formattedEndTime);
  };

  const onCardDragStop = (e, d) => {
    const offsetY = Math.abs(Math.round(d.y / 8));
    const minutePassed = offsetY * 15;

    calculateStartTime(minutePassed);
    calculateEndTime(minutePassed);

    if (d.x > 800) setDay('Sunday');
    else if (d.x > 660) setDay('Saturday');
    else if (d.x > 510) setDay('Friday');
    else if (d.x > 370) setDay('Thursday');
    else if (d.x > 210) setDay('Wednesday');
    else if (d.x > 70) setDay('Tuesday');
    else setDay('Monday');
  };

  const onResizeStop = (e, direction, ref, delta, position) => {
    const heightDiff = delta.height;

    const oldTime = +endTime.split(':')[0] * 60 + +endTime.split(':')[1];
    const timeDiff = (heightDiff / 8) * 15;
    const newTime = oldTime + timeDiff;

    const newEndHour = Math.floor(newTime / 60);
    const newEndMinute = newTime % 60;

    const formattedEndTime = `${(newEndHour + '').padStart(2, '0')}:${(
      newEndMinute + ''
    ).padEnd(2, '0')}`;

    setEndTime(formattedEndTime);
    setHeight(ref.style.height);
  };

  return (
    <Rnd
      key={card.id}
      default={{
        x: 0,
        y: 0,
        width: 150,
        height: 64,
      }}
      resizeGrid={[1, 8]}
      dragGrid={[150, 8]}
      minWidth={150}
      maxWidth={150}
      minHeight={8}
      onResizeStop={onResizeStop}
      onDragStop={onCardDragStop}
      dragHandleClassName='handle'
      enableResizing={{
        top: false,
        left: false,
        right: false,
        topRight: false,
        topLeft: false,
        bottom: true,
        bottomLeft: true,
        bottomRight: true,
      }}
      bounds='parent'
    >
      <Card
        startTime={startTime}
        day={day}
        endTime={endTime}
        text={card.text}
      />
    </Rnd>
  );
};

export default InteractiveCard;
