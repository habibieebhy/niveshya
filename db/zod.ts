import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

import {
  users,
  leads,
  leadNotes,
  whatsappSessions,
  whatsappMessages,
} from "./schema";

export const createLeadSchema =
  createInsertSchema(leads, {
    phone: z.string().min(10),

    email: z.string()
      .email()
      .optional(),

    businessName: z.string()
      .min(2)
      .optional(),

    contactPerson: z.string()
      .min(2)
      .optional(),

    service: z.string()
      .min(1)
      .optional(),

    message: z.string()
      .min(1)
      .optional(),

    source: z.string()
      .optional(),

    leadType: z.enum([
      "accounting",
      "wealth",
    ]).optional(),

    city: z.string()
      .optional(),

    ageRange: z.string()
      .optional(),

    incomeRange: z.string()
      .optional(),

    familySize: z.string()
      .optional(),

    wealthInterest: z.string()
      .optional(),

    servicesRequested: z.string()
      .optional(),
  });

export const createUserWithPasswordSchema =
  createInsertSchema(users, {
    name: z.string().min(2),

    email: z.string().email(),

    role: z.string().min(1),
  }).extend({
    password: z.string().min(8),
  });

export const createNoteSchema =
  createInsertSchema(
    leadNotes,
    {
      leadId: z.string().uuid(),

      note: z.string().min(1),
    }
  );

export const loginSchema =
  z.object({
    email: z.string().email(),

    password: z.string().min(6),
  });

export const resetPasswordSchema =
  z.object({
    id: z.string().uuid(),

    password: z.string().min(8),
  });

export const updateLeadStatusSchema =
  z.object({
    id: z.string().uuid(),

    status: z.enum([
      "new",
      "contacted",
      "qualified",
      "converted",
      "closed",
    ]),
  });

export const createWhatsappSessionSchema =
  createInsertSchema(
    whatsappSessions,
    {
      phone: z.string().min(10),

      flowType: z.enum([
        "accounting",
        "wealth",
      ]).optional(),

      currentStep: z.string()
        .optional(),
    }
  );

export const createWhatsappMessageSchema =
  createInsertSchema(
    whatsappMessages,
    {
      phone: z.string().min(10),

      direction: z.enum([
        "inbound",
        "outbound",
      ]),

      messageText: z.string().min(1),
    }
  );