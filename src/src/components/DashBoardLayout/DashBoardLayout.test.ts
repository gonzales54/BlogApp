import { renderHook, act } from "@testing-library/react";
import useDashBoard from "./useDashBoard";

describe("", () => {
  it("isSideBarOpen return value to be true", () => {
    const { result } = renderHook(() => useDashBoard());
    expect(result.current.isSideBarOpen).toBe(false);

    act(() => {
      result.current.handleSideBarOpen();
    });

    expect(result.current.isSideBarOpen).toBe(true);
    expect(typeof localStorage.getItem("sideBar")).toBe("string");
  });
});
