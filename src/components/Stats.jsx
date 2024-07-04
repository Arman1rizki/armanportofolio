"use client";

import CountUp from "react-countup";

const no = [
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
          {no.map((item, index) => {
            return (
              <div key={index}>
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
