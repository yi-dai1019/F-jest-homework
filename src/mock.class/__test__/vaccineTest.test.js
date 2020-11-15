import VaccineTest from "../vaccineTest";
import Covid19Vaccine from "../covid19Vaccine";

jest.mock("../recipient", () => {
  // mock class实现
  return jest.fn().mockImplementation(() => ({
    hasAntiBodies: false,
    acceptInjection: jest.fn(),
  }));
});

beforeEach(() => {
  // clear mock here
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    // TODO 14: add test here
    const vaccineTest = new VaccineTest();
    vaccineTest.inject();
    expect(vaccineTest.recipient.acceptInjection).toHaveBeenCalledWith(
      expect.any(Covid19Vaccine)
    );
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    // TODO 15: add test here
    const vaccineTest = new VaccineTest();
    vaccineTest.recipient.getHasAntibodies = jest.fn().mockReturnValue(true);
    expect(vaccineTest.test()).toBe("Vaccine Test Success");
  });

  test("should get Failed if recipient has no antibodies", () => {
    // TODO 16: add test here
    const vaccineTest = new VaccineTest();
    vaccineTest.recipient.getHasAntibodies = jest.fn().mockReturnValue(false);
    expect(vaccineTest.test()).toBe("Vaccine Test Failed");
  });
});
