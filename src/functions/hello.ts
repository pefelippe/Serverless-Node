export const handle = async (e) => {
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: e.message,
    }),
  };
};
