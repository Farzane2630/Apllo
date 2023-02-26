import './CustomTooltip.css' 

const EnCustomTooltip = ({ active, payload, lineTitle, targetValue }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label" style={{fontFamily: 'Montserrat', fontWeight: 700}}>{` ${targetValue}`}</p>
        <button className={`${lineTitle}`}> {`${lineTitle}`} </button>
        <p className="desc" style={{fontFamily: 'Ubuntu', fontWeight: 500, color: '#3C3C4399', paddingBottom: 16}}>September 2022</p>
      </div>
    );
  }
};

export default EnCustomTooltip;
