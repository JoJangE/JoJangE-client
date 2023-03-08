export default function deepcopy<T>(element: T): T {
  return JSON.parse(JSON.stringify(element));
}
