import React from 'react'
import { Outlet } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div>
            <aside>
                Sidebar
            </aside>

            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Sidebar