import { useState } from "react";
import planner from "../styles/planner.module.css";
import OnePlan from "./one-plan";
import { BsFillMoonFill } from "react-icons/bs";

const Planner = () => {
  const [planList, setPlanList] = useState([
    {
      id: 1,
      content: "코코 산책",
      state: false,
    },
    {
      id: 2,
      content: "치즈케익 먹기",
      state: false,
    },
  ]);
  const [content, setContent] = useState("");

  // 플랜 추가
  const onAddPlan = (e) => {
    e.preventDefault();
    if (content === "") return;
    const newPlan = {
      id: Math.floor(Math.random() * 100000),
      content,
      state: false,
    };
    setPlanList([...planList, newPlan]);
  };

  // 플랜 삭제
  const onDeletePlan = (id) => {
    console.log("해당 플랜 삭제");
    const _planList = planList.filter((plan) => plan.id !== id);
    setPlanList(_planList);
  };

  // 플랜 완료
  const onCheckPlan = (id, state) => {
    const checkPlan = [...planList];
    const endPlan = checkPlan.find((plan) => plan.id === id);
    endPlan.state = !state;
    setPlanList(checkPlan);
  };

  const onAllPlan = () => {
    const allPlan = [...planList];
    setPlanList(allPlan);
  };

  const onActive = () => {
    console.log("!state 만 보여주기");
    const unCompletedPlan = [...planList];
    const unCompleted = unCompletedPlan.filter((plan) => !plan.state);
    setPlanList(unCompleted);
  };

  const onCompleted = () => {
    const completedPlan = [...planList];
    const completed = completedPlan.filter((plan) => plan.state);
    setPlanList(completed);
  };

  return (
    <div className={planner.wrapper}>
      <div className={planner.container}>
        <div className={planner.top}>
          <BsFillMoonFill style={{ cursor: "pointer" }} />
          <ul className={planner.filter}>
            <li onClick={onAllPlan}>All</li>
            <li onClick={onActive}>Active</li>
            <li onClick={onCompleted}>Completed</li>
          </ul>
        </div>
        {planList.map((plan) => (
          <OnePlan
            plan={plan}
            onDeletePlan={onDeletePlan}
            onCheckPlan={onCheckPlan}
          />
        ))}
        <form className={planner.form} onSubmit={onAddPlan}>
          <input value={content} onChange={(e) => setContent(e.target.value)} />
          <button>add</button>
        </form>
      </div>
    </div>
  );
};

export default Planner;
