import React from "react";

export default function Filter() {
  return (
    <div>
      <span class="button--bubble__container">
        <a href="#campaign" class="button button--bubble">
          Hover me
        </a>
        <span class="button--bubble__effect-container">
          <span class="circle top-left"></span>
          <span class="circle top-left"></span>
          <span class="circle top-left"></span>

          <span class="button effect-button"></span>

          <span class="circle bottom-right"></span>
          <span class="circle bottom-right"></span>
          <span class="circle bottom-right"></span>
        </span>
      </span>
    </div>
  );
}
