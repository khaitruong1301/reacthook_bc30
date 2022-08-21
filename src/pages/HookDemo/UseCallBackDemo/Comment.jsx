import React, { memo } from "react";

function Comment(props) {

  console.log("comment");
  return (
    <div className="mt-2">
      {props.renderLike()}

      <textarea className="form-control w-50"></textarea> <br />
      <button className="btn btn-success">Gửi</button>
    </div>
  );
}

export default memo(Comment);

// PureComponent