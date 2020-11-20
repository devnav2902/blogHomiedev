import React from 'react'
// const {loading} = React.useContext(PostContext);
export default function DateWrapper(props) {
    const {date,styles,dash} = props;
    // console.log(props);
    const regex_day_and_month = /([smtwf][uoehra][neduit])\s([jfmasond][aepuco][nbrylgptvc][eyt]*)\s(0[1-9]|[12][0-9]|3[01])\s(\d{4})/i;

    const getDate = new Date(date);

    const resultFromDateFormat = getDate.toDateString().match(regex_day_and_month);
    const dayFormat = resultFromDateFormat[3];
    const monthFormat = resultFromDateFormat[2];
    const yearFormat = resultFromDateFormat[4];
        
    return (
        <div className={styles ? `date ${styles}` : `date`}>
            <div className="month">{monthFormat}</div>{dash ? '-':null}
            <div className="day">{dayFormat}</div>{dash ? '-':null}
            <div className="year">{yearFormat}</div> 
        </div>
    )
}
