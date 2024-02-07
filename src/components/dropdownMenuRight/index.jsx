import React from "react";

const DropdownMenuRight = props => (
  <div className="dropdown">
    <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown"
      aria-expanded="false">...</a>

    <div className="dropdown-menu dropdown-menu-right">
      <a className="dropdown-item" href="#"><i
          className="fas fa-times text-orange-red"></i>Close</a>
      <a className="dropdown-item" href="#"><i
          className="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
      <a className="dropdown-item" href="#"><i
          className="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
    </div>
  </div>
)

export default React.memo(DropdownMenuRight);
