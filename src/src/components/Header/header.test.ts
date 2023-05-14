import { renderHook, act } from "@testing-library/react";
import useHeader from "./useHeader";
import { describe, expect, it } from "@jest/globals";

describe("useHeader Custom Hooks Test", () => {
  it("isNavOpen return value to be true", () => {
    const { result } = renderHook(() => useHeader());
    expect(result.current.isNavOpen).toBe(false);

    act(() => {
      result.current.handleNavOpen();
    });

    expect(result.current.isNavOpen).toBe(true);
  });
});
