import { sql } from "@/lib/neon";
import { resetPassword } from "@/actions/users/reset-password";

export default async function UserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const users = await sql`
    SELECT *
    FROM niveshya.users
    WHERE id = ${id}
    LIMIT 1
  `;

  const user = users[0];

  if (!user) {
    return (
      <main className="p-8">
        User not found
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">

      <div className="mx-auto max-w-4xl px-6 py-12">

        <h1 className="text-5xl font-bold mb-8">
          {user.name}
        </h1>

        <div className="rounded-3xl border bg-card p-8">

          <p>
            <strong>Email:</strong>{" "}
            {user.email}
          </p>

          <p className="mt-3">
            <strong>Role:</strong>{" "}
            {user.role}
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-semibold mb-4">
            Reset Password
          </h2>

          <form
            action={resetPassword}
            className="space-y-4"
          >

            <input
              type="hidden"
              name="id"
              value={user.id}
            />

            <input
              name="password"
              type="password"
              placeholder="New Password"
              required
              className="
                w-full
                rounded-xl
                border
                p-3
              "
            />

            <button
              type="submit"
              className="
                rounded-xl
                bg-emerald-600
                px-5
                py-3
                text-white
              "
            >
              Reset Password
            </button>

          </form>

        </div>

      </div>

    </main>
  );
}