import { createUser } from "@/actions/users/create-user";

export default function CreateUserPage() {
  return (
    <main className="min-h-screen bg-background">

      <div className="mx-auto max-w-3xl px-6 py-12">

        <div className="mb-10">

          <p className="text-sm font-semibold tracking-widest text-emerald-600">
            USER MANAGEMENT
          </p>

          <h1 className="mt-3 text-5xl font-bold">
            Create User
          </h1>

        </div>

        <form
          action={createUser}
          className="space-y-4 rounded-3xl border bg-card p-8"
        >

          <input
            name="name"
            placeholder="Full Name"
            required
            className="w-full rounded-xl border p-3"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full rounded-xl border p-3"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full rounded-xl border p-3"
          />

          <select
            name="role"
            className="w-full rounded-xl border p-3"
            defaultValue="employee"
          >
            <option value="super_admin">
              Super Admin
            </option>

            <option value="admin">
              Admin
            </option>

            <option value="employee">
              Employee
            </option>

            <option value="viewer">
              Viewer
            </option>
          </select>

          <button
            type="submit"
            className="
              w-full
              rounded-xl
              bg-emerald-600
              py-3
              text-white
            "
          >
            Create User
          </button>

        </form>

      </div>

    </main>
  );
}