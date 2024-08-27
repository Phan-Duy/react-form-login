import ReactDOM from "react-dom";

const idPortal = "portal-root";

function getContainer() {
  let rootPortal = document.getElementById(idPortal);

  if (rootPortal) {
    return rootPortal;
  }

  rootPortal = document.createElement("div");
  rootPortal.id = idPortal;

  return document.body.appendChild(rootPortal);
}

function Portal({ children }: { children: React.ReactNode }) {
  return ReactDOM.createPortal(<div>{children}</div>, getContainer());
}

export default Portal;