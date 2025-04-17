import React from "react"
import {render,screen} from "@testing-library/react";
// import '@testing-library/jest-dom/extend-expect';
import Hero from '../home/Hero';
import '@testing-library/jest-dom';

describe("Hero Component", () => {
    test("renders hero image", () => {
      render(<Hero />);
      const heroImage = screen.getByAltText("homeimg")
      expect(heroImage).toBeInTheDocument();
      expect(heroImage).toHaveClass("homeImgAttr");
    });
  });