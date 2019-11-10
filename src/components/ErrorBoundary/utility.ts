export const errorToString = (
  error: string | Object | null | undefined
): string => {
  let result = 'Something went wrong';
  if (error instanceof Error) {
    result = error.message;
  }
  return result;
};
