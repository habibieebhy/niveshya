import { eq } from "drizzle-orm";

import { db } from "@/db";

import {
  whatsappSessions,
} from "@/db/schema";

export async function processIncomingMessage(
  phone: string,
  name: string,
  text: string
) {
  const session =
    await db
      .select()
      .from(
        whatsappSessions
      )
      .where(
        eq(
          whatsappSessions.phone,
          phone
        )
      )
      .limit(1)
      .then(
        (rows) => rows[0]
      );

  if (!session) {
    await db
      .insert(
        whatsappSessions
      )
      .values({
        phone,
        name,
        currentStep:
          "MENU",
      });

    return `Welcome to Niveshya 👋

1️⃣ Accounting & Compliance

2️⃣ Wealth Advisory

3️⃣ Speak to Advisor`;
  }

  if (
    session.currentStep ===
    "MENU"
  ) {
    if (text === "1") {
      await db
        .update(
          whatsappSessions
        )
        .set({
          flowType:
            "accounting",

          currentStep:
            "ACCOUNTING_SELECT",
        })
        .where(
          eq(
            whatsappSessions.phone,
            phone
          )
        );

      return `Select one or more services:

1. Accounting & Bookkeeping
2. GST Compliance
3. TDS & Professional Tax Compliance
4. Bank Reconciliation
5. MIS Reporting
6. Vendor Management
7. Billing & Ledger
8. E-Way Bill & E-Invoice
9. Inventory Accounting
10. Payroll Support

Example:
1,2,10`;
    }

    if (text === "2") {
      await db
        .update(
          whatsappSessions
        )
        .set({
          flowType:
            "wealth",

          currentStep:
            "WEALTH_CITY",
        })
        .where(
          eq(
            whatsappSessions.phone,
            phone
          )
        );

      return `📍 Please share your city.`;
    }

    if (text === "3") {
      return `Our advisor will contact you shortly.`;
    }
  }

  return `Please choose:

1️⃣ Accounting & Compliance

2️⃣ Wealth Advisory

3️⃣ Speak to Advisor`;
}