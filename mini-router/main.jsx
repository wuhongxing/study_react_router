/* eslint-disable react-refresh/only-export-components */
import React, { useContext } from "react"
import ReactDOM from "react-dom/client"
import BrowserRouter from "./browser-router"
import Route from "./route"
import HistoryContext from "./history-context"

const A = () => {
  const { push } = useContext(HistoryContext)
  return <div onClick={() => push("/B")}>AAAAAAAAAAAAAAAA</div>
}
const B = () => {
  const { push } = useContext(HistoryContext)
  return <div onClick={() => push("/C")}>BBBBBBBBBBBBBBBB</div>
}
const C = () => <div>CCCCCCCCCCCCCCCC</div>

const Main = () => {
  return (
    <BrowserRouter>
      <Route path="/A" component={A} />
      <Route path="/B" component={B} />
      <Route path="/C" component={C} />
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
)
