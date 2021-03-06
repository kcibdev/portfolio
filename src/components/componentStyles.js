import styled from "styled-components";

export const NavbarContainer = styled.header`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--body-color);

  &.scroll-header {
    box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.15);
  }

  .nav {
    max-width: 968px;
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav__logo,
    .nav__toggle {
      color: var(--title-color);
      font-weight: var(--font-medium);
    }

    .nav__logo {
      font-family: "Nunito", sans-serif;
      position: relative;

      &:after {
        content: "";
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 50%;
        height: 2px;
        background-color: var(--first-color);
        border-radius: 0.5rem;
      }

      span {
        color: var(--first-color);
      }
    }
    .nav__btns {
      display: flex;
      align-items: center;

      .change-theme {
        font-size: 1.1rem;
        color: var(--title-color);
        cursor: pointer;
        margin-right: var(--mb-1);

        &:hover {
          color: var(--first-color);
        }
      }

      .nav__toggle {
        font-size: 1.1rem;
        cursor: pointer;

        &:hover {
          color: var(--first-color);
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .nav__menu {
      position: fixed;
      bottom: -100%;
      left: 0;
      width: 100%;
      background-color: var(--body-color);
      padding: 2rem 1.5rem 4rem;
      box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.15);
      border-radius: 1.5rem 1.5rem 0 0;
      transition: all 0.3s ease-in-out;
    }
  }

  .nav__list {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    .nav__link {
      color: var(--title-color);
      display: flex;
      align-items: center;
      flex-direction: column;
      font-size: var(--small-font-size);

      &:hover {
        color: var(--first-color);
      }

      &.active-link {
        color: var(--first-color);
        font-weight: var(--font-medium);
      }

      .nav__icon {
        font-size: 1.2rem;
      }
    }
  }

  .nav__close {
    position: absolute;
    right: 1.5rem;
    bottom: 0.8rem;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--first-color);

    &:hover {
      color: var(--first-color-alt);
    }
  }

  .show-menu {
    bottom: 0;
  }

  @media screen and (max-width: 350px) {
    .nav__menu {
      padding: 2rem 0.25rem 4rem;
    }

    .nav__list {
      column-gap: 0;
    }
  }

  @media screen and (min-width: 768px) {
    top: 0;
    bottom: initial;
    padding: 0 1rem;

    .nav {
      height: calc(var(--header-height) + 1.5rem);
      column-gap: 1rem;

      .nav__icon,
      .nav__close,
      .nav__toggle {
        display: none;
      }

      .nav__menu {
        margin-left: auto;

        .nav__list {
          display: flex;
          column-gap: 2rem;
        }
      }
    }

    .change-theme {
      margin: 0;
    }
  }
  @media screen and (min-width: 1024px) {
    padding: 0;
  }
`;

export const FooterContainer = styled.footer`
  padding-top: 2rem;

  .footer__bg {
    background-color: var(--first-color-second);
    padding: 2rem 0 3rem;

    .footer__container {
      row-gap: 3.5rem;

      .footer__title {
        font-size: var(--h1-font-size);
        margin-bottom: var(--mb-0-25);
        font-family: "Nunito", sans-serif;
        position: relative;

        &:after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 25%;
          height: 2px;
          background-color: #fff;
          border-radius: 0.5rem;
        }

        span {
          color: var(--first-color-lighter);
        }
      }
      .footer__subtitle {
        font-size: var(--small-font-size);
      }

      .footer__links {
        display: flex;
        flex-direction: column;
        row-gap: 1.5rem;

        .footer__link:hover {
          color: var(--first-color-lighter);
        }
      }

      .footer__social {
        font-size: 1.2rem;
        margin-right: var(--mb-1-5);

        &:hover {
          color: var(--first-color-lighter);
        }
      }
    }
  }
  .footer__copy {
    font-size: var(--smaller-font-size);
    text-align: center;
    color: var(--first-color-lighter);
    margin-top: var(--mb-3);
  }

  .footer__title,
  .footer__subtitle,
  .footer__link,
  .footer__social {
    color: #fff;
  }

  @media screen and (min-width: 568px) {
    .footer__container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 768px) {
    .footer__bg {
      padding: 3rem 0 3.5rem;

      .footer__container {
        padding: 0 1rem;
        grid-template-columns: repeat(3, 1fr);

        .footer__links {
          flex-direction: row;
          column-gap: 2rem;
        }

        .footer__socials {
          justify-self: flex-end;
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .footer__container {
      padding: 0;
    }
  }
`;

export const ScrollToTop = styled.div`
  position: fixed;
  bottom: ${(props) => (props.isScroll ? "4rem" : "-20%")};
  right: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: #fff;
  border-radius: 10%;
  background-color: var(--first-color);
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  z-index: var(--z-tooltip);

  &:hover {
    background-color: var(--first-color-alt);
  }
`;
