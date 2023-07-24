const OneTodo = ({ todo }) => {
  const { title, content } = todo;
  return (
    <li style={{ listStyle: "none" }}>
      <strong>{title}</strong>
      <p>{content}</p>
    </li>
  );
};

export default OneTodo;
