export default function ConvertToJSON<T>(value: unknown): T {
  const result: T = JSON.parse(JSON.stringify(value));
  return result;
}