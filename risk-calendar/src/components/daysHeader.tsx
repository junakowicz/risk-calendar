import React from "react";
import dateFns from "date-fns";

interface StateProps {
}

interface DispatchProps {
}
interface OwnProps {
    currentMonth: Date
}

type Props = StateProps & DispatchProps & OwnProps

class DaysHeader extends React.Component<Props> {

    render() {
        const dateFormat = "dddd";
        const days = [];

        let startDate = dateFns.startOfWeek(this.props.currentMonth);

        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </div>
            );
        }
        return (
            <div className="days row">{days}</div>
        )
    }
}

export default DaysHeader

