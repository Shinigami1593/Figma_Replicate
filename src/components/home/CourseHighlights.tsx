"use client";

import Image from "next/image";
import { useState } from "react";

interface CourseCard {
  label: string;
  count: string;
  description: string;
  collapsedDescriptionLines: [string, string];
}

const courseCards: CourseCard[] = [
  {
    label: "All Courses",
    count: "23",
    description: "courses you're powering through right now.",
    collapsedDescriptionLines: ["courses you're powering", "through right now."],
  },
  {
    label: "Upcoming Courses",
    count: "05",
    description: "exciting new courses waiting to boost your skills.",
    collapsedDescriptionLines: ["exciting new courses", "waiting to boost your skills."],
  },
  {
    label: "Ongoing Courses",
    count: "10",
    description: "currently happening—don't miss out on the action!",
    collapsedDescriptionLines: ["currently happening—", "don't miss out on the action!"],
  },
];

export default function CourseHighlights() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="course-highlights">
      <div className="course-highlights__inner">
        <p className="course-highlights__eyebrow">
          Explore our classes and master trending skills!
        </p>
        <h2 className="course-highlights__title">
          Dive Into <span>What&apos;s Hot Right Now!</span> 🔥
        </h2>

        <div className="course-cards" aria-label="Course categories">
        {courseCards.map((card, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={card.label}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={isActive}
              className={`course-card${isActive ? " course-card--active" : ""}`}
            >
              {isActive && (
                <span className="course-card__view-all">
                  View all Courses <span aria-hidden="true">→</span>
                </span>
              )}
              {isActive ? (
                <>
                  <span className="course-card__art" aria-hidden="true">
                    <Image src="/images/course-react.svg" alt="" width={120} height={120} />
                    <Image src="/images/course-community.svg" alt="" width={120} height={120} />
                    <Image src="/images/course-vue.svg" alt="" width={120} height={120} />
                    <Image src="/images/course-design.svg" alt="" width={120} height={120} />
                  </span>
                  <span className="course-card__details">
                    <span className="course-card__count">
                      {card.count}<sup>+</sup>
                    </span>
                    <span className="course-card__copy">
                      <span className="course-card__label">{card.label}</span>
                      <span className="course-card__description">{card.description}</span>
                    </span>
                  </span>
                </>
              ) : (
                <>
                  <span className="course-card__collapsed-copy">
                    <span className="course-card__collapsed-label">
                      {card.label.split(" ").map((word) => (
                        <span key={word}>{word}</span>
                      ))}
                    </span>
                    <span className="course-card__collapsed-description">
                      {card.collapsedDescriptionLines.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </span>
                  </span>
                  <span className="course-card__collapsed-count">
                    {card.count}<sup>+</sup>
                  </span>
                </>
              )}
            </button>
          );
        })}
        </div>
      </div>
    </section>
  );
}