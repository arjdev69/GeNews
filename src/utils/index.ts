export const removePost = async (number: any) => {
  try {
    const posts = await localStorage.getItem("list");
    let postsFav = JSON.parse(posts);
    const postsItems = postsFav.filter(function (e: { number: any }) {
      return e.number !== number;
    });

    // updating 'posts' with the updated 'postsItems'
    await localStorage.setItem("list", JSON.stringify(postsItems));
  } catch (error) {
    console.log("error: ", error);
  }
};

export const asyncFetch = async (_url: RequestInfo) => {
  fetch(_url)
    .then((response) => response.json())
    .then((jsonData) => {
      return jsonData;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const convertMoney = (money: number) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
  return formatter.format(money);
};

export const calculateTaxs = (
  _value: number,
  _tax: number,
  isTransfer = false
) => {
  let taxPercent = (_tax / 100) * _value;
  if (isTransfer) {
    let value = (100 * _value) / (100 - _tax);
    return convertMoney(value);
  }
  return convertMoney(_value - taxPercent);
};
