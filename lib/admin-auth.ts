import { createHmac, timingSafeEqual } from "node:crypto"

export const ADMIN_SESSION_COOKIE = "admin_session"

type AdminConfig = {
  username: string
  password: string
  sessionSecret: string
}

function getAdminConfig(): AdminConfig | null {
  const username = process.env.ADMIN_USERNAME
  const password = process.env.ADMIN_PASSWORD
  const sessionSecret = process.env.ADMIN_SESSION_SECRET

  if (!username || !password || !sessionSecret) {
    return null
  }

  return {
    username,
    password,
    sessionSecret,
  }
}

function safeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left)
  const rightBuffer = Buffer.from(right)

  if (leftBuffer.length !== rightBuffer.length) {
    return false
  }

  return timingSafeEqual(leftBuffer, rightBuffer)
}

function createSessionSignature(username: string, sessionSecret: string) {
  return createHmac("sha256", sessionSecret).update(username).digest("hex")
}

export function isAdminAuthConfigured() {
  return getAdminConfig() !== null
}

export function validateAdminCredentials(username: string, password: string) {
  const config = getAdminConfig()

  if (!config) {
    return false
  }

  return safeEqual(username, config.username) && safeEqual(password, config.password)
}

export function createAdminSessionValue() {
  const config = getAdminConfig()

  if (!config) {
    return null
  }

  return `${config.username}:${createSessionSignature(config.username, config.sessionSecret)}`
}

export function isValidAdminSession(sessionValue: string | undefined) {
  const config = getAdminConfig()

  if (!config || !sessionValue) {
    return false
  }

  const expected = `${config.username}:${createSessionSignature(config.username, config.sessionSecret)}`
  return safeEqual(sessionValue, expected)
}