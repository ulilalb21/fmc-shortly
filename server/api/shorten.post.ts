export default defineEventHandler(async (event) => {
  type Result = {
    result_url: string;
  };

  const { url } = await readBody(event);

  return await $fetch<Result>("https://cleanuri.com/api/v1/shorten", {
    method: "POST",
    body: {
      url: encodeURI(url),
    },
  });
});
