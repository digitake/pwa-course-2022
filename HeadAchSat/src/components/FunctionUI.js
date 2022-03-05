import { useState } from "react";
import '../css/FunctionUI.css';

export function Inputbox (props) {
  const [value, setValue] = useState(props.value||"");

  return (
    <div className="functionUI">
      
      <div className="Space"></div>
      <div className="GreenBox">รูป</div>
      <div className="Space"></div>
      <div className="GreenBox">เสียง</div>
      <div className="Space"></div>
      <div className="GreenBox">สติ๊กเกอร์</div>

      <div className="Space"></div>
      <div className="GreenBox">GIF</div>
      <div className="Space"></div>
      <div className="GreenBox">GPS</div>
      <div className="Space"></div>
      <div className="GreenBox">ข้อความลับ</div>
    </div>
  )
}
