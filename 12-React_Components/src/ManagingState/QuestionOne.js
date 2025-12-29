import { useState } from "react";
import Form from "./Form";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionFour from "./QuestionFour";
import QuestionFive from "./QuestionFive";
import "./styles.css";

export default function QuestionOne() {
  const [activeTab, setActiveTab] = useState(1);
  const [completion, setCompletion] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const handleQuestionComplete = (tab) => {
    setCompletion((prev) => ({ ...prev, [tab]: true }));
    setActiveTab(tab + 1); // Automatically switch to the next tab
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return <Form onSuccess={() => handleQuestionComplete(1)} />;
      case 2:
        return <QuestionTwo onSuccess={() => handleQuestionComplete(2)} />;
      case 3:
        return <QuestionThree onSuccess={() => handleQuestionComplete(3)} />;
      case 4:
        return <QuestionFour onSuccess={() => handleQuestionComplete(4)} />;
      case 5:
        return <QuestionFive />;
      default:
        return <Form onSuccess={() => handleQuestionComplete(1)} />;
    }
  };

  return (
    <div className="App">
      <div className="tabs">
        <button
          className={activeTab === 1 ? "active" : ""}
          onClick={() => setActiveTab(1)}
        >
          Question One
        </button>
        <button
          className={activeTab === 2 && completion[1] ? "active" : ""}
          onClick={() => completion[1] && setActiveTab(2)}
          disabled={!completion[1]}
        >
          Question Two
        </button>
        <button
          className={activeTab === 3 && completion[2] ? "active" : ""}
          onClick={() => completion[2] && setActiveTab(3)}
          disabled={!completion[2]}
        >
          Question Three
        </button>
        <button
          className={activeTab === 4 && completion[3] ? "active" : ""}
          onClick={() => completion[3] && setActiveTab(4)}
          disabled={!completion[3]}
        >
          Question Four
        </button>
        <button
          className={activeTab === 5 && completion[4] ? "active" : ""}
          onClick={() => completion[4] && setActiveTab(5)}
          disabled={!completion[4]}
        >
          Question Five
        </button>
      </div>

      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
}
