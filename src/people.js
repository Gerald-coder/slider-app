import React, { useState, useEffect } from "react";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import data from "./data";

function People() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  const handleSetIndex = (currentIndex) => {
    const lastIndex = people.length - 1;
    if (currentIndex < 0) {
      setIndex(0);
    }
    if (currentIndex > lastIndex) {
      setIndex(lastIndex);
    }
  };
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, []);
  // console.log(people);
  return (
    <>
      {people.map((person, personIndex) => {
        const { id, name, title, image, quote } = person;
        //more code coming in here
        console.log(name, title);
        const currentPosition = personIndex === index ? "active" : "inactive";
        const lastPosition =
          personIndex === people.length - 1 ? "lastIndex" : "firstIndex";
        let position = "nextSlide";
        if (personIndex === index) {
          position = "activeSlide";
        }
        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
        ) {
          position = "lastSlide";
        }

        return (
          <div className={currentPosition}>
            <article className={lastPosition} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          </div>
        );
      })}
      <button className="prev" onClick={() => handleSetIndex(index - 1)}>
        <FaChevronLeft />
      </button>
      <button className="next" onClick={() => handleSetIndex(index + 1)}>
        <FaChevronRight />
      </button>
    </>
  );
}

export default People;
