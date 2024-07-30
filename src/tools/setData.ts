import { useEffect } from "react";
import { useButtonStore } from "../store";

export const setData = <T>(componentId: number, data: T): void => {
  const { setLabel } = useButtonStore()
  useEffect(() => {
    setLabel(componentId ,data as string)
  }, [])
}