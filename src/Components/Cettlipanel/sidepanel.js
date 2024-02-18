const SidePanel = (props) => {
  return (
    <div className="sidePanel">
      <h1>{props.name}</h1>
      <p>{props.leiras}</p>
    </div>
  );
};

export default SidePanel;
