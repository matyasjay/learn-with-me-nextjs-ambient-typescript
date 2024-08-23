type TMyComponentProps = {
  content: string;
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100%",
  border: "1px solid #333",
  padding: "1rem",
  fontSize: "1.5rem",
  fontFamily: "sans-serif",
};

const MyComponent = ({ content }: TMyComponentProps) => {
  return (
    <div style={containerStyle}>
      <h1>{content}</h1>
    </div>
  );
};

export default MyComponent;
