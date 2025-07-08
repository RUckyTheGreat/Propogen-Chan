import { Outlet } from 'react-router-dom'
import ProgressFooter from './ProgressFooter'

function StepFormLayout() {
  return (
    <>
      <Outlet />
      <ProgressFooter /> {/* ✅ hanya tampil di form pages */}
    </>
  )
}

export default StepFormLayout
