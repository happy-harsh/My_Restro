import React from "react";

const Navbar = ({ filterMenu, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((e) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterMenu(e)}
              >
              {e}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
