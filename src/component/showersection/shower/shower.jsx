import Showercard from "../showercard/showercard"
import './shower.css'
const Shower = () => {
  return (
    <div className="shower-main-container">
      <div>
        <Showercard/>
        <Showercard/>
      </div>
      <div>
        <Showercard/>
        <Showercard/>
      </div>
      <div>
        <Showercard/>
        <Showercard/>
      </div>
    </div>
  )
}

export default Shower
