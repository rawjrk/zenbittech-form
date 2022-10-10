const API_URI = "http://localhost:3000";

const createRequest = async (data, resolve, reject) => {
  try {
    const response = await fetch(`${API_URI}/request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.status === 201) resolve();
    else reject(`Invalid code ${response.status}`);
  } catch (e) {
    reject(e);
  }
};

export default createRequest;
