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
    businessName:
      z.string().min(2),

    contactPerson:
      z.string().min(2),

    phone:
      z.string().min(10),

    email:
      z.string().email(),

    service:
      z.string().min(1),

    message:
      z.string().min(1),
  });

export const createUserWithPasswordSchema =
  createInsertSchema(users, {
    name:
      z.string().min(2),

    email:
      z.string().email(),

    role:
      z.string().min(1),
  }).extend({
    password:
      z.string().min(8),
  });

export const createNoteSchema =
  createInsertSchema(
    leadNotes,
    {
      leadId:
        z.string().uuid(),

      note:
        z.string().min(1),
    }
  );

export const loginSchema =
  z.object({
    email:
      z.string().email(),

    password:
      z.string().min(6),
  });

export const resetPasswordSchema =
  z.object({
    id:
      z.string().uuid(),

    password:
      z.string().min(8),
  });

export const updateLeadStatusSchema =
  z.object({
    id:
      z.string().uuid(),

    status:
      z.enum([
        "new",
        "contacted",
        "qualified",
        "converted",
        "closed",
      ]),
  });

export const createWhatsappSessionSchema =
  createInsertSchema(
    whatsappSessions
  );

export const createWhatsappMessageSchema =
  createInsertSchema(
    whatsappMessages
  );