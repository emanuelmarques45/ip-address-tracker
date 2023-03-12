import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;

  .pl {
    display: block;
    width: 10rem;
    height: 10rem;
  }

  .pl__arrows,
  .pl__ring-rotate,
  .pl__ring-stroke,
  .pl__tick {
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .pl__arrows {
    animation-name: arrows42;
    transform: rotate(45deg);
    transform-origin: 16px 52px;
  }

  .pl__ring-rotate,
  .pl__ring-stroke {
    transform-origin: 80px 80px;
  }

  .pl__ring-rotate {
    animation-name: ringRotate42;
  }

  .pl__ring-stroke {
    animation-name: ringStroke42;
    transform: rotate(-45deg);
  }

  .pl__tick {
    animation-name: tick42;
  }

  .pl__tick:nth-child(2) {
    animation-delay: -1.75s;
  }

  .pl__tick:nth-child(3) {
    animation-delay: -1.5s;
  }

  .pl__tick:nth-child(4) {
    animation-delay: -1.25s;
  }

  .pl__tick:nth-child(5) {
    animation-delay: -1s;
  }

  .pl__tick:nth-child(6) {
    animation-delay: -0.75s;
  }

  .pl__tick:nth-child(7) {
    animation-delay: -0.5s;
  }

  .pl__tick:nth-child(8) {
    animation-delay: -0.25s;
  }

  /* Animations */
  @keyframes arrows42 {
    from {
      transform: rotate(45deg);
    }

    to {
      transform: rotate(405deg);
    }
  }

  @keyframes ringRotate42 {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(720deg);
    }
  }

  @keyframes ringStroke42 {
    from,
    to {
      stroke-dashoffset: 452;
      transform: rotate(-45deg);
    }

    50% {
      stroke-dashoffset: 169.5;
      transform: rotate(-180deg);
    }
  }

  @keyframes tick42 {
    from,
    3%,
    47%,
    to {
      stroke-dashoffset: -12;
    }

    14%,
    36% {
      stroke-dashoffset: 0;
    }
  }
`

export default { Container }
