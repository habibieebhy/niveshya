export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-background">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="mb-12">

          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-emerald-600">
            SETTINGS
          </p>

          <h1 className="mt-3 text-5xl font-bold tracking-tight">
            CRM Settings
          </h1>

          <p className="mt-3 text-muted-foreground">
            Manage platform configuration, notifications and integrations.
          </p>

        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          <div className="rounded-3xl border bg-card p-8">

            <h2 className="text-2xl font-semibold">
              Account Settings
            </h2>

            <p className="mt-2 text-muted-foreground">
              Manage your profile and password.
            </p>

            <div className="mt-6 space-y-3">

              <button
                className="
                  w-full
                  rounded-xl
                  border
                  p-3
                  text-left
                  hover:bg-muted
                "
              >
                Change Password
              </button>

            </div>

          </div>

          <div className="rounded-3xl border bg-card p-8">

            <h2 className="text-2xl font-semibold">
              User Management
            </h2>

            <p className="mt-2 text-muted-foreground">
              Manage CRM users and permissions.
            </p>

            <div className="mt-6 space-y-3">

              <a
                href="/admin/users"
                className="
                  block
                  rounded-xl
                  border
                  p-3
                  hover:bg-muted
                "
              >
                Manage Users
              </a>

            </div>

          </div>

          <div className="rounded-3xl border bg-card p-8">

            <h2 className="text-2xl font-semibold">
              WhatsApp Integration
            </h2>

            <p className="mt-2 text-muted-foreground">
              Configure lead notifications and bot settings.
            </p>

            <div className="mt-6">

              <span
                className="
                  rounded-full
                  bg-amber-500/10
                  px-3
                  py-1
                  text-sm
                  text-amber-600
                "
              >
                Coming Soon
              </span>

            </div>

          </div>

          <div className="rounded-3xl border bg-card p-8">

            <h2 className="text-2xl font-semibold">
              Email Notifications
            </h2>

            <p className="mt-2 text-muted-foreground">
              Configure email alerts for incoming leads.
            </p>

            <div className="mt-6">

              <span
                className="
                  rounded-full
                  bg-amber-500/10
                  px-3
                  py-1
                  text-sm
                  text-amber-600
                "
              >
                Coming Soon
              </span>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}