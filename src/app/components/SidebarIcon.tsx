import React from 'react'

interface SideBarIconProps {
  icon: JSX.Element
  tooltip: string
}

const SidebarIcon: React.FC<SideBarIconProps> = ({ icon, tooltip }) => {
  return (
    <div className='sidebar-icon group flex'>
      {icon} <span className='sidebar-tooltip group-hover:scale-100'>{tooltip}</span>
    </div>
  )
}

export default SidebarIcon
