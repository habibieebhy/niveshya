import { eq, desc } from "drizzle-orm";

import { db } from "@/db";
import {
  leads,
  leadNotes,
} from "@/db/schema";

import { updateLeadStatus } from "@/actions/update-lead-status";
import { createNote } from "@/actions/create-note";

export default async function LeadPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const lead = await db
    .select()
    .from(leads)
    .where(
      eq(leads.id, id)
    )
    .limit(1)
    .then(
      (rows) => rows[0]
    );

  const notes = await db
    .select()
    .from(leadNotes)
    .where(
      eq(
        leadNotes.leadId,
        id
      )
    )
    .orderBy(
      desc(
        leadNotes.createdAt
      )
    );

  if (!lead) {
    return (
      <main className="p-8">
        Lead not found.
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          {lead.businessName}
        </h1>

        <div className="space-y-4 border rounded-2xl p-8">
          <p>
            <strong>
              Contact Person:
            </strong>{" "}
            {
              lead.contactPerson
            }
          </p>

          <p>
            <strong>
              Phone:
            </strong>{" "}
            {lead.phone}
          </p>

          <p>
            <strong>
              Email:
            </strong>{" "}
            {lead.email}
          </p>

          <p>
            <strong>
              Service:
            </strong>{" "}
            {lead.service}
          </p>

          <form
            action={
              updateLeadStatus
            }
            className="space-y-4"
          >
            <input
              type="hidden"
              name="id"
              value={lead.id}
            />

            <label className="font-semibold block">
              Status
            </label>

            <select
              name="status"
              defaultValue={
                lead.status ??
                "new"
              }
              className="border rounded-lg p-2"
            >
              <option value="new">
                New
              </option>

              <option value="contacted">
                Contacted
              </option>

              <option value="qualified">
                Qualified
              </option>

              <option value="converted">
                Converted
              </option>

              <option value="closed">
                Closed
              </option>
            </select>

            <div>
              <button
                type="submit"
                className="border rounded-lg px-4 py-2"
              >
                Save Status
              </button>
            </div>
          </form>

          <p>
            <strong>
              Message:
            </strong>{" "}
            {lead.message}
          </p>

          <p>
            <strong>
              Created:
            </strong>{" "}
            {lead.createdAt
              ? new Date(
                  lead.createdAt
                ).toString()
              : "-"}
          </p>
        </div>

        <div className="mt-10 border rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">
            Notes
          </h2>

          <form
            action={createNote}
            className="space-y-4 mb-8"
          >
            <input
              type="hidden"
              name="leadId"
              value={lead.id}
            />

            <textarea
              name="note"
              rows={4}
              placeholder="Add a note..."
              className="w-full border rounded-lg p-4"
            />

            <button
              type="submit"
              className="border rounded-lg px-4 py-2"
            >
              Add Note
            </button>
          </form>

          <div className="space-y-4">
            {notes.length ===
              0 && (
              <p className="text-muted-foreground">
                No notes yet.
              </p>
            )}

            {notes.map(
              (note) => (
                <div
                  key={note.id}
                  className="border rounded-xl p-4"
                >
                  <p>
                    {note.note}
                  </p>

                  <p className="text-sm text-muted-foreground mt-2">
                    {note.createdAt
                      ? new Date(
                          note.createdAt
                        ).toString()
                      : "-"}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </main>
  );
}