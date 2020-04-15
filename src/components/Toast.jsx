import React from "react";

function Toast({ title, body }) {
  return (
    <div
      className="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      style={{
        position: "fixed",
        top: "0",
        marginTop: "10px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
      data-delay="3000"
    >
      <div className="toast-header">
        <strong className="mr-auto">{title}</strong>
        <button
          type="button"
          className="ml-2 mb-1 close"
          data-dismiss="toast"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="toast-body">{body}</div>
    </div>
  );
}

export default Toast;
