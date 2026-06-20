import { db } from "@/db";
import { users } from "@/db/schema";
import { desc } from "drizzle-orm";
import Link from "next/link";

export default async function UsersPage() {
  const allUsers = await db
    .select({
      id: users.id,
      name: users.name,
      email: users.email,
      role: users.role,
      createdAt: users.createdAt,
    })
    .from(users)
    .orderBy(
      desc(users.createdAt)
    );

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold tracking-widest text-emerald-600">
              USER MANAGEMENT
            </p>

            <h1 className="mt-3 text-5xl font-bold">
              Users
            </h1>
          </div>

          <Link
            href="/admin/users/create"
            className="rounded-xl bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 transition"
          >
            Create User
          </Link>
        </div>

        <div className="space-y-4">
          {allUsers.map((user) => (
            <Link
              key={user.id}
              href={`/admin/users/${user.id}`}
              className="block rounded-3xl border bg-card p-6 transition hover:border-emerald-500 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-semibold text-xl">
                    {user.name}
                  </h2>

                  <p className="text-muted-foreground">
                    {user.email}
                  </p>
                </div>

                <div>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-600 capitalize">
                    {user.role}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}