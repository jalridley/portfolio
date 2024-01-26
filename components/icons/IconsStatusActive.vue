<template>
  <svg
    aria-hidden="true"
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#10B981"
      d="M6 9h2v2H6zM3 9h2v2H3zM6 0h2v2H6zM3 0h2v2H3zM0 3h2v2H0z"
    />
    <path fill="#34D399" d="M3 3h2v2H3zM6 3h2v2H6z">
      <animate
        attributeType="CSS"
        attributeName="opacity"
        from="1"
        to="1"
        values="1; 0.25; 1;"
        keyTimes="0; 0.5; 1"
        dur="2000ms"
        repeatCount="indefinite"
        begin="0ms"
      />
    </path>
    <path fill="#10B981" d="M0 6h2v2H0z" />
    <path fill="#34D399" d="M3 6h2v2H3zM6 6h2v2H6z">
      <animate
        attributeType="CSS"
        attributeName="opacity"
        from="1"
        to="1"
        values="1; 0.25; 1;"
        keyTimes="0; 0.5; 1"
        dur="2000ms"
        repeatCount="indefinite"
        begin="1000ms"
      />
    </path>
    <path fill="#10B981" d="M9 6h2v2H9zM9 3h2v2H9z" />
  </svg>
</template>
