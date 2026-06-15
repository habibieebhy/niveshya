import { SignJWT, jwtVerify } from "jose";

const secret = new TextEncoder().encode(
  process.env.AUTH_SECRET
);

export async function createSession(payload: {
  id: string;
  email: string;
  role: string;
}) {
  return await new SignJWT(payload)
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifySession(
  token: string
) {
  const { payload } =
    await jwtVerify(token, secret);

  return payload;
}