function Footer({ completedTodos, remainingTodos }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        fontSize: "1.5em",
        fontWeight: "bold",
        textAlign: "center",
        width: "100%",
        backgroundColor: "#f7ca18",
        padding: "10px",
      }}
    >
      <span>
        Task Completed : {completedTodos} || Remaining Task: {remainingTodos}
      </span>
    </div>
  );
}

export default Footer;
