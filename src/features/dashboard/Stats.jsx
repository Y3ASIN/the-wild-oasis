import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";

function Stats({ bookings, confirmedStays, numDays, cabinCounts }) {
  // 1.
  const numBookings = bookings.length;

  // 2.total sales
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3. Total check-ins
  const checkins = confirmedStays.length;

  // 4. Occupancy rate
  // occupancy rate =  num checked in nights / all available nights (numDays * cabinCounts)
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCounts);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />

      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />

      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />

      <Stat
        title="Occupancy Rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}
export default Stats;
