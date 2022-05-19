import "antd/dist/antd.css";
import { Button, DatePicker, version } from "antd";
function App() {
  return (
    <div className="App">
        <DatePicker />
        <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button>
    </div>
  );
}

export default App;
