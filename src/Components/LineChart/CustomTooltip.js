import './CustomTooltip.css' 

const getIntroOfPage = (label) => {
  if (label === "Done") {
    return label;
  }
  if (label === "Rejected") {
    return label;
  }
  if (label === "inProgress") {
    return label;
  }
  return "";
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label" style={{fontFamily: 'Montserrat', fontWeight: 700}}>{` ${payload[0].value}`}</p>
        <button className={getIntroOfPage(label)}> {label} </button>
        <p className="desc" style={{fontFamily: 'Ubuntu', fontWeight: 500, color: '#3C3C4399'}}>September 2022</p>
      </div>
    );
  }
};

export default CustomTooltip;
