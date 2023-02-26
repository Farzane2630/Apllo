import './CustomTooltip.css' 

const CustomTooltip = ({ lineTitle, btnColor, targetValue }) => {

    return (
      <div className="custom-tooltip">
        <p className="label" style={{fontFamily: 'Montserrat', fontWeight: 700}}>{` ${targetValue}`}</p>
        <button className={`${btnColor}`}> {`${lineTitle}`} </button>
        <p className="desc" style={{fontFamily: 'Ubuntu', fontWeight: 500, color: '#3C3C4399'}}>September 2022</p>
      </div>
    );
};

export default CustomTooltip;
