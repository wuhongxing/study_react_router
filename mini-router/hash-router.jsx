/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import RouterContext from "./router-context"
import HistoryContext from "./history-context"

export default function HashRouter(props) {
  const [path, setPath] = useState(() => {
    const { hash } = window.location
    if (hash) return hash.slice(1)
    return "/#/"
  })

  useEffect(() => {
    window.addEventListener("hashchange", handlePopstate)
    return window.removeEventListener("hashchange", handlePopstate)
  }, [])

  const handlePopstate = function () {
    const { hash } = window.location
    setPath(hash.slice(1))
  }

  const push = function (path) {
    window.location.hash = path
  }

  const goBack = function () {
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
