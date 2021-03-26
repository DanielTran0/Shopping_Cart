const fetchStuff = async (urlRequest, setState, type) => {
  const key = '?apikey=lPsf7LyUUJYx';
  const fetchResponse = await fetch(`${urlRequest}${key}`);
  const jsonResponse = await fetchResponse.json();
  let alphabeticalData = jsonResponse.data;

  if (type === 'departments') {
    alphabeticalData = alphabeticalData.sort((a, b) => {
      return a.department_id > b.department_id ? 1 : -1;
    });
  } else if (type === 'items') {
    alphabeticalData = alphabeticalData.sort((a, b) => {
      return a.product_name > b.product_name ? 1 : -1;
    });
  }

  setState(alphabeticalData);
};

const displayItemRating = (rating) => {
  let stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) stars.push(<i key={i} className="fas fa-star"></i>);
    else stars.push(<i key={i} className="far fa-star"></i>);
  }

  return stars;
};

const convertToMoney = (value) => {
  return (value / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

const saveToLocalStorage = (cartItems) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export { fetchStuff, displayItemRating, convertToMoney, saveToLocalStorage };
