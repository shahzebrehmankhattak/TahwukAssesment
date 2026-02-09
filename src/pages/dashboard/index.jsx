import React from 'react'
import Timelinecard from './components/Timelinecard';
import StatsCards from './components/StatsCards';
import ProgressStatus from './components/ProgressStatus';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <Timelinecard/>
    {/* Stats Row */}
  <StatsCards/>

    {/* Progress Section */}
   <ProgressStatus/>
  </div>
  )
}

export default Dashboard