"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 12,
    text: "years of experience",
  },
  {
    num: 26,
    text: "Projects Completed",
  },
  {
    num: 8,
    text: "technologies mastered",
  },
  {
    num: 500,
    text: "code commits",
  },
];
const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div>
          {stats.map((stat, index) => {
            return
            <div key></div>
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
