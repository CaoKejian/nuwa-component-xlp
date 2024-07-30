import { getData } from "./getData"
import { setData } from "./setData"

type MethodMap = {
  [key: string]: Function
}

const mountMehtods = (methods: MethodMap) => {
  Object.keys(methods).forEach(key => {
    (window as any)[key] = methods[key]
  })
}

export const initMethods = () => {
  mountMehtods({
    $setData: setData,
    $getData: getData,
  })
}
