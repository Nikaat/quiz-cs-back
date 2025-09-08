export const generateUid = (startKey?: string) => {
  const thisId = crypto.randomUUID()
  return startKey ? `_${startKey}-${thisId}` : thisId
};