import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import SelectMenu from "../../components/SelectMenu";
import Questions from "../../components/Questions";

export const getStaticProps = async () => {
  let Apilink = "https://staging-api.astrotak.com/api/question/category/all";
  let response = await axios.get(Apilink);
  return {
    props: { apiData: response.data },
  };
};

const AskQuestion = ({ apiData }) => {
  const [questionApiData, setQuestionApiData] = useState();
  const [categoryData, setCategoryData] = useState();
  const [selectedSuggestion, setSelectedSuggestion] = useState();
  const [totalCharacter, setTotalCharacter] = useState(0);

  useEffect(() => {
    sessionStorage.setItem("questionApiResponse", JSON.stringify(apiData.data));
    setQuestionApiData(
      JSON.parse(sessionStorage.getItem("questionApiResponse"))
    );
  }, []);

  //   const totalChars = (e) => {
  //     setTimeout(() => {
  //       setTotalCharacter(e.target.value.length);
  //     }, 500);
  //     console.log(
  //       "sessionStorage: ",
  //       JSON.parse(sessionStorage.getItem("selectedCategoryData"))
  //     );
  //   };

  if (questionApiData) {
    return (
      <div>
        <Head>
          <title>AskQuestion</title>
          <meta name="description" content="Ask us any question" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="wallet">
          <span>Wallet Balance: ₹0 </span>
          <button>Add money</button>
        </div>
        <Container className="askContainer">
          <h4>Ask a Question</h4>
          <p>
            Seek accurate answers to your life problems and get guidance towards
            the right path. Whether the problem is related to love, self, life,
            business, money, education or work, our astrologers will do an in
            depth study of your birth chart to provide personalized responses
            along with remedies.
          </p>
          <h4>Choose Category</h4>
          <SelectMenu
            questionApiData={questionApiData}
            categoryData={categoryData}
            setCategoryData={setCategoryData}
          />
          <br />
          <div>
            <textarea
              id="typeQuestion  "
              name="question"
              rows="3"
              className="textarea"
              placeholder="Type a question here"
              value={selectedSuggestion}
              //onKeyDown={(e) => totalChars(e)}
            ></textarea>
          </div>
          <br />
          <Questions
            categoryData={categoryData ? categoryData : questionApiData[0]}
            setSelectedSuggestion={setSelectedSuggestion}
          />
        </Container>
      </div>
    );
  } else {
    return <>Loading....</>;
  }
};

export default AskQuestion;
