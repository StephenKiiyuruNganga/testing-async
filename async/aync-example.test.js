import { describe, expect, it } from "vitest"
import { generateToken, generateTokenPromise } from "./async-example"

describe("generateToken()", () => {
  // * use done to tell vitest to wait for any callbacks that may be invoked, after that it can end the test
  it("should generate a token value", (done) => {
    const email = "sk@mail.com"

    generateToken(email, (error, token) => {
      try {
        expect(token).toBeDefined()
        // expect(token).toBe(2)
        done()
      } catch (error) {
        done(error)
      }
    })
  })
})

describe("generateTokenPromise()", () => {
  // * for promises, you can write tests like so
  // * OPTION 1️⃣
  it("should generate a token value - resolve version", () => {
    const email = "sk@mail.com"

    return expect(generateTokenPromise(email)).resolves.toBeDefined()
  })

  // * OPTION 2️⃣
  it("should generate a token value - async await version", async () => {
    const email = "tests@test.com"

    const token = await generateTokenPromise(email)

    expect(token).toBeDefined()
  })
})
