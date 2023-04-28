/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import RouterContext from "./router-context"
import HistoryContext from "./history-context"

export default function BrowserRouter(props) {
  const [path, setPath] = useState(() => {
    const { pathname } = window.location
    return pathname || "/"
  })

  useEffect(() => {
    window.addEventListener("popstate", handlePopstate)
    return () => window.removeEventListener("popstate", handlePopstate)
  }, [])

  const handlePopstate = function () {
    const { pathname } = window.location
    console.log(pathname, "handlePopstate")
    setPath(pathname)
  }

  const push = function (path) {
    setPath(path)
    console.log(path, "push")
    window.history.pushState({ path }, null, path)
  }

  const goBack = function () {
    console.log(path, "goBack")
    window.history.go(-1)
  }

  return (
    <RouterContext.Provider value={path}>
      <HistoryContext.Provider value={{ push, goBack }}>
        {props.children}
      </HistoryContext.Provider>
    </RouterContext.Provider>
  )
}
