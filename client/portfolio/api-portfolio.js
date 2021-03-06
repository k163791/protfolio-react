const create = async (user) => {
  try {
    let response = await fetch("/api/portfolio/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const list = async (signal) => {
  try {
    let response = await fetch("/api/portfolio/", {
      method: "GET",
      signal: signal,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const read = async (params, credentials, signal) => {
  try {
    let response = await fetch("/api/portfolio/" + params.portfolioId, {
      method: "GET",
      signal: signal,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const update = async (params, portfolioData) => {
  try {
    let response = await fetch("/api/portfolio/" + params.portfolioId, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(portfolioData),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const updateProjects = async (params, projectsData) => {
  try {
    let response = await fetch(
      "/api/portfolio/project/add/" + params.portfolioId,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectsData),
      }
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { create, list, read, update, updateProjects };
