import { useEffect, useState } from "react";

import { DateContainer } from "./date-time.styles";

const DateTime = () => {
  const [date, setDate] = useState([]);
  const [time, setTime] = useState([]);

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const min = date.getMinutes();
      const sec = date.getSeconds();
      const fullTime = `${hours.toString().padStart(2, "0")}:${min
        .toString()
        .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;

      const dayNum = date.getDate().toString().padStart(2, "0");
      const month = date.toString().slice(4, 7);
      const weekDay = date.toString().slice(0, 4);
      const fullDate = `${weekDay}, ${dayNum} ${month}`;

      setDate(fullDate);
      setTime(fullTime);
    }, 1000);
  }, []);

  return (
    <DateContainer>
      <div>{time}</div>
      <div>{date}</div>
    </DateContainer>
  );
};

export default DateTime;
