import { useButtonStore } from "../store";

export const getData = (componentId: number, name: string): String => {
  const { getLabel } = useButtonStore()
  return getLabel(componentId, name)
}