import { useState } from 'react';

// Interfaces
import MonthRange from '@/app/interface/MonthRange';

// Components
import DateSearchBar from '@/components/ui/DateSearchBar';
import Card from '@/components/ui/Card';

// Data
import AttendanceData from "@/data/attendanceDummy.json";

interface ListContainerProps {
  title: 'Daftar Presensi' | 'Daftar Laporan'
};

const ListContainer = (props: ListContainerProps):JSX.Element => {
  const { title } = props;

  // Data
  const [data, setData] = useState(AttendanceData);

  // Month range value
  const [monthRange, setMonthRange] = useState<MonthRange>({
    start: undefined,
    end: undefined,
  });

  const handleDateInputOnChange = (name: 'start' | 'end', value: Date | undefined) => {
    setMonthRange((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSearch = () => {
    // TODO: Implement search
    console.log(monthRange);
  }
  
  return (
    <div className="w-full max-w-[641px] flex justify-center bg-white rounded-t-[26px]">
      <div className='w-11/12 flex flex-col gap-6 pt-6'>
        <h1 className="text-black text-left text-2xl poppins-bold">{title}</h1>
        <DateSearchBar 
          monthRange={monthRange}
          onChange={handleDateInputOnChange}
          onSearch={handleSearch}
        />

        <div className='flex-1 mt-5 rounded-xl'>
          <div className='w-full h-fit gap-1'>
            {
              data.map((item, index) => (
                <Card 
                  key={index}
                  date={new Date(item.date)} 
                  startAttendanceId={item.startAttendanceId}
                  endAttendanceId={item.endAttendanceId} 
                />
              ))
            } 
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListContainer;