import constants from "../configuration/Constants.json";

export const GET = (url) => {
  return fetch(`${constants.REST_API_ADDRESS}${url}`);
};

export const POST = (url, requestBody) => {
  return fetch(`${constants.REST_API_ADDRESS}${url}`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify(requestBody),
  });
};
