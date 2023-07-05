import { useEffect, useState } from "react";
import planner from "../styles/planner.module.css";
import OnePlan from "./one-plan";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import { useDarkMode } from "context/DarkModeContext";

const Planner = () => {
  // const [planList, setPlanList] = useState([
  //   {
  //     id: 1,
  //     content: "코코 산책",
  //     state: false,
  //   },
  //   {
  //     id: 2,
  //     content: "치즈케익 먹기",
  //     state: false,
  //   },
  // ]);

  const [planList, setPlanList] = useState(readPlansFromLocalStorage);
  // 콜백함수 자체를 넣어줌 -> 초기값이 필요하지 않으면 반환하지 않음(불필요한 렌더링 방지)
  const [content, setContent] = useState("");
  const [filtered, setFiltered] = useState(planList);
  const [active, setActive] = useState("all");
  const { isDark, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    setFiltered(planList);
  }, [planList]);

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
    setContent("");
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
    setFiltered([...planList]);
  };

  const onActive = () => {
    console.log("!state 만 보여주기");
    const unCompleted = planList.filter((plan) => !plan.state);
    setFiltered(unCompleted);
  };

  const onCompleted = () => {
    const completed = planList.filter((plan) => plan.state);
    setFiltered(completed);
  };

  // 로컬 스토리지에 값 저장
  useEffect(() => {
    localStorage.setItem("planList", JSON.stringify(planList));
  }, [planList]);

  return (
    <div className={planner.wrapper}>
      <div className={planner.container}>
        <div className={planner.top}>
          <button className={planner.mode} onClick={toggleDarkMode}>
            {isDark && <BsSun />}
            {!isDark && <BsFillMoonFill size={14} />}
          </button>

          <ul className={planner.filter}>
            <li
              className={active === "all" ? planner["bb"] : ""}
              onClick={() => {
                onAllPlan();
                setActive("all");
              }}
            >
              All
            </li>
            <li
              className={active === "Active" ? planner.bb : ""}
              onClick={() => {
                onActive();
                setActive("Active");
              }}
            >
              Active
            </li>
            <li
              className={active === "Completed" ? planner.bb : ""}
              onClick={() => {
                onCompleted();
                setActive("Completed");
              }}
            >
              Completed
            </li>
          </ul>
        </div>
        {filtered.map((plan) => (
          <OnePlan
            plan={plan}
            onDeletePlan={onDeletePlan}
            onCheckPlan={onCheckPlan}
          />
        ))}
        <form className={planner.form} onSubmit={onAddPlan}>
          <input
            placeholder="Add Plan"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button>add</button>
        </form>
      </div>
    </div>
  );
};

export default Planner;

const readPlansFromLocalStorage = () => {
  console.log("readPlansFromLocalStorage");
  const planList = localStorage.getItem("planList");
  return planList ? JSON.parse(planList) : [];
};
