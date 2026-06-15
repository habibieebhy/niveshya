import { sql } from "@/lib/neon";
import Link from "next/link";
import { logout } from "@/actions/auth/logout";

export default async function AdminPage() {
    const leads = await sql`
        SELECT *
        FROM niveshya.leads
        ORDER BY created_at DESC
    `;

    const totalLeads = leads.length;

    const newLeads = leads.filter(
        (lead: any) => lead.status === "new"
    ).length;

    const contactedLeads = leads.filter(
        (lead: any) => lead.status === "contacted"
    ).length;

    const convertedLeads = leads.filter(
        (lead: any) => lead.status === "converted"
    ).length;

    return (
        <main className="min-h-screen bg-background">
            <div className="mx-auto max-w-7xl px-6 py-12">
                
                {/* Header */}
                <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-emerald-600">
                            Niveshya CRM
                        </p>
                        <h1 className="mt-3 text-5xl font-bold tracking-tight">
                            Lead Dashboard
                        </h1>
                        <p className="mt-3 max-w-2xl text-muted-foreground">
                            Manage leads, monitor conversions and track client conversations
                            from a single workspace.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/admin/users"
                            className="rounded-xl border px-4 py-2 hover:bg-muted transition"
                        >
                            Users
                        </Link>
                        <form action={logout}>
                            <button
                                type="submit"
                                className="rounded-xl bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 transition"
                            >
                                Logout
                            </button>
                        </form>
                    </div>
                </div>

                {/* Metrics */}
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mb-12">
                    <div className="rounded-3xl border bg-card p-8">
                        <p className="text-sm text-muted-foreground">
                            Total Leads
                        </p>
                        <h2 className="mt-4 text-5xl font-bold">
                            {totalLeads}
                        </h2>
                    </div>

                    <div className="rounded-3xl border bg-card p-8">
                        <p className="text-sm text-muted-foreground">
                            New Leads
                        </p>
                        <h2 className="mt-4 text-5xl font-bold text-emerald-600">
                            {newLeads}
                        </h2>
                    </div>

                    <div className="rounded-3xl border bg-card p-8">
                        <p className="text-sm text-muted-foreground">
                            Contacted
                        </p>
                        <h2 className="mt-4 text-5xl font-bold">
                            {contactedLeads}
                        </h2>
                    </div>

                    <div className="rounded-3xl border bg-card p-8">
                        <p className="text-sm text-muted-foreground">
                            Converted
                        </p>
                        <h2 className="mt-4 text-5xl font-bold">
                            {convertedLeads}
                        </h2>
                    </div>
                </div>

                {/* Leads Section */}
                <div>
                    <div className="mb-8 flex items-center justify-between">
                        <div>
                            <h2 className="text-3xl font-bold">
                                Recent Leads
                            </h2>
                            <p className="mt-1 text-muted-foreground">
                                Latest inquiries received through the website.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {/* Empty State */}
                        {leads.length === 0 && (
                            <div className="rounded-3xl border p-16 text-center">
                                <h3 className="text-2xl font-semibold">
                                    No Leads Yet
                                </h3>
                                <p className="mt-2 text-muted-foreground">
                                    New website inquiries will appear here automatically.
                                </p>
                            </div>
                        )}

                        {/* Lead Cards */}
                        {leads.map((lead: any) => (
                            <Link
                                key={lead.id}
                                href={`/admin/leads/${lead.id}`}
                                className="block rounded-3xl border bg-card p-6 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <h3 className="text-xl font-semibold">
                                            {lead.business_name}
                                        </h3>
                                        <p className="mt-1 text-muted-foreground">
                                            {lead.contact_person}
                                        </p>
                                    </div>

                                    <div className="text-sm text-muted-foreground">
                                        {lead.created_at?.toLocaleDateString?.() ??
                                            new Date(lead.created_at).toLocaleDateString()}
                                    </div>
                                </div>

                                <div className="mt-6 grid gap-4 md:grid-cols-3">
                                    <div>
                                        <p className="text-sm text-muted-foreground">
                                            Phone
                                        </p>
                                        <p>
                                            {lead.phone}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-muted-foreground">
                                            Service
                                        </p>
                                        <p>
                                            {lead.service}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-muted-foreground">
                                            Status
                                        </p>
                                        <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-600">
                                            {lead.status}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
}