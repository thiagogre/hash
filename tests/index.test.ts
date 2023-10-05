import { describe, it, expect } from "bun:test";

import { data } from "../src/data";
import { md5, sha256 } from "../src/index";

describe("Corretos", () => {
  it("SHA256 e MD5 corretos", () => {
    const str = "SHA256 e MD5 corretos";

    expect(md5(str)).toBe("19406b49ace5073c806a79061f58dbd3");
    expect(sha256(str)).toBe(
      "c034489664dd98c3a2b0d7c1afc0717378827d9fa778288c8bb1c567c8bc2ec1"
    );
  });

  it("Somente SHA256 correto", () => {
    const str = "Somente SHA256 correto";

    expect(md5(str) === "cfe69ac7a0b07810b391c27b1ea838cd").toBeFalse();
    expect(sha256(str)).toBe(
      "5b22f6bf621c2116f0d4589c3b5405ed3b5d768b9ba1dfafbae9292331ce9827"
    );
  });

  it("Somente MD5 correto", () => {
    const str = "Somente MD5 correto";

    expect(md5(str)).toBe("c4e28d48ac81f88aaade5ed31f2e2c26");
    expect(
      sha256(str) ===
        "58d909cc5c6ac58bb509d4651528c66a8b9bd8a197ec260dd7d6754b98b6b63e"
    ).toBeFalse();
  });

  it("Nenhum dos dois corretos", () => {
    const str = "Nenhum dos dois corretos";

    expect(md5(str) === "8bdf3218ccd26f327220ad0daf3d3ce0").toBeFalse();
    expect(
      sha256(str) ===
        "d55825a0c3ee133ac29986b3fcefb30432968e99967787191bb48be89e485cf8"
    ).toBeFalse();
  });
});

describe("Identificação das frases consideradas verdadeiras", () => {
  data.forEach((obj) => {
    it(obj.str, () => {
      expect(md5(obj.str)).toBe(obj.md5);
      expect(sha256(obj.str)).toBe(obj.sha256);
    });
  });
});
