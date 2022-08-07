import React, { useEffect, useState } from "react";

import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

const Questions = ({ categoryData, setSelectedSuggestion }) => {
  return (
    <div>
      <h4>Ideas what to Ask (Select Any)</h4>
      {categoryData.suggestions &&
        categoryData.suggestions.map((question, i) => (
          <div
            key={i}
            className="question-to-select"
            onClick={(ques) => setSelectedSuggestion(ques.target.textContent)}
          >
            <QuestionAnswerIcon
              fontSize="small"
              sx={{ color: "orange", marginRight: "7px" }}
            />
            <p>{question}</p>
          </div>
        ))}
      <br />
      <p>
        Seeking accurate answers to difficult questions troubling your mind? Ask
        credible astrologers to know what future has in store for you.
      </p>
      <ul className="orange-box">
        <li>
          Personalized responses provided by our team of Vedic astrologers
          within 24 hours.
        </li>
        <li>
          Qualified and experienced astrologers will look into your birth chart
          and provide the right guidance
        </li>
        <li>
          You can seek answers to any part of your life and for most pressing
          issues.{" "}
        </li>
        <li>
          Our team of Vedic astrologers will not just provide answers but also
          suggest a remedial solution.
        </li>
      </ul>
    </div>
  );
};

export default Questions;
