const checkCredentials = (user, password) => {
  if (user === USERNAME && password === PASSWORD) {
    console.log("OMG Working");
    localStorage.setItem("correctUser", "true");
    correctLoginInfo();
  }
};

const correctLoginInfo = () => {
  window.location.href = "index.html";
  return;
};
