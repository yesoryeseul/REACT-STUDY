import { useState } from "react";
import oneplan from "../../styles/one-plan.module.css";
import { HiOutlineTrash } from "react-icons/hi";
const OnePlan = ({ plan, onDeletePlan, onCheckPlan }) => {
  const { id, content, state } = plan;
  const [isCheck, setIsCheck] = useState(false);

  const onEditCheckPlan = () => {
    setIsCheck((prev) => !prev);
    onCheckPlan(id, state);
    // console.log(isCheck);
  };

  return (
    <>
      <li key={id} className={oneplan.onelist}>
        <div className={oneplan.left}>
          <input type="checkbox" checked={state} onChange={onEditCheckPlan} />
          <span className={state ? oneplan["line-through"] : ""}>
            {content}
          </span>
        </div>
        <HiOutlineTrash size={16} onClick={() => onDeletePlan(id)} />
      </li>
    </>
  );
};

export default OnePlan;
