/* eslint-disable react/prop-types */
import { useContext } from "react"
import RouterContext from "./router-context"

export default function Route(props) {
  const { component: Component, path: componentPath } = props
  const path = useContext(RouterContext)

  return path === componentPath ? <Component /> : null
}
