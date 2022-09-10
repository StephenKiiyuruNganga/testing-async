import {
  it,
  expect,
  beforeEach,
  beforeAll,
  afterAll,
  afterEach,
  describe,
} from "vitest"

import { User } from "./hooks"

const testEmail = "test@test.com"
let user

// * hooks can also be added in suites
beforeEach(() => {
  user = new User(testEmail)
})

it("should update the email", () => {
  const newTestEmail = "test2@test.com"

  user.updateEmail(newTestEmail)

  expect(user.email).toBe(newTestEmail)
})

it("should have an email property", () => {
  expect(user).toHaveProperty("email")
})

it("should store the provided email value", () => {
  expect(user.email).toBe(testEmail)
})

it("should clear the email", () => {
  user.clearEmail()

  expect(user.email).toBe("")
})

it("should still have an email property after clearing the email", () => {
  user.clearEmail()

  expect(user).toHaveProperty("email")
})

// * you can use "concurrent" on describe & it to run all  the tests concurrently as shown below

// describe.concurrent("", () => {})

// it.concurrent("", () => {})
