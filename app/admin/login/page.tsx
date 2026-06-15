import { login } from "@/actions/auth/login";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6">

      <div className="w-full max-w-md rounded-3xl border bg-card p-8 shadow-sm">

        <div className="mb-8 text-center">

          <p className="text-sm font-semibold tracking-widest text-emerald-600">
            ADMIN ACCESS
          </p>

          <h1 className="mt-4 text-4xl font-bold">
            Niveshya CRM
          </h1>

          <p className="mt-3 text-muted-foreground">
            Sign in to manage leads and client relationships.
          </p>

        </div>

        <form
          action={login}
          className="space-y-4"
        >

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="
              w-full
              rounded-xl
              border
              px-4
              py-3
              bg-background
            "
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="
              w-full
              rounded-xl
              border
              px-4
              py-3
              bg-background
            "
          />

          <button
            type="submit"
            className="
              w-full
              rounded-xl
              bg-emerald-600
              px-4
              py-3
              font-medium
              text-white
              hover:bg-emerald-700
              transition
            "
          >
            Sign In
          </button>

        </form>

      </div>

    </main>
  );
}