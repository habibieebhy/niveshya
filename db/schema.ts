import {
  pgSchema,
  uuid,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const niveshya = pgSchema("niveshya");

export const users = niveshya.table(
  "users",
  {
    id: uuid("id")
      .primaryKey()
      .defaultRandom(),

    name: text("name")
      .notNull(),

    email: text("email")
      .notNull()
      .unique(),

    passwordHash: text("password_hash")
      .notNull(),

    role: text("role")
      .notNull()
      .default("admin"),

    createdAt: timestamp("created_at")
      .defaultNow(),
  }
);

export const leads = niveshya.table(
  "leads",
  {
    id: uuid("id")
      .primaryKey()
      .defaultRandom(),

    businessName: text("business_name"),

    contactPerson: text("contact_person"),

    phone: text("phone")
      .notNull(),

    email: text("email"),

    service: text("service"),

    message: text("message"),

    source: text("source")
      .default("website"),

    leadType: text("lead_type"),

    city: text("city"),

    ageRange: text("age_range"),

    incomeRange: text("income_range"),

    familySize: text("family_size"),

    wealthInterest: text("wealth_interest"),

    servicesRequested: text(
      "services_requested"
    ),

    status: text("status")
      .default("new"),

    createdAt: timestamp("created_at")
      .defaultNow(),

    updatedAt: timestamp("updated_at")
      .defaultNow(),
  }
);

export const leadNotes = niveshya.table(
  "lead_notes",
  {
    id: uuid("id")
      .primaryKey()
      .defaultRandom(),

    leadId: uuid("lead_id")
      .notNull(),

    note: text("note")
      .notNull(),

    createdAt: timestamp("created_at")
      .defaultNow(),
  }
);

export const whatsappSessions =
  niveshya.table(
    "whatsapp_sessions",
    {
      phone: text("phone")
        .primaryKey(),

      leadId: uuid("lead_id"),

      flowType: text(
        "flow_type"
      ),

      currentStep: text(
        "current_step"
      ),

      name: text("name"),

      city: text("city"),

      ageRange: text(
        "age_range"
      ),

      incomeRange: text(
        "income_range"
      ),

      familySize: text(
        "family_size"
      ),

      wealthInterest: text(
        "wealth_interest"
      ),

      selectedServices: text(
        "selected_services"
      ),

      updatedAt: timestamp(
        "updated_at"
      ).defaultNow(),
    }
  );

export const whatsappMessages =
  niveshya.table(
    "whatsapp_messages",
    {
      id: uuid("id")
        .primaryKey()
        .defaultRandom(),

      leadId: uuid("lead_id"),

      phone: text("phone"),

      direction: text(
        "direction"
      ),

      messageText: text(
        "message_text"
      ),

      createdAt: timestamp(
        "created_at"
      ).defaultNow(),
    }
  );